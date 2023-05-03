import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting= "Saludos" />
    </>
  );
}

export default App;
