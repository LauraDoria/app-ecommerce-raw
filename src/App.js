import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import MercadoLibreItemListContainer from './Components/MercadoLibreItemListContainer/MercadoLibreItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import { createContext } from 'react';
//import CartContextProvider from './Components/CartContext/CartContext';
//import Cart from './Components/Cart/Cart';
//import NotificationProvider from './Components/Notification/Notification';
//import { useState } from 'react';

//export const Context = createContext()

function App() {
  //Guardar componente LoadingSpinner en context para usarlo en toda la app.
  //Home como landing con su propio route, sin NavBar ni Footer.
  //Importar NavBar y Footer en ItemListContainer, ItemDetailContainer y en Cart en lugar de App
  //El logo en NavBar como link a /home
  //Cambiar <a> en Footer por NavLinks
  /*const [showButton, setShowButton] = useState('show')
  const [changeClassName, setChangeClassName] = useState('appButtonContainer')
  const [showGallery, setShowGallery] = useState('hide')
  const [showProductDetail, setShowProductDetail] = useState('hide')
  const [showHome, setShowHome] = useState('show')
  const [showNavBar, setShowNavBar] = useState('hide')
  const [showFooter, setShowFooter] = useState('hide')
  const [loading, setLoading] = useState('false')

  const galleryButtonHandle = () => {
    setShowButton('hide')
    setChangeClassName('appButtonContainerHide')
    setShowNavBar('show')
    setShowFooter('show')
    setLoading('true')
    setTimeout(() => {
      setShowGallery('show')
      //setShowHome('hide')
      //setShowProductDetail('hide')
      setLoading('false')
    }, 5000)
    
    /*setTimeout(() => {
      setShowFooter('show')
    }, 2000)
    
  }*/

  return (
    //Reemplazar los divs por html semántico.
    <div className="App">
      {/*<NotificationProvider>*/}
        {/*<CartContextProvider>*/}
          {/*<header className="App-header">*/}
            {/*Los componentes que se van a ver afectados por el routing van dentro de la etiqueta BrowserRouter. Sólo se admite un 
            BrowserRouter por aplicación.*/}
            <BrowserRouter>
              {/*{loading === 'true'? <LoadingSpinner /> : null}*/}
              {/*Componentes a mostrar condicionalmente según url, van dentro de la etiqueta Routes, cada uno seteado dentro de su 
              propia etiqueta Route. Para los links externos a la aplicación se puede trabajar simplemente con etiquetas "a". Route
              evalúa si se cumple la condición para el montado o no de cada componente, según la url donde nos encontramos.*/}
              <Routes>
                <Route path='*' element={<NotFound />}/>
                <Route path='/home' element={<Home />} />
                <Route path='/list' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/' element={<Navigate to='/home'/>} />
                {/*Probar copiar ItemListContainer, con un condicional que mapee productos si éstos
                coinciden con el filtro*/}
                {/* <Route path='/category/productoCapilar' />
                <Route path='/category/productoFacial' />
                <Route path='/category/productoCorporal' /> */}
                {/*<Route path='/cart' element={<Cart />} />*/}
              </Routes>
            </BrowserRouter>
            
            {/*<MercadoLibreItemListContainer title='Mercado Libre'/>*/}
            {/*<footer>
              <img src='./Images/logo-icon.svg' className="App-logo" alt="logo" />
            </footer>*/}
          {/*</div></header>*/}
        {/*</CartContextProvider>
          </NotificationProvider>*/}
    </div>
  );
}

export default App;