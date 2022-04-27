import './Item.css'
import { NavLink } from 'react-router-dom';

const Item = ({nombre, imagen, precio}) => {
    return (
        <li className='itemCard'>
            <div className='itemCardPadding'>
                <picture><img className='itemImage' src={imagen} alt={nombre}></img></picture>
                <h3 className='itemCardName'>{nombre}</h3>
                <p className='itemPrice'>$ {precio}</p>
                <NavLink to='/detail' className='itemButton'>Ver Detalles</NavLink>
            </div> 
        </li>
    )
};

export default Item; 