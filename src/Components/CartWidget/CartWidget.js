import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const CartWidget = () => {

    const { getProductQuantity } = useContext(CartContext)

    return (
        <div className='cartWidget'>
            <img src='../../Images/shopping-cart-icon.png' alt='imagen cart' className='cartWidgetImg'/>
            <p className='cartWidgetQuantity'>{ getProductQuantity() }</p>
        </div>
    )
};

export default CartWidget;