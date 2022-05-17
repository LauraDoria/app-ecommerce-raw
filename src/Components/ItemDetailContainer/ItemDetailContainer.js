import './ItemDetailContainer.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import firestoreDataBase from '../../Services/Firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const {productId} = useParams()
    const [productDetails, setProductDetails] = useState([]) 

    useEffect(() => {
        getDoc(doc(firestoreDataBase, 'productsRaw', productId)).then(respuesta => {
            const productoDataBase = { id: respuesta.id, ...respuesta.data() }
            setProductDetails(productoDataBase)
        })
    }, [productId])

    return(
        <section className='itemDetailContainer'>
            <NavBar />
            <div className='navigateGallery'>
                <Link className='navigateGalleryButton' to='/list'>Volver a Productos</Link>
                <Link className='navigateGalleryButton' to='/cart'>Ir al Carrito</Link>
            </div>
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
           