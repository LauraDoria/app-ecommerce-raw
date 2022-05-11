import './ItemDetailContainer.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductInfo } from '../../asyncmockup';
import { Link, useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const {productId} = useParams()

    /*Hook "useState" para guardar en products los datos recibidos de getProductInfo, a través de
    la función setProducts(). El estado inicial es un array vacío, establecemos en useState.
    "setProducts" se define la función que setea los cambios de estado, "products" es el lugar
    donde se guardan los cambios de estado (no confundir con el argumento que se pasa a 
    "getProductInfo().then()").*/
    //Desestructuración
    const [productDetails, setProductDetails] = useState([]) 

    useEffect(() => {
        //Base de datos de asyncmockup.js
        //Recibe promesa desde el getProductInfo importado de asyncmockup.js
        getProductInfo(productId).then(prods => {
            /*Setea el estado de lo recibido, "prods" es el argumento, la base de datos de
            productos. La función setProducts lo guarda en el array "products".*/
            setProductDetails(prods) 
        }).catch(error => {
            console.log(error)
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

    return(
        <section className='itemDetailContainer'>

            <NavBar />
            
            {/*{productDetails.map(product => */}<ItemDetail
                
                key={productDetails.id} 
    
                nombre={productDetails.nombre}

                imagenDetalle={productDetails.imagenDetalle}

                precio={productDetails.precio}
    
                tipoProducto={productDetails.tipoProducto}
    
                tipoPiel={productDetails.tipoPiel}

                tipoCabello={productDetails.tipoCabello}

                usos={productDetails.usos}

                zeroWaste={productDetails.zeroWaste}

                presentacion={productDetails.presentacion}

                detalle={productDetails.detalle}

                modoUso={productDetails.modoUso}

                inci={productDetails.inci}/>{/*})}*/}

            <Footer />

        </section>
    );

};

export default ItemDetailContainer;


// useEffect(() => {
//         getProductsById(productId).then(item => {
//             setProduct(item)          
//         }).catch(err  => {
//             console.log(err)
//         }).finally(() => {
//             setLoading(false)
//         })

//         return (() => {
//             setProduct()
//         })

//     }, [productId])

           