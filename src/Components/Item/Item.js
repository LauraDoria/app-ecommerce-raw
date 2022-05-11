import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, imagen, precio}) => {
    return (
        <li className='itemCard'>
            <div className='itemCardPadding'>
                <picture><img className='itemImage' src={imagen} alt={nombre}></img></picture>
                <h3 className='itemCardName'>{nombre}</h3>
                <p className='itemPrice'>$ {precio}</p>
                <Link to={`/detail/${id}`} className='itemButton'>Ver Detalles</Link>
            </div> 
        </li>
    )
};

export default Item; 