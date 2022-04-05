import './ItemListContainer.css';
import ProductCounter from '../ProductCounter/ProductCounter';
const addToCart = () => {
    console.log("Los productos seleccionados se agregaron a tu carrito")
}
const ItemListContainer = (properties) => {
    return (
        <div className='selectedItemsContainer'>
            <h2 className='itemListContainer'>{properties.message}</h2>
            <ProductCounter className='contador' stock={20}  />
            <button className='addToCartButton' onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
};

export default ItemListContainer;