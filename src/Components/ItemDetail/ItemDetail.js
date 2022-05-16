import './ItemDetail.css'
import ProductCounter from '../ProductCounter/ProductCounter';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';



const ItemDetail = ({ id, nombre, imagenDetalle, precio, tipoPiel, tipoCabello, usos, zeroWaste, presentacion, detalle, modoUso, inci, stock }) => {

    //Traer cantidad ya agregada del mismo producto, pasarla por props al contador para que en caso de querer agregar mas unidades del producto, el contador inicialice con la cantidad ya en carrito.
    
    const { addProductToCart, isInCart, cart, removeItemFromCart } = useContext(CartContext)

    const addToCart = (productCount) => {

        const productDetail = {id: id, nombre: nombre, presentacion: presentacion, precio: precio, cantidad: productCount, subtotal: productCount * precio}
        
        if(productCount !== 0) {
            addProductToCart(productDetail)
            console.log(`Se agregaron ${productDetail.cantidad} unidades de ${productDetail.nombre} por un total de $${productDetail.subtotal}.`)
        } else {
            alert('No agregaste ningún producto!')
            console.log('No se agregaron productos.')
        }

        console.log(cart)

    }

    return(
        <article className='itemDetailContainerShadow'>
                <div className='itemDetailImage'>
                    <img src={imagenDetalle} alt={nombre}></img>
                    {isInCart(id) === false?
                        <div className='itemDetailCounterContainer'>
                            <ProductCounter stock={stock} addToCart={addToCart} nombre={nombre} precio={precio} />
                        </div> :
                        <div className='inCartButtons'>
                            <button className='addToCartButton' onClick={() => removeItemFromCart(id)}>Eliminar del Carrito</button>
                            <Link to='/cart' className='addToCartButton'>Ir al carrito</Link>
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
          </article>
    );

};

export default ItemDetail;