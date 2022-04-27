import './CartWidget.css';
import { useContext } from 'react';
import CartContextProvider from '../CartContext/CartContext';

const CartWidget = () => {

    const { getProductQuantity } = useContext(CartContextProvider)

    return (
        <div className='cartWidget'>
            <img src='../../Images/shopping-cart-icon.png' alt='imagen cart' className='cartWidgetImg'/>
            { getProductQuantity }
        </div>
    )
};

export default CartWidget;