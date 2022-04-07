import './ItemListContainer.css'; //Importa archivo de estilos.
import { useState, useEffect } from 'react'; //Importa hooks de la librería de react, useState almacena cambios de estado en componentes, useEffect me permite escribir código que se ejecute después del primer renderizado de la app.
import ProductCounter from '../ProductCounter/ProductCounter'; //Importa componentes (default).
import ItemList from '../ItemList/ItemList'; //Importa componentes (default).
import { getProductInfo } from '../../asyncmockup'; //Importa simulación de base de datos de productos (export nombrado).
const addToCart = () => {
    console.log("Los productos seleccionados se agregaron a tu carrito")
} //Función para el botón de "Agregar al carrito".

//Componente
const ItemListContainer = (properties) => { //Recibe las propiedades asignadas al componente desde app.js
    const [products, setProducts] = useState([]) //useState para guardar en products los datos recibidos de getProductInfo, a través de la función setProducts()

    useEffect(() => {
        getProductInfo().then(prods => { //Recibe promesa desde el getProductInfo importado de asyncmockup.js
            setProducts(prods) //Setea el estado de lo recibido.
        })
    }, []) //Se ejecuta después del primer renderizado.

    return (
        <div className='selectedItemsContainer'>
            <h2 className='itemListContainer'>{properties.message}</h2>
            <ItemList products={products}/>
            <ProductCounter className='contador' stock={20}  /*Componente contador*//>
            <button className='addToCartButton' onClick={addToCart}>Agregar al carrito</button>
        </div>
    ) //Retorna lo que se muestra en pantalla
};

export default ItemListContainer; //Exporta componente (default)