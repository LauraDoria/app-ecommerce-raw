import './ItemListContainer.css'; //Importa archivo de estilos.
import { useState, useEffect } from 'react'; //Importa hooks de la librería de react, useState almacena cambios de estado en componentes, useEffect me permite escribir código que se ejecute después del primer renderizado de la app.
import ItemList from '../ItemList/ItemList'; //Importa componentes (default).
import { getProductInfo } from '../../asyncmockup'; //Importa simulación de base de datos de productos (export nombrado).
//import { getDocs, collection } from 'firebase/firestore';
//import firestoreDataBase from '../../Services/Firebase';

//Componente
const ItemListContainer = (properties) => { //Recibe las propiedades asignadas al componente desde app.js
    /*Hook "useState" para guardar en products los datos recibidos de getProductInfo, a través de
    la función setProducts(). El estado inicial es un array vacío, establecemos en useState.
    "setProducts" se define la función que setea los cambios de estado, "products" es el lugar
    donde se guardan los cambios de estado (no confundir con el argumento que se pasa a 
    "getProductInfo().then()").*/
    //Desestructuración
    const [products, setProducts] = useState([]) 

    useEffect(() => {
        //Base de datos de asyncmockup.js
        //Recibe promesa desde el getProductInfo importado de asyncmockup.js
        getProductInfo().then(prods => {
            /*Setea el estado de lo recibido, "prods" es el argumento, la base de datos de
            productos. La función setProducts lo guarda en el array "products".*/
            setProducts(prods) 
        })

        //Base de datos de Firebase
        /*getDocs(collection(firestoreDataBase, 'productsRaw')).then(respuesta => {
            console.log(respuesta)
            const productosDataBase = respuesta.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            console.log(productosDataBase)
            setProducts(productosDataBase)
        })*/
    }, []) //Se ejecuta después del primer renderizado.

    return (
        <div className='itemListContainer'>
            {/*Recibe "properties" y su propiedad ".message", pasada como argumento del
            componente ItemListContainer desde el contenedor padre*/}
            <h2 className='itemListContainerTitle'>{properties.message}</h2>
            {/*Pasa el estado guardado en el array "products" como argumento al componente
            hijo ItemList*/}
            <ItemList products={products}/>
        </div>
    ) //Retorna lo que se muestra en pantalla
};

export default ItemListContainer; //Exporta componente (default)