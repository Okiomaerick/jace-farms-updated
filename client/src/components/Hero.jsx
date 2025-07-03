import { Link } from 'react-router-dom';
import PictureWithFallback from './ui/PictureWithFallback';
import heroImage from '../assets/images/webp/hero.webp';

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-auto min-h-[80vh] w-full py-20 md:py-32">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-transparent mix-blend-multiply" aria-hidden="true"></div>
        <PictureWithFallback
          src={heroImage}
          alt="Jace Farms - Transforming Agriculture Through Innovation"
          className="w-full h-full absolute inset-0 object-cover"
          style={{
            objectPosition: 'center center',
            imageRendering: 'auto',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          loading="eager"
          fallbackType="webp"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between h-full py-12 lg:py-16">
            {/* Left Side - Jace Farms & Consultancy */}
            <div className="text-center lg:text-right mb-12 lg:mb-0 lg:pl-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-2">
                Jace Farms
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-green-200 font-medium">
                & Consultancy
              </p>
            </div>

            {/* Right Side - Main Content */}
            <div className="text-center lg:text-right max-w-2xl">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  <span className="block">Transforming Agriculture</span>
                  <span className="block text-green-300 mt-2">Through Innovation</span>
                </h1>
                <p className="text-lg text-gray-200 sm:text-xl leading-relaxed">
                  Empowering farmers with sustainable agricultural solutions and expert consultancy services to maximize productivity and profitability.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
                >
                  Our Services
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Contact Us
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
