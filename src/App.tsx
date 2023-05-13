import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/CartContext';

function App() {

  return (
    <ShoppingCartProvider>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      
    </ShoppingCartProvider>
  )
}

export default App
