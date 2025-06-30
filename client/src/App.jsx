import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Cart from './components/Cart';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingFallback from './components/LoadingFallback';

// Lazy load components with error boundaries
const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error('Error loading component:', error);
      // Simple retry without p-retry to avoid adding a dependency
      try {
        return await componentImport();
      } catch (retryError) {
        console.error('Retry failed:', retryError);
        throw retryError;
      }
    }
  });

// Lazy load routes
const Home = lazyWithRetry(() => import('./pages/Home'));
const About = lazyWithRetry(() => import('./pages/About'));
const Services = lazyWithRetry(() => import('./pages/Services'));
const Products = lazyWithRetry(() => import('./pages/Products'));
const Clients = lazyWithRetry(() => import('./pages/Clients'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const Checkout = lazyWithRetry(() => import('./pages/Checkout'));
const AgriConsultancy = lazyWithRetry(() => import('./pages/services/AgriConsultancy'));
const PoultryFarming = lazyWithRetry(() => import('./pages/services/PoultryFarming'));
const FeedProduction = lazyWithRetry(() => import('./pages/services/FeedProduction'));
const ProductDetail = lazyWithRetry(() => import('./pages/ProductDetail'));
const NotFound = lazyWithRetry(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    // This is a fallback in case the ScrollToTop component doesn't catch it
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Track if the app is loading
  const [isLoading, setIsLoading] = useState(true);

  // Handle route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
      // Small delay to allow Suspense to catch the loading state
      const timer = setTimeout(() => setIsLoading(false), 100);
      return () => clearTimeout(timer);
    };

    handleRouteChange();
    return () => {};
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <CartProvider>
        <div className="app-container flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="main-content flex-grow w-full overflow-x-hidden">
            <ScrollToTop>
              <Suspense fallback={<LoadingFallback />}>
                <div className={`content-wrapper w-full transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
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
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </Suspense>
            </ScrollToTop>
            <WhatsAppButton />
            <Cart />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
