import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductInfo } from '../../asyncmockup';

const ItemDetailContainer = () => {

    const [productDetails, setProductDetails] = useState([])

    useEffect (() => {
        getProductInfo().then(p => {
            setProductDetails(p);
        })
    }, []);

    return(
        <div className='itemDetailContainer'>
            <ItemDetail productDetails={productDetails}/>
        </div>
    );

};

export default ItemDetailContainer;