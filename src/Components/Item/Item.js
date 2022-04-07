import './Item.css'

const Item = (nombre, imagen, precio) => {
    return (
        <div className='itemCard'>
            <picture><img className='itemImage' src={imagen} alt={nombre}></img></picture>
            <h3 className='itemCardName'>{nombre}</h3>
            <p className='itemPrice'>{precio}</p>
            <button className='itemButton'>Ver más</button>
        </div>
    )
};

export default Item;