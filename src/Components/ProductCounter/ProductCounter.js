import './ProductCounter.css';
import { useState } from 'react';

const ProductCounter = ({stock, addToCart }) => {

    const [productCount, setProductCount] = useState(0);
    
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

    return (
        <div className='itemDetailCounterContainer'>
            <div className='productCounter'>
                <button className='productCounterButton' onClick={increaseProductQuantity}>+</button>
                <p className='productCounterCount'>{productCount}</p>
                <button className='productCounterButton' onClick={decreaseProductQuantity}>-</button>
            </div>
            <button className='addToCartProductDetailButton' onClick={() =>{
                addToCart(productCount)
            }}>Agregar al carrito</button>
        </div>
    )
};

export default ProductCounter;