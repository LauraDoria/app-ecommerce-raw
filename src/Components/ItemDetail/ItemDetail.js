import './ItemDetail.css'
import ProductCounter from '../ProductCounter/ProductCounter';

const addToCart = () => {
    console.log("Los productos seleccionados se agregaron a tu carrito")
}

const ItemDetail = ({productDetails}) => {

    return(
        <div className='itemDetail'>
            <div className='itemDetailImage'>
                <img src={productDetails.imagen} alt={productDetails.nombre}></img>
            </div>
            <div className='itemDetailDetail'>
                <h3 className='itemDetailDetailTitle'>{productDetails.nombre}</h3>
                <p className='itemDetailDetailPrice'>{productDetails.precio}</p>
                <p className='itemDetailDetailPresentation'>{productDetails.presentacion}</p>
                <p className='itemDetailDetailZeroWaste'>{productDetails.zeroWaste}</p>
                <p className='itemDetailDetailTipoProducto'>{productDetails.zeroWaste}</p>
                <ProductCounter stock={20}/>
                <button className='addToCartButton' onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
    );

};

export default ItemDetail;