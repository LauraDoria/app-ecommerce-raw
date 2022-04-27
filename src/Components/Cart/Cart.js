import { useContext } from "react"
import CartContextProvider from "../CartContext/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContextProvider)

    if(cart.length === 0) {
        return (
            <h3>Tu carrito está vacío!</h3>
        )
    }

    return (
        <div>
            <h1>Tu carrito</h1>
            <ul>
                {cart.map(producto => <li key={producto.id}>{producto.imagen} Nombre: {producto.nombre}  cantidad: {producto.quantity} precio: {producto.precio}  subtotal: {producto.quantity * producto.precio} <button onClick={() => removeItem(producto.id)}>X</button></li>)}   
            </ul>
        </div>
    )
}

export default Cart