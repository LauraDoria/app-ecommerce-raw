import {useState, useEffect} from "react";
import './MercadoLibreItemListContainer.css';

const MercadoLibreItemListContainer = (properties) => {

    const [products, setProducts] = useState([])

    useEffect (() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=shampoo+solido').then(response => {
            return response.json()
        }).then(response => {
            setProducts(response.results);
        });
    }, []);

    console.log(products)

    return (
        <div className='mercadoLibreItemListContainer'>
            <h2 className='mercadoLibreItemListContainerTitulo'>{properties.title}</h2>
            <ul>
                {products.map(p => {
                    <li key={p.id}>
                        <img src={p.thumbnail} alt={p.title} />
                        <p>{p.title}</p>
                        <p>{p.price}</p>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default MercadoLibreItemListContainer;