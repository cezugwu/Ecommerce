// App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/product';
import Header from './components/Header';
import Side from './components/Side';
import SideProvider from './context/SideContext';
import Footer from './components/Footer';
import LinkBoard from './components/LinkBoard';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <div>
      <Router>
        <SideProvider>
          <Header />  
          <Side />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </SideProvider>
      </Router>
    </div>
  );
}

export default App;
