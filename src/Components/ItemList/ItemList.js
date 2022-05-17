import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => { 
    return (
        <ul className='itemList'>
            
            {products.map(product => <Item

                id={product.id} 
                
                nombre={product.nombre}

                imagen={product.imagen}

                precio={product.precio}>  
                                                                            
            </Item>)}

        </ul>   
    )
};

export default ItemList;
        