import React from 'react';
import { Link } from 'react-router-dom';

const AgriConsultancy = () => {
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
                    <span className="block">Agri-Consultancy</span>
                    <span className="block text-green-200">Expert Advisory Services</span>
                  </h1>
                  <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Professional advisory services to optimize your farming operations and increase yields.
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
                  Agronomic Support and Consultancy
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our team of experienced agronomists works closely with clients to develop tailored strategies needed to optimize crop production.
                </p>
                
                <div className="mt-8 space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Soil Testing and Analysis</h3>
                    <p className="mt-2 text-gray-600">
                      Comprehensive soil analysis to determine nutrient levels and soil health, providing you with actionable insights for better crop management.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Crop Planning and Management</h3>
                    <p className="mt-2 text-gray-600">
                      Expert advice on crop selection, planting schedules, and management practices to maximize your farm's productivity.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Integrated Pest and Disease Management (IPM)</h3>
                    <p className="mt-2 text-gray-600">
                      Customized plans to protect your crops using environmentally friendly methods while minimizing chemical use.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Irrigation and Water Management</h3>
                    <p className="mt-2 text-gray-600">
                      Designing efficient irrigation systems to conserve water and improve crop yields through optimal water usage.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-600">Nutrient Management</h3>
                    <p className="mt-2 text-gray-600">
                      Developing comprehensive nutrient plans to optimize fertilizer use, reduce costs, and promote sustainable farming practices.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800">Our Approach</h3>
                  <p className="mt-2 text-green-700">
                    We combine traditional farming wisdom with modern scientific approaches to provide practical, sustainable solutions tailored to your specific needs.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Get a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Our Services Include</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Farm planning & design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Financial planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Record keeping</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Market analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Training & workshops</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-500">Have questions?</h4>
                  <div className="mt-2">
                    <Link to="/contact" className="text-base font-medium text-green-600 hover:text-green-500">
                      Contact our consultants<span aria-hidden="true"> &rarr;</span>
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
            <span className="block">Ready to optimize your farm?</span>
            <span className="block text-green-600">Get expert consultation today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Request a Call Back
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

export default AgriConsultancy;
