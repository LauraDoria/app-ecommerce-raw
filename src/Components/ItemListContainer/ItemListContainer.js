import './ItemListContainer.css'; //Importa archivo de estilos.
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList'; //Importa componentes (default).
import { useState, useEffect } from 'react'; //Importa hooks de la librería de react, useState almacena cambios de estado en componentes, useEffect me permite escribir código que se ejecute después del primer renderizado de la app.
import { getProductCategory } from '../../asyncmockup'; //Importa simulación de base de datos de productos (export nombrado).
import { useParams } from 'react-router-dom';
import firestoreDataBase from '../../Services/Firebase';
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';

//Componente
const ItemListContainer = () => { //Recibe las propiedades asignadas al componente desde app.js
    /*Hook "useState" para guardar en products los datos recibidos de getProductInfo, a través de
    la función setProducts(). El estado inicial es un array vacío, establecemos en useState.
    "setProducts" se define la función que setea los cambios de estado, "products" es el lugar
    donde se guardan los cambios de estado (no confundir con el argumento que se pasa a 
    "getProductInfo().then()").*/

    const {categoryId} = useParams() 

    //Desestructuración
    const [products, setProducts] = useState([]) 

    useEffect(() => {
        //Base de datos de asyncmockup.js
        //Recibe promesa desde el getProductInfo importado de asyncmockup.js
        getProductCategory(categoryId).then(prods => {
            /*Setea el estado de lo recibido, "prods" es el argumento, la base de datos de
            productos. La función setProducts lo guarda en el array "products".*/
            setProducts(prods) 
        })
    }, [categoryId])

    /*Cambiar el atributo "id" de la base de datos en asyncmockup por el atributo "numeroOrden" 
    en la base de datos de firestore para usar con orderBy y que los productos aparezcan en el 
    orden correcto*/
    //Base de datos de Firebase
    /*useEffect(() => {

        const collectionReference = categoryId
            ? query(collection(firestoreDataBase, 'productsRaw'), where('tipoProducto', '==', categoryId))
            : query(collection(firestoreDataBase, 'productsRaw'), orderBy('numeroOrden', 'asc'))

        getDocs(collectionReference).then(respuesta => {
            console.log(respuesta)
            const productosDataBase = respuesta.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            console.log(productosDataBase)
            setProducts(productosDataBase)
        })
    }, [categoryId])*/ //Se ejecuta después del primer renderizado.

    /*if(productosDataBase.length === 0) {
        return(
            <main className='itemListContainer'>
                <NavBar />
                <div  className='noResultsContainer'>
                    <h2 className='itemListContainerTitle'>* Productos *</h2>
                    <h3 className='itemListContainerNoResults'>* No se encontraron productos *</h3>
                </div> 
                <Footer />
            </main>
        )
    }*/

    return(
        <main className='itemListContainer'>
            <NavBar />
            {/*Recibe "properties" y su propiedad ".message", pasada como argumento del
            componente ItemListContainer desde el contenedor padre*/}
            <h2 className='itemListContainerTitle'>* Productos *</h2>
            {/*Pasa el estado guardado en el array "products" como argumento al componente
            hijo ItemList*/}
            <ItemList products={products} />
            <Footer />
        </main>
    ) //Retorna lo que se muestra en pantalla
};

export default ItemListContainer; //Exporta componente (default)