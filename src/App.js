import './App.css';
import './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import MercadoLibreItemListContainer from './Components/MercadoLibreItemListContainer/MercadoLibreItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/*<ItemListContainer message='Desafío Clase 4' />*/}
        <MercadoLibreItemListContainer title='Mercado Libre'/>
        <img src='./Images/logo-icon.svg' className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
