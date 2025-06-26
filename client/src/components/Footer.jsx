import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Jace Farms & Consultancy</h3>
            <p className="text-gray-400">
              Transforming Agriculture Through Innovation with sustainable and profitable farming solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/jacefarms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/jacefarms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/jacefarms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/company/jacefarms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/clients" className="text-gray-400 hover:text-white">Our Clients</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/services#poultry" className="text-gray-400 hover:text-white">Poultry Farming</a></li>
              <li><a href="/services#crop" className="text-gray-400 hover:text-white">Crop Production</a></li>
              <li><a href="/services#consultancy" className="text-gray-400 hover:text-white">Agribusiness Consultancy</a></li>
              <li><a href="/services#training" className="text-gray-400 hover:text-white">Farmer Training</a></li>
              <li><a href="/services#supplies" className="text-gray-400 hover:text-white">Farm Inputs Supply</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="flex-shrink-0 h-5 w-5 text-green-400 mt-1" />
                <span className="ml-2 text-gray-400">P.O. Box 261 – 20115,<br />Egerton, Kenya</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="flex-shrink-0 h-5 w-5 text-green-400" />
                <a href="tel:+254743304659" className="ml-2 text-gray-400 hover:text-white">+254 743 304 659</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="flex-shrink-0 h-5 w-5 text-green-400" />
                <a href="mailto:jaceagribusiness@gmail.com" className="ml-2 text-gray-400 hover:text-white">jaceagribusiness@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Jace Farms & Consultancy Services Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Transforming Agriculture Through Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
