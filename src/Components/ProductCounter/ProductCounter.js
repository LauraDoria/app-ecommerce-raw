import './ProductCounter.css';
import { useState } from 'react';
import { useNotification } from '../Notification/Notification';

const ProductCounter = ({stock, addToCart, nombre, precio}) => {

    const [productCount, setProductCount] = useState(0);

    const { notificationMessage } = useNotification
    
    const increaseProductQuantity = () => {
        if (productCount < stock) {
            setProductCount(productCount + 1)
        }
    };

    const decreaseProductQuantity = () => {
        if (productCount > 0) {
            setProductCount(productCount - 1)
        }
    }

    const notificationMessageHandle = () => {
        if(productCount !== 0) {
            const messageToSend = `Se agregaron ${productCount} unidades de ${nombre} por un total de $${productCount*precio}`
            notificationMessage(messageToSend)
        } else {
            console.log('No se agregaron productos.')
        }
    }

    return (
        <div className='itemDetailCounterContainer'>
            <div className='productCounter'>
                <button className='productCounterButton' onClick={increaseProductQuantity}>+</button>
                <p className='productCounterCount'>{productCount}</p>
                <button className='productCounterButton' onClick={decreaseProductQuantity}>-</button>
            </div>
            <button className='addToCartButton' onClick={() =>{
                addToCart(productCount)
                notificationMessageHandle()
            }}>Agregar al carrito</button>
        </div>
    )
};

export default ProductCounter;