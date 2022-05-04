import { useContext } from "react"
import CartContextProvider from "../CartContext/CartContext"
import CartItem from "../CartItem/CartItem"
import { Timestsamp, writeBatch, getDocs, collection, query, where, documentId, doc, addDoc } from "firebase/firestore"
import firestoreDataBase from '../../Services/Firebase';
import { useState } from "react";

const Cart = () => {

    const [loading, setLoading] = useState(false)

    const { cart, removeItemFromCart, cartTotal, cartItemQuantity } = useContext(CartContextProvider)
    
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
    } else {
        return (
        <div>
            <h1>Tu carrito</h1>
            <ul>
                {cart.map(producto => <CartItem key={producto.id}>{producto.imagen} Nombre: {producto.nombre}  cantidad: {cartItemQuantity(producto)} precio: {producto.precio}  subtotal: {cartItemQuantity(producto) * producto.precio} <button onClick={() => removeItemFromCart(producto.id)}>X</button></CartItem>)}   
            </ul>
            <div>
                <form>
                    <p>Nombre</p>
                    <input type="text" placeholder="Nombre"></input>
                    <p>Apellido</p>
                    <input type="text" placeholder="Apellido"></input>
                    <p>Dirección de correo electrónico</p>
                    <input type="text" placeholder="eMail"></input>
                    <p>Domicilio</p>
                    <input type="text" placeholder="Dirección"></input>
                </form>
                <button onClick={() => generarOrdenDeCompra()}>Crear orden de compra</button>
            </div>
        </div>
    )}
}

export default Cart