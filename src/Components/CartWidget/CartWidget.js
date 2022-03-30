import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <img src='../../Images/shopping-cart-icon.png' alt='imagen cart' className='cartWidgetImg'/>
            <p className='cartWidgetQuantity'>0</p>
        </div>
    )
};

export default CartWidget;