import './ItemListContainer.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ItemList from '../ItemList/ItemList'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import firestoreDataBase from '../../Services/Firebase'
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore'

const ItemListContainer = () => {

    const {categoryId} = useParams() 

    const [products, setProducts] = useState([]) 

    useEffect(() => {

        const collectionReference = categoryId
            ? query(collection(firestoreDataBase, 'productsRaw'), where('tipoProducto', '==', categoryId))
            : query(collection(firestoreDataBase, 'productsRaw'), orderBy('numeroOrden', 'asc'))

        getDocs(collectionReference).then(respuesta => {
            const productosDataBase = respuesta.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(productosDataBase)
        })
    }, [categoryId])

    if(products.length === 0) {
        return(
            <main className='itemListContainer'>
                <NavBar />
                <div  className='noResultsContainer'>
                    <LoadingSpinner />
                </div> 
                <Footer />
            </main>
        )
    }

    return(
        <main className='itemListContainer'>
            <NavBar />
            <h2 className='itemListContainerTitle'>* Productos *</h2>
            <ItemList products={products} />
            <Footer />
        </main>
    )
};

export default ItemListContainer