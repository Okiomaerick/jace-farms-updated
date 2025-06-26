import React from 'react';
import { Link } from 'react-router-dom';

const PoultryFarming = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-green-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Poultry Farming</span>
                    <span className="block text-green-200">Excellence in Poultry Production</span>
                  </h1>
                  <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    High-quality, healthy poultry for meat and egg production in Njoro, Nakuru County.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-green prose-lg text-gray-500">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Poultry Rearing
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our poultry rearing enterprise in Njoro, Nakuru County focuses on providing high-quality, healthy poultry for meat and egg production. We employ best practices in poultry management to ensure the highest standards of animal welfare and productivity.
                </p>
                
                <div className="mt-8 space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Broiler Production</h3>
                    <p className="mt-2 text-gray-600">
                      Rearing broilers for meat production with a focus on rapid growth and high feed conversion efficiency.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Layer Production</h3>
                    <p className="mt-2 text-gray-600">
                      Managing layers for optimal egg production using advanced housing and feeding systems.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Brooding Services</h3>
                    <p className="mt-2 text-gray-600">
                      Providing high-quality one-month-old chicks to farmers, ensuring a strong start for your poultry venture.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Technical Support</h3>
                    <p className="mt-2 text-gray-600">
                      Offering comprehensive technical assistance on poultry nutrition, health, and management practices.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800">Our Commitment</h3>
                  <p className="mt-2 text-green-700">
                    We are committed to sustainable poultry farming practices that ensure animal welfare, environmental responsibility, and maximum productivity for our clients.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Get Started with Poultry Farming
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Our Poultry Services Include</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Day-old chicks supply</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Quality poultry feeds</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Vaccination programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Housing and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Market linkages</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-500">Need assistance?</h4>
                  <div className="mt-2">
                    <Link to="/contact" className="text-base font-medium text-green-600 hover:text-green-500">
                      Contact our poultry experts<span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-green-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to start your poultry farming journey?</span>
            <span className="block text-green-600">Get in touch with our experts today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Request a Consultation
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoultryFarming;
