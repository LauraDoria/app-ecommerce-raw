import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'

const CartItem = ({ id, nombre, presentacion, cantidad, subtotal }) => {

    const { cart, removeItemFromCart } = useContext(CartContext)

    return(
        <div className="cartRow">
            <div className="cartRowCategories">
                <div className="cartValueContainer"><h4 className="cartText subtitle">Producto</h4></div>
                <div className="cartValueContainer"><h4 className="cartText subtitle">Cantidad</h4></div>
                <div className="cartValueContainer"><h4 className="cartText subtitle">Subtotal</h4></div>
                <div className="cartValueContainer"></div>
            </div>
            <hr className="cartRowRuler" />
            <div className="cartRowValues">
                <div className="cartValueContainer"><p className="cartText value">{nombre} | {presentacion}</p></div>
                <div className="cartValueContainer"><p className="cartText value">{cantidad}</p></div>
                <div className="cartValueContainer"><p className="cartText value">${subtotal}</p></div>
                <div className="cartValueContainer"><input type="button" value="X" className="cartRowButton" onClick={() => removeItemFromCart(id)} /></div>
            </div>        
        </div>
    )
}

export default CartItem