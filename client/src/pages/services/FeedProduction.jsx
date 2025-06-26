import React from 'react';
import { Link } from 'react-router-dom';

const FeedProduction = () => {
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
                    <span className="block">Feed Production</span>
                    <span className="block text-green-200">Quality Nutrition for Your Livestock</span>
                  </h1>
                  <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    High-quality, nutritionally balanced animal feed for optimal livestock health and productivity.
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
                  Our Feed Production Facility
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  We operate a modern feed production unit in Maili Nne, Nyandarua County that produces high-quality, nutritionally balanced feed for poultry, livestock, and other farm animals. Our feed is formulated based on scientific research and tailored to meet the specific needs of different animal categories.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900">Product Range</h3>
                  
                  <div className="mt-6 space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium text-green-600">Poultry Feed</h4>
                      <p className="mt-2 text-gray-600">
                        We produce a complete range of poultry feeds including:
                      </p>
                      <ul className="mt-2 ml-5 list-disc text-gray-600">
                        <li>Broiler Starter</li>
                        <li>Chickmash</li>
                        <li>Growers Mash</li>
                        <li>Kienyeji Mash</li>
                        <li>Layer Feeds</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium text-green-600">Livestock Feed</h4>
                      <p className="mt-2 text-gray-600">
                        Our livestock feed range includes:
                      </p>
                      <ul className="mt-2 ml-5 list-disc text-gray-600">
                        <li>Dairy Meal</li>
                        <li>Pig Feeds</li>
                        <li>Dog Feeds</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium text-green-600">Custom Feed Formulations</h4>
                      <p className="mt-2 text-gray-600">
                        We offer tailored feed formulations based on your specific requirements and animal needs. Our team of nutritionists can develop custom feed solutions to optimize your livestock's performance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800">Quality Assurance</h3>
                  <p className="mt-2 text-green-700">
                    All our feeds are manufactured under strict quality control measures to ensure consistency, safety, and nutritional value. We source only the finest ingredients and maintain rigorous testing protocols.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Why Choose Our Feeds?</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Scientifically formulated for optimal nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">High-quality ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Consistent quality control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Custom formulations available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-600">Competitive pricing</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-500">Bulk Orders Available</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Special pricing available for bulk orders. Contact us for wholesale inquiries.
                  </p>
                  <div className="mt-4">
                    <Link to="/contact" className="text-base font-medium text-green-600 hover:text-green-500">
                      Contact our sales team <span aria-hidden="true">→</span>
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
            <span className="block">Ready to improve your livestock's nutrition?</span>
            <span className="block text-green-600">Order our high-quality feeds today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Get a Quote
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

export default FeedProduction;
