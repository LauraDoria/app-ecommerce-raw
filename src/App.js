import './App.css';
import Home from './Components/Home/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext'
import { NotificationProvider } from './Components/Notification/Notification'

function App() {
    
    /*setTimeout(() => {
      setShowFooter('show')
    }, 2000)
    
  }*/

  /*Para todos los event listeners agregados manualmente, escribir la función dentro de un useEffect, agregar dentro del
  return una función para remover el event listener cuando el componente es desmontado
  ver Cart, CartContext, ItemDetail, MercadoLibreItemListContainer, ProductCounter.

  const eventHandleFunction = () => {}
  
  useEffect(() => {
    elementoDelDom.addEventListener('evento', eventHandleFunction)

    return(
      elementoDelDom.removeEventListener('evento', eventHandleFunction)
    )
  }, [])*/

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          {/*Los componentes que se van a ver afectados por el routing van dentro de la etiqueta BrowserRouter. Sólo se admite un 
          BrowserRouter por aplicación.*/}
          <BrowserRouter>
            {/*Componentes a mostrar condicionalmente según url, van dentro de la etiqueta Routes, cada uno seteado dentro de su 
            propia etiqueta Route. Para los links externos a la aplicación se puede trabajar simplemente con etiquetas "a". Route
            evalúa si se cumple la condición para el montado o no de cada componente, según la url donde nos encontramos.*/}
            <Routes>
              <Route path='*' element={<NotFound />}/>
              <Route path='/home' element={<Home />} />
              <Route path='/list' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/' element={<Navigate to='/home'/>} />
            </Routes>
          </BrowserRouter>    
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;