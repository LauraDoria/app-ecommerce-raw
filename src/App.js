import './App.css';
import './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import MercadoLibreItemListContainer from './Components/MercadoLibreItemListContainer/MercadoLibreItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { createContext } from 'react';

export const Context = createContext()

function App() {

  return (
    <div className="App">
      <Context.Provider value={123}>
        <header className="App-header">
          <BrowserRouter>
            <NavBar className='appNavBar' />
            <NavLink to='/list' className='appButton'>Ver Productos</NavLink>
            <div className='appButtonContainer'>
              <NavLink to='/list' className='appButton'>Ver Galería</NavLink>
            </div>
            <Routes>
              <Route path='/list' element={<ItemListContainer message='* Nuestros Productos *' />} />
              <Route path='/detail' element={<ItemDetailContainer />} />
            </Routes>
          </BrowserRouter>
          {/*<MercadoLibreItemListContainer title='Mercado Libre'/>*/}
          <img src='./Images/logo-icon.svg' className="App-logo" alt="logo" />
        </header>
      </Context.Provider>
    </div>
  );
}

export default App;
