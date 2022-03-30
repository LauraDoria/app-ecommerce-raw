import './ItemListContainer.css';

const ItemListContainer = (properties) => {
    return (
        <h2 className='itemListContainer'>{properties.message}</h2>
    )
};

export default ItemListContainer;