import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
        saludo="Bienvenidos a Mis Productos Destacados" 
      />
      <Footer />
    </div>
  );
}

export default App;
