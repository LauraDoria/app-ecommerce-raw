import './ItemDetail.css'
import ProductCounter from '../ProductCounter/ProductCounter';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ItemDetail = ({productDetails}) => {

    const [quantity, setQuantity] = useState(0)
    const addToCart = (count) => {
        console.log("Los productos seleccionados se agregaron a tu carrito")
        setQuantity(count)
    }

    return(
        <div className='itemDetailContainerShadow'>
                <div className='itemDetailImage'>
                    <img src={productDetails.imagenDetalle} alt={productDetails.nombre}></img>
                    <ProductCounter stock={20} />
                    {quantity >= 0 ? <Link to='/cart' className='addToCartButton'>Agregar al carrito</Link> : <button className='addToCartButton' onClick={addToCart}>Agregar al carrito</button>}
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

//{id, nombre, tipoProducto, tipoPiel, tipoCabello, usos, zeroWaste, precio, presentacion, imagenDetalle, detalle, modoUso, inci}

export default ItemDetail;

            