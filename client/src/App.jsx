import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Cart from './components/Cart';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import AgriConsultancy from './pages/services/AgriConsultancy';
import PoultryFarming from './pages/services/PoultryFarming';
import FeedProduction from './pages/services/FeedProduction';
import ProductDetail from './pages/ProductDetail';

function App() {
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    // This is a fallback in case the ScrollToTop component doesn't catch it
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <CartProvider>
      <div className="app-container flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="main-content flex-grow w-full overflow-x-hidden">
          <ScrollToTop>
            <div className="content-wrapper w-full">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/services/agri-consultancy" element={<AgriConsultancy />} />
                <Route path="/services/poultry-farming" element={<PoultryFarming />} />
                <Route path="/services/feed-production" element={<FeedProduction />} />
                <Route path="/products/:id" element={<ProductDetail />} />
              </Routes>
            </div>
          </ScrollToTop>
        </main>
        <Footer />
        <WhatsAppButton />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
