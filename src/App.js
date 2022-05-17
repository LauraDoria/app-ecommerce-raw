import './App.css';
import Home from './Components/Home/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext'

function App() {
  return (
    <div className="App">
        <CartContextProvider>
          <BrowserRouter>
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
    </div>
  );
}

export default App;