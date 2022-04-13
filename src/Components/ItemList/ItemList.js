import './ItemList.css' //Importa archivo de estilos.
import Item from '../Item/Item'; //Importa componente (default).


const ItemList = ({products}) => { //Recibe propiedades desde componente contenedor.
    return (
        <ul className='itemList'>
            {products.map(product => <Item key={product.id} {...product}></Item>) /*Recibe las propiedades del componente padre y mapea cada elemento del array reibido, le asigna a cada Item las propiedades de un objeto/producto de la base de datos*/}
        </ul>   
    ) //Retorna lo que se va a mostrar en pantalla
};

export default ItemList;

        