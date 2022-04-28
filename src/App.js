import './App.css';
import './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import MercadoLibreItemListContainer from './Components/MercadoLibreItemListContainer/MercadoLibreItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { createContext } from 'react';
import CartContextProvider from './Components/CartContext/CartContext';
import Cart from './Components/Cart/Cart'
import NotificationProvider from './Components/Notification/Notification'

export const Context = createContext()

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <header className="App-header">
            <BrowserRouter>
              <NavBar className='appNavBar' />
              <div className='appButtonContainer'>
                <NavLink to='/list' className='appButton'>Ver Productos</NavLink>
              </div>
              <Routes>
                <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
                <Route path='/list' element={<ItemListContainer message='* Nuestros Productos *' />} />
                <Route path='/detail' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter>
            {/*<MercadoLibreItemListContainer title='Mercado Libre'/>*/}
            <img src='./Images/logo-icon.svg' className="App-logo" alt="logo" />
          </header>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;