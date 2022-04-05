import './ProductCounter.css';
import { useState } from 'react';

const ProductCounter = ({stock}) => {
    const productCountState = useState(0);
    
    const increaseProductQuantity = () => {
        if (productCountState[0] < stock) {
            productCountState[1](productCountState[0] + 1)
        }
    };

    const decreaseProductQuantity = () => {
        if (productCountState[0] > 0) {
            productCountState[1](productCountState[0] - 1)
        }
    }

    return (
        <div className='productCounter'>
            <button className='productCounterButton' onClick={increaseProductQuantity}>+</button>
            <p>{productCountState[0]}</p>
            <button className='productCounterButton' onClick={decreaseProductQuantity}>-</button>
        </div>
    )
};

export default ProductCounter;