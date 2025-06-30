import { Link } from 'react-router-dom';
import heroImage from '../assets/images/webp/hero.webp'; // Temporarily using JPG only

const Hero = () => {
  return (
    <div className="relative bg-green-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-green-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Transforming Agriculture</span>
                <span className="block text-green-200">Through Innovation</span>
              </h1>
              <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empowering farmers with sustainable agricultural solutions and expert consultancy services to maximize productivity and profitability.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4 flex-wrap">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-extrabold text-green-900 bg-yellow-400 hover:bg-yellow-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                >
                  Our Services
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="mt-4 sm:mt-0 inline-flex items-center justify-center px-10 py-5 text-lg font-extrabold text-white bg-green-700 hover:bg-green-800 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-white border-opacity-30 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Contact Us
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Background image on the right side with overlay */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative" style={{ minHeight: '32rem' }}>
        <div 
          className="w-full h-full absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div 
            className="absolute inset-0 bg-black bg-opacity-30"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-2">
              Jace Farms
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-green-200 font-medium">
              & Consultancy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
