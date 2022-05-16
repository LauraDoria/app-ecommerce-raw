
import './Cart.css'
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import CartItem from "../CartItem/CartItem"
import ClientPurchaseForm from "../ClientPurchaseForm/ClientPurchaseForm"
import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import CartContext from '../../Context/CartContext'
import { Timestsamp, writeBatch, getDocs, collection, query, where, documentId, doc, addDoc } from "firebase/firestore"
import firestoreDataBase from '../../Services/Firebase';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const Cart = () => {

    const { cart, clearCart, cartTotal, getProductQuantity } = useContext(CartContext)

    console.log(cart)

    /*const [loading, setLoading] = useState(false)

    const { cart, removeItemFromCart, cartTotal, cartItemQuantity } = useContext(CartContextProvider)
    
    const formClientData = []

    const [client, setClient] = useState([])

    const enviarDatosCliente = () => {
        setClient(formClientData)
        console.log(client)
    }
    
    const generarOrdenDeCompra = () => {

        setLoading(true)

        const clientOrder = {
            items : cart,
            clientDetails : {
                clientName : "xxxx",
                clientLastName : "xxxx",
                phoneNumber : 123456789,
                adress : "xxxx",
                clientEmail : "xxx@xxxx.com",
            },
            total : cartTotal(),
            purchaseDate : Timestsamp.fromDate(new Date()),
        }

        const batch = writeBatch(firestoreDataBase)

        const orderItemsIds = cart.map(item => item.id)

        const outOfStock = []

        const productCollectionReference = collection(firestoreDataBase, 'productsRaw' )

        //Traer documentos desde la collección 'productCollectionReference', donde los id de los documentos se encuentren dentro del array de compra 'orderItemsIds'
        getDocs(query(productCollectionReference, where(documentId(), 'in', orderItemsIds))).then(response => response.docs.forEach(
            doc => {
                const docInfo = doc.data()
                const itemQuantity = cart.find(item => item.id === doc.id)?.quantity

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
            console.log("El nº de id de tu compra es " + id)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading === true) {
        <h3>Tu orden de compra está siendo procesada...</h3>
    }
    
    if(cart.length === 0) {
        return (
            <h3>Tu carrito está vacío!</h3>
        )
    } else {*/

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
                            console.log(cart)
                        }}>Vaciar Carrito</button>
                    </ul>
                    <div className='formContainer'>
                        {showForm === 'hide'? <button className='cartButton' onClick={formHandle}>Comprar</button> :
                            <ClientPurchaseForm />
                        }
                        {/* {showForm === 'hide'? null : <button className='cartButton pagar'>Pagar</button>} */}
                        
                        {/* <button onClick={() => generarOrdenDeCompra()}>Crear orden de compra</button> */}
                    </div>
                </div>
                <Footer />
            </section>
        )
    }

        
}

export default Cart