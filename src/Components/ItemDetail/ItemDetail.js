import './ItemDetail.css'
import ProductCounter from '../ProductCounter/ProductCounter';

const addToCart = () => {
    console.log("Los productos seleccionados se agregaron a tu carrito")
}

const ItemDetail = ({productDetails}) => {

    return(
        <div class='itemDetailContainerShadow'>
                <div class='itemDetailImage'>
                    <img src={productDetails.imagenGrande} alt={productDetails.nombre}></img>
                    <ProductCounter stock={20} />
                    <button class='addToCartButton' onClick={addToCart}>Agregar al carrito</button>
                </div>
                <div class='itemDetailDetailContainer'>
                    <div class='itemDetailDetail'>
                        <h3 class='itemDetailDetailTitle'>{productDetails.nombre} {productDetails.presentacion} | ${productDetails.precio}</h3>
                        <div class='itemDetailDetailFilter'>
                            <p class='itemDetailDetailZeroWaste'>Zero Waste: {productDetails.zeroWaste}</p>
                            <p class='itemDetailDetailTipoCabello'>Tipo Cabello: {productDetails.tipoCabello}</p>
                            <p class='itemDetailDetailProductoUsos'>Tipo Producto: {productDetails.usos}</p>
                        </div>
                        <p class='itemDetailDetailTipoProducto'>{productDetails.detalle}</p>
                        <h3 class='itemDetailDetailSubtitle'>Modo de Uso</h3>
                        <p class='itemDetailDetailTipoProducto'>{productDetails.modoUso}</p>
                        <h3 class='itemDetailDetailSubtitle'>INCI</h3>
                        <p class='itemDetailDetailTipoProducto'>{productDetails.inci}</p>
                    </div>
                </div>
            </div>
    );

};

export default ItemDetail;

            