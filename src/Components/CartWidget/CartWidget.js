import './CartWidget.css';
import { useContext } from 'react';
import { Context } from '../../App';



const CartWidget = () => {
    const value = useContext(Context)
    return (
        <div className='cartWidget'>
            <img src='../../Images/shopping-cart-icon.png' alt='imagen cart' className='cartWidgetImg'/>
            <p className='cartWidgetQuantity'>0</p>
        </div>
    )
};

export default CartWidget;