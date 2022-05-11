import './ItemDetail.css'
import ProductCounter from '../ProductCounter/ProductCounter';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContextProvider from '../CartContext/CartContext';



const ItemDetail = ({ nombre, imagenDetalle, precio, tipoPiel, tipoCabello, usos, zeroWaste, presentacion, detalle, modoUso, inci}) => {

    /*const [quantity, setQuantity] = useState(0)
    const addToCart = (count) => {
        console.log("Los productos seleccionados se agregaron a tu carrito")
        setQuantity(count)
    }*/

    //const { addToCart, isInCart } = useContext(CartContextProvider)

    return(
        <article className='itemDetailContainerShadow'>
                <div className='itemDetailImage'>
                    <img src={imagenDetalle} alt={nombre}></img>
                    {/*<ProductCounter stock={20} />*/}
                    {/*{isInCart({id}) ? <Link to='/cart' className='addToCartButton'>Ir al carrito</Link> : <button className='addToCartButton' onClick={addToCart}>Agregar al carrito</button>}*/}
                </div>
                <div className='itemDetailDetailContainer'>
                    <div className='itemDetailDetail'>
                        <h3 className='itemDetailDetailTitle'>{nombre}</h3>
                        <p className='itemDetailDetailTitle'> {presentacion} | $ {precio}</p>
                        <div className='itemDetailDetailFilter'>
                            <p className='itemDetailDetailZeroWaste'>Zero Waste: {zeroWaste}</p>
                            <p className='itemDetailDetailTipoCabello'>Tipo {tipoCabello === 'no disponible'? 'Piel' : 'Cabello'}: {tipoCabello === 'no disponible'? tipoPiel : tipoCabello}</p>
                            <p className='itemDetailDetailProductoUsos'>Tipo Producto: {usos}</p>
                        </div>
                        <p className='itemDetailDetailTipoProducto'>{detalle}</p>
                        <h3 className='itemDetailDetailSubtitle'>Modo de Uso</h3>
                        <p className='itemDetailDetailTipoProducto'>{modoUso}</p>
                        <h3 className='itemDetailDetailSubtitle'>INCI</h3>
                        <p className='itemDetailDetailTipoProducto'>{inci}</p>
                    </div>
                </div>
          </article>
    );

};

/*const Item = ({nombre, imagen, precio}) => {
    return (
        <li className='itemCard'>
            <div className='itemCardPadding'>
                <picture><img className='itemImage' src={imagen} alt={nombre}></img></picture>
                <h3 className='itemCardName'>{nombre}</h3>
                <p className='itemPrice'>$ {precio}</p>
                <NavLink to='/detail' className='itemButton'>Ver Detalles</NavLink>
            </div> 
        </li>
    )
};*/

export default ItemDetail;

/*
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? 
                    <h1>Cargando...</h1> :
                product ? 
                    <ItemDetail  {...product} /> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer
© 2022 GitHub, Inc.
Terms
Privacy
Security

*/

/*

import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
            </footer>
        </article>
    )
}

export default ItemDetail
*/

/*
import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleAdd = (count) => {
        const productObj = {
            id, name,price, quantity: count
        }

        addItem(productObj)
        setNotification('success', `Se agregaron ${count} ${name} correctamente`)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                { 
                    false  
                        ? <Link to='/cart' className='Option'>Ir al carrito</Link> 
                        : <Counter onAdd={handleAdd} stock={stock} initial={getQuantityProd(id)}/> 
                } 
            </footer>
        </article>
    )
}

export default ItemDetail
*/

/*
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef)
            .then(response => {
                const product = { id: response.id, ...response.data()}
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    if(loading) {
        return(
            <h1>Cargando...</h1> 
        )
    }

    return (
        <div className="ItemDetailContainer" >
            { 
                product 
                    ? <ItemDetail  {...product} setCart={setCart} cart={cart}/> 
                    : <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer
*/