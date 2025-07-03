import { useState, useEffect, Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import CartIcon from './CartIcon';
// Using relative path from src/assets/images/webp
import logoWebP from '../assets/images/webp/logo.webp';
// Fallback to png if webp is not supported
const logoPng = logoWebP.replace(/\.webp$/, '.png');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Past Projects / Impact Stories', path: '/past-projects' }
      ]
    },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const navigate = useNavigate();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <picture>
                <source srcSet={logoWebP} type="image/webp" />
                <source srcSet={logoPng} type="image/png" />
                <img 
                  src={logoPng} 
                  alt="Jace Farms Logo" 
                  className="h-20 w-auto" 
                  style={{ maxHeight: '80px' }}
                  loading="lazy"
                />
              </picture>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <Menu as="div" className="relative">
                      <Menu.Button 
                        className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 flex items-center ${
                          location.pathname.startsWith(link.path) && !location.pathname.includes('past-projects')
                            ? 'bg-green-700 text-white shadow-md hover:bg-green-800'
                            : 'text-gray-800 hover:bg-green-50 hover:text-green-700'
                        }`}
                      >
                        {link.name}
                        <ChevronDownIcon 
                          className="ml-1 -mr-1 h-5 w-5 text-current" 
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {link.dropdown.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.path}
                                    className={`block px-4 py-2 text-sm ${
                                      location.pathname === item.path
                                        ? 'bg-green-50 text-green-700 font-medium'
                                        : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                                    }`}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'bg-green-700 text-white shadow-md hover:bg-green-800'
                          : 'text-gray-800 hover:bg-green-50 hover:text-green-700'
                      }`}
                    >
                      <span className="relative">
                        {link.name}
                        {location.pathname === link.path && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"></span>
                        )}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <CartIcon />
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="md:hidden">
            <CartIcon />
          </div>
        </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
