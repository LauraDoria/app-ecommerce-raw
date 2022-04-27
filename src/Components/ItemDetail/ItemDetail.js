import './ItemDetail.css'
import ProductCounter from '../ProductCounter/ProductCounter';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContextProvider from '../CartContext/CartContext';



const ItemDetail = ({...productDetails}) => {

    /*const [quantity, setQuantity] = useState(0)
    const addToCart = (count) => {
        console.log("Los productos seleccionados se agregaron a tu carrito")
        setQuantity(count)
    }*/

    const { addToCart, isInCart } = useContext(CartContextProvider)

    return(
        <div className='itemDetailContainerShadow'>
                <div className='itemDetailImage'>
                    <img src={productDetails.imagenDetalle} alt={productDetails.nombre}></img>
                    <ProductCounter stock={20} />
                    {isInCart(productDetails.id) ? <Link to='/cart' className='addToCartButton'>Ir al carrito</Link> : <button className='addToCartButton' onClick={addToCart}>Agregar al carrito</button>}
                </div>
                <div className='itemDetailDetailContainer'>
                    <div className='itemDetailDetail'>
                        <h3 className='itemDetailDetailTitle'>{productDetails.nombre} {productDetails.presentacion} | ${productDetails.precio}</h3>
                        <div className='itemDetailDetailFilter'>
                            <p className='itemDetailDetailZeroWaste'>Zero Waste: {productDetails.zeroWaste}</p>
                            <p className='itemDetailDetailTipoCabello'>Tipo Cabello: {productDetails.tipoCabello}</p>
                            <p className='itemDetailDetailProductoUsos'>Tipo Producto: {productDetails.usos}</p>
                        </div>
                        <p className='itemDetailDetailTipoProducto'>{productDetails.detalle}</p>
                        <h3 className='itemDetailDetailSubtitle'>Modo de Uso</h3>
                        <p className='itemDetailDetailTipoProducto'>{productDetails.modoUso}</p>
                        <h3 className='itemDetailDetailSubtitle'>INCI</h3>
                        <p className='itemDetailDetailTipoProducto'>{productDetails.inci}</p>
                    </div>
                </div>
          </div>
    );

};

//

export default ItemDetail;