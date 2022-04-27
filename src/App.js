import './App.css';
import './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import MercadoLibreItemListContainer from './Components/MercadoLibreItemListContainer/MercadoLibreItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { createContext } from 'react';
import CartContextProvider from './Components/CartContext/CartContext';

export const Context = createContext()

function App() {

  return (
    <div className="App">
      <CartContextProvider value={123}>
        <header className="App-header">
          <BrowserRouter>
            <NavBar className='appNavBar' />
            <div className='appButtonContainer'>
              <NavLink to='/list' className='appButton'>Ver Galería</NavLink>
            </div>
            <Routes>
              <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
              <Route path='/list' element={<ItemListContainer message='* Nuestros Productos *' />} />
              <Route path='/detail' element={<ItemDetailContainer />} />
            </Routes>
          </BrowserRouter>
          {/*<MercadoLibreItemListContainer title='Mercado Libre'/>*/}
          <img src='./Images/logo-icon.svg' className="App-logo" alt="logo" />
        </header>
      </CartContextProvider>
    </div>
  );
}

export default App;