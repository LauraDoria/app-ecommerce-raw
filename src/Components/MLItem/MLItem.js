import './MLItem.css'

const MLItem = ({nombre, imagen, precio}) => {
    return (
        <li className='mlItemCard'>
            <picture><img className='mlItemImage' src={imagen} alt={nombre}></img></picture>
            <h3 className='mlItemCardName'>{nombre}</h3>
            <p className='mlItemPrice'>$ {precio}</p>
        </li>
    )
}

export default MLItem;