import './ItemList.css' //Importa archivo de estilos.
import Item from '../Item/Item'; //Importa componente (default).

/*Recibe propiedades desde componente contenedor (el estado guardado en el array "products").*/
const ItemList = ({products}) => { 

    

    return (
        <ul className='itemList'>
            {/*Recibe como argumento las propiedades del componente padre ItemListcontainer, del
            estado guardado en "products", que contiene el array de productos con sus datos.
            Con el método map() se crea un nuevo array, tomando cada elemento del array original
            y transformándolo en componentes hijos Item. A cada elemento del array
            reibido, convertido en Item, le asigna las propiedades de un objeto/producto de la
            base de datos. Nunca se usa el index del elemento dentro del array como key, ya que
            si el array se modifica, este valor va a cambiar. Se asigna "key" como otra propiedad
            del producto, un número de identificación único. "product" es el argumento del método 
            map, se puede usar para llamar a las propiedades de los objetos, usando el mismo 
            nombre con el que están guardadas en la base de datos.*/}
            {products.map(product => <Item

                id={product.id} 
                
                nombre={product.nombre}

                imagen={product.imagen}

                precio={product.precio}>  
                                                                            
            </Item>)}

        </ul>   
    ) //Retorna lo que se va a mostrar en pantalla
};

export default ItemList;
        