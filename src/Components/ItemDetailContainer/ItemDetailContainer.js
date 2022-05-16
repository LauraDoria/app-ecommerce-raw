import './ItemDetailContainer.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ItemDetail from '../ItemDetail/ItemDetail';
import Notification from '../Notification/Notification';
import { useState, useEffect } from 'react'
import { getProductInfo } from '../../asyncmockup';
import { Link, useParams } from 'react-router-dom';
import firestoreDataBase from '../../Services/Firebase';
import { getDoc, doc, query, where, limit } from 'firebase/firestore';

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

        /*Importar limit de firebase, se agrega como parámetro a la query para limitar el número
        de resultados que arroja el filtro, usar para crear componente "ProductosSimilares" que
        vaya dentro de ItemDetailContainer. Buscar productos con el mismo tipoProducto que el del
        Id
        Usar el mismo código que ItemListContainer, con esta modificación:
        query(collection(firestoreDataBase, 'productsRaw'), where('tipoProducto', '==', tipoProducto), limit(3))*/
        //Base de datos de Firebase
        /*getDoc(doc(firestoreDataBase, 'productsRaw', productId)).then(respuesta => {
            console.log(respuesta)
            const productoDataBase = { id: respuesta.id, ...respuesta.data() }
            console.log(productoDataBase)
            setProductDetails(productoDataBase)
        })
        
        return(() => {
                setProduct()
            }    
        )*/
    }, [productId]) //Se ejecuta después del primer renderizado.

    return(
        <section className='itemDetailContainer'>

            <NavBar />

            <div className='navigateGallery'>
                <Link className='navigateGalleryButton' to='/list'>Volver a Productos</Link>
                <Link className='navigateGalleryButton' to='/cart'>Ir al Carrito</Link>
            </div>

            <Notification />
            
            <ItemDetail
                
                id={productDetails.id} 
    
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

                inci={productDetails.inci}
                
                stock={productDetails.stock} />

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

           