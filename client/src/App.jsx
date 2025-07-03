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

// Enhanced lazy loading with better error handling and retry logic
const retry = (fn, retriesLeft = 3, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        if (retriesLeft === 0) {
          console.error('Max retries reached, giving up:', error);
          reject(error);
          return;
        }
        
        console.warn(`Retry attempt ${4 - retriesLeft} for module`);
        
        // Wait for the interval before retrying
        setTimeout(() => {
          retry(fn, retriesLeft - 1, interval * 1.5)
            .then(resolve, reject);
        }, interval);
      });
  });
};

// Lazy load components with error boundaries and retry
const lazyWithRetry = (componentImport) => {
  return lazy(() => retry(componentImport));
};

// Lazy load routes with proper error boundaries using static imports
const lazyLoad = (importFn) => {
  return lazyWithRetry(() => importFn().catch(error => {
    console.error('Failed to load module:', error);
    throw error;
  }));
};

// Lazy load routes with static imports for better build-time analysis
const Home = lazyLoad(() => import('./pages/Home'));
const About = lazyLoad(() => import('./pages/About'));
const PastProjects = lazyLoad(() => import('./pages/PastProjects'));
const Services = lazyLoad(() => import('./pages/Services'));
const Products = lazyLoad(() => import('./pages/Products'));
const Clients = lazyLoad(() => import('./pages/Clients'));
const Contact = lazyLoad(() => import('./pages/Contact'));
const Checkout = lazyLoad(() => import('./pages/Checkout'));
const AgriConsultancy = lazyLoad(() => import('./pages/services/AgriConsultancy'));
const PoultryFarming = lazyLoad(() => import('./pages/services/PoultryFarming'));
const FeedProduction = lazyLoad(() => import('./pages/services/FeedProduction'));
const ProductDetail = lazyLoad(() => import('./pages/ProductDetail'));
const NotFound = lazyLoad(() => import('./pages/NotFound'));

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
  const [isLoading, setIsLoading] = useState(false);

  // Handle route changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <ErrorBoundary>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ScrollToTop>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={
                  <ErrorBoundary fallback="Error loading About page">
                    <Suspense fallback={<LoadingFallback />}>
                      <About />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/past-projects" element={
                  <ErrorBoundary fallback="Error loading Past Projects">
                    <Suspense fallback={<LoadingFallback />}>
                      <PastProjects />
                    </Suspense>
                  </ErrorBoundary>
                } />
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
            </Suspense>
          </ScrollToTop>
          <Footer />
          <WhatsAppButton />
          <Cart />
        </div>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
