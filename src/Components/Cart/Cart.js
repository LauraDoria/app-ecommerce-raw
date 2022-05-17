
import './Cart.css'
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import CartItem from "../CartItem/CartItem"
import ClientPurchaseForm from "../ClientPurchaseForm/ClientPurchaseForm"
import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import CartContext from '../../Context/CartContext'
import { Timestamp, writeBatch, getDocs, collection, query, where, documentId, addDoc } from "firebase/firestore"
import firestoreDataBase from '../../Services/Firebase';

const Cart = () => {

    const { cart, clearCart, cartTotal, getProductQuantity } = useContext(CartContext)

    const [showPurchaseOrder, setShowPurchaseOrder] = useState('')
    
    const generarOrdenDeCompra = (clientForm) => {

        const clientOrder = {
            items : cart,
            clientDetails : clientForm,
            total : cartTotal(),
            purchaseDate : Timestamp.fromDate(new Date()),
        }

        const batch = writeBatch(firestoreDataBase)

        const orderItemsIds = cart.map(item => item.id)

        const outOfStock = []

        const productCollectionReference = collection(firestoreDataBase, 'productsRaw' )

        getDocs(query(productCollectionReference, where(documentId(), 'in', orderItemsIds))).then(response => response.docs.forEach(
            doc => {
                const docInfo = doc.data()
                const itemQuantity = cart.find(item => item.id === doc.id)?.cantidad

                if(docInfo.stock >= itemQuantity) {
                    batch.update(doc.ref, { stock: docInfo.stock - itemQuantity })
                } else {
                    outOfStock.push({id: doc.id, docInfo})
                }
            }
        )).then(() => {
            if(outOfStock.length === 0) {
                const itemsCollectionReference = collection(firestoreDataBase, 'orders' )
                return addDoc(itemsCollectionReference, clientOrder)
            } else {
                return Promise.reject({name: "outOfStockProductError", products: outOfStock})
            }
        }).then(({ id }) => {
            batch.commit()
            setShowPurchaseOrder("El código de seguimiento de tu compra es " + id)
        })
    }

    const [showForm, setShowForm] = useState('hide')

    const formHandle = () => {
        setShowForm('show')
    }

    if(cart.length === 0) {
        return(
            <section className="cartContainer">
                <NavBar />
                <div className='cart'>
                    <h2 className='cartTitle'>* Tu Carrito *</h2>
                    <div className='emptyCartContainer'>
                        <h3 className='emptyCartTitle'>Tu Carrito está vacío!</h3>
                        <img src='../../Images/music-toggle-play-to-pause.svg' alt='imagen logo' />
                        <Link className='cartButtonTwo' to='/list'>Volver a Productos</Link>
                    </div> 
                </div>
                <Footer />
            </section>
        ) 
    } else {
        return (
            <section className="cartContainer">
                <NavBar />
                <div className='cart'>
                    <h2 className='cartTitle'>* Tu Carrito *</h2>
                    <ul className='cartRows'>
                        {cart.map(producto => <CartItem
    
                            id={producto.id}
                                                    
                            nombre={producto.nombre}
                                                    
                            presentacion={producto.presentacion}
                                                    
                            cantidad={producto.cantidad}
                                                    
                            subtotal={producto.subtotal} />)}
    
                        <div className='cartTotal'>
                            <div className='cartTotalContainer'>
                                <div className='cartTotalItem itemUno'><h3 className='cartTotalTitle'>Total Unidades</h3></div>
                                <div className='cartTotalItem itemDos'><h3 className='cartTotalTitle'>Total</h3></div>
                            </div>
                            <hr className='cartRuler' />
                            <div className='cartTotalContainer'>
                                <div className='cartTotalItem itemUno'><p className='cartTotalValue'>{ getProductQuantity() }</p></div>
                                <div className='cartTotalItem itemDos'><p className='cartTotalValue'>{ cartTotal() }</p></div>
                            </div>
                        </div>
                        <button className='cartButtonTwo' onClick={() => {
                            clearCart()
                        }}>Vaciar Carrito</button>
                    </ul>
                    <div className='formContainer'>
                        {showForm === 'hide'? <button className='cartButton' onClick={formHandle}>Comprar</button> :
                            <ClientPurchaseForm generarOrdenDeCompra={generarOrdenDeCompra} showPurchaseOrder={showPurchaseOrder} />
                        }
                    </div>
                </div>
                <Footer />
            </section>
        )
    } 
}

export default Cart