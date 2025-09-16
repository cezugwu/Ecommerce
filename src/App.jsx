// App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/product';
import Header from './components/Header';
import Hero from './components/Hero';
import Side from './components/Side';
import SideProvider from './context/SideContext';
import Body from './components/Body';
import Footer from './components/Footer';
import LinkBoard from './components/LinkBoard';

const App = () => {
  return (
    <div>
      <Router>
        <SideProvider>
          <Header />  
          <LinkBoard />
          <Side />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
          </Routes>
          <Footer />
        </SideProvider>
      </Router>
    </div>
  );
}

export default App;
