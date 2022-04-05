import './App.css';
import './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer message='Desafío Clase 4' />
        <img src='./Images/logo-icon.svg' className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
