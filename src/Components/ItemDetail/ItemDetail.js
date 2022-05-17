import './ItemDetail.css'
import ProductCounter from '../ProductCounter/ProductCounter'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'

const ItemDetail = ({ id, nombre, imagenDetalle, precio, tipoPiel, tipoCabello, usos, zeroWaste, presentacion, detalle, modoUso, inci, stock }) => {
    
    const { addProductToCart, isInCart, removeItemFromCart } = useContext(CartContext)

    const [productMessageToSend, setProductMessageToSend] = useState('noMessage')

    const addToCart = (productCount) => {
        const productDetail = {

            id: id,

            nombre: nombre,

            presentacion: presentacion,

            precio: precio,

            cantidad: productCount,

            subtotal: productCount * precio

        }
        
        if(productCount !== 0) {
             addProductToCart(productDetail)
             if(productCount === 1) {
                setProductMessageToSend(`Agregaste ${productDetail.cantidad} unidad de ${nombre} por $${productDetail.subtotal} a tu Carrito!`)
             } else {
                setProductMessageToSend(`Agregaste ${productDetail.cantidad} unidades de ${nombre} por $${productDetail.subtotal} a tu Carrito!`)
             }
        } else {
            setProductMessageToSend('No agregaste ningún producto!')
        }
    }

    const dismiss = () => {
        setProductMessageToSend('noMessage')
    }

    return(
        <article className='itemDetailOuterContainer'>
            {productMessageToSend !== 'noMessage'? <div className='productNotificationContainer'>
                <h5 className='productNotificationMessage'>{productMessageToSend}</h5>
                <input type="button" value="X" className="productNotificationDismissButton" onClick={dismiss} />
            </div> :
            null}
            <div className='itemDetailContainerShadow'>
                <div className='itemDetailImage'>
                    <img src={imagenDetalle} alt={nombre}></img>
                    {isInCart(id) === false?
                        <div className='itemDetailCounterContainer'>
                            <ProductCounter stock={stock} addToCart={addToCart} />
                        </div> :
                        <div className='inCartButtons'>
                            <button className='addToCartProductDetailButton' onClick={() => {
                                removeItemFromCart(id)
                                setProductMessageToSend(`Eliminaste ${nombre} de tu Carrito!`)
                            }}>Eliminar del Carrito</button>
                            <Link to='/cart' className='addToCartProductDetailButton'>Ir al carrito</Link>
                        </div>
                    }
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
            </div>
        </article>
    );
};

export default ItemDetail;