import {useState} from "react";
import './MercadoLibreItemListContainer.css';
import MLItem from "../MLItem/MLItem";

const MercadoLibreItemListContainer = (properties) => {

    const [mlproducts, setProducts] = useState([])
    const [mlinput, setMlinput] = useState('')

    //Después del primer renderizado
    //useEffect (() => {
        /*Método fetch(), promesa de obtener los resultados de la búsqueda por palabra clave de la API
        de Mercado Libre. Método then() para atrapar la respuesta a la promesa, se retorna esa respuesta
        convertida a objeto de javascript a través del método json().*/
        //fetch(searchQuery).then(response => {
            //return response.json()
        /*El método json() funciona como otra promesa, usamos nuevamente el método then() para  capturar
        el resultado de esa promesa, la propiedad .results (arrays de datos sobre cada resultado de la
        búsqueda de productos por palabra clave) se guarda en un estado*/
        //}).then(response => {
            //setProducts(response.results);
        /*Método catch() para capturar la respuesta a la promesa en caso de que ésta sea fallida.*/
        //}).catch(error => {
            //console.log(error)
        //})
    //}, []);

    const handleSearch = () => {
        /*Método fetch(), promesa de obtener los resultados de la búsqueda por palabra clave de la API
        de Mercado Libre. Método then() para atrapar la respuesta a la promesa, se retorna esa respuesta
        convertida a objeto de javascript a través del método json().*/
        /*La palabra clave del query se obtiene del input*/
        fetch('https://api.mercadolibre.com/sites/MLA/search?q='+ mlinput).then(response => {
            return response.json()
        /*El método json() funciona como otra promesa, usamos nuevamente el método then() para  capturar
        el resultado de esa promesa, la propiedad .results (arrays de datos sobre cada resultado de la
        búsqueda de productos por palabra clave) se guarda en un estado*/
        }).then(response => {
            setProducts(response.results);
        })
    }

    console.log(mlproducts)

    return (
        <div className='mercadoLibreItemListContainer'>
            <h2 className='mercadoLibreItemListContainerTitulo'>{properties.title}</h2>
            <input type='text' onChange={(e) => setMlinput(e.target.value)}></input>
            <button onClick={handleSearch}>Buscar</button>
            <ul className='mercadoLibreItemList'>
                {mlproducts.map(product => <MLItem

                    key={product.id} 
                        
                    nombre={product.title}
        
                    imagen={product.thumbnail}
        
                    precio={product.price}>  
                                                                                    
                </MLItem>)}
            </ul>
        </div>
    );
};

export default MercadoLibreItemListContainer;