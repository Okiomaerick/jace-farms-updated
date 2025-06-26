import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const clientTypes = [
  { id: 'all', name: 'All Clients' },
  { id: 'commercial', name: 'Commercial Farms' },
  { id: 'smallholder', name: 'Smallholder Farmers' },
  { id: 'institutional', name: 'Institutions' },
  { id: 'retail', name: 'Retail Partners' }
];

const clients = [
  {
    id: 1,
    name: 'Green Valley Farms',
    type: 'commercial',
    logo: 'GV',
    testimonial: 'Jace Farms transformed our poultry production with their expert consultancy and quality inputs.',
    location: 'Nakuru, Kenya',
    since: 2018
  },
  {
    id: 2,
    name: 'Egerton University Farm',
    type: 'institutional',
    logo: 'EU',
    testimonial: 'Reliable partner for our agricultural research and student training programs.',
    location: 'Njoro, Kenya',
    since: 2019
  },
  {
    id: 3,
    name: 'Nakuru Farmers Co-op',
    type: 'smallholder',
    logo: 'NC',
    testimonial: 'Their training programs have helped our members increase yields by over 40%.',
    location: 'Nakuru, Kenya',
    since: 2020
  },
  {
    id: 4,
    name: 'AgroVet Solutions',
    type: 'retail',
    logo: 'AS',
    testimonial: 'Quality products and excellent technical support for our customers.',
    location: 'Naivasha, Kenya',
    since: 2017
  },
  {
    id: 5,
    name: 'Rift Valley Dairies',
    type: 'commercial',
    logo: 'RD',
    testimonial: 'Consistent supply of quality animal feeds has improved our milk production.',
    location: 'Eldoret, Kenya',
    since: 2019
  },
  {
    id: 6,
    name: 'Molo Farmers Association',
    type: 'smallholder',
    logo: 'MA',
    testimonial: 'Their agronomic advice has been invaluable to our members.',
    location: 'Molo, Kenya',
    since: 2021
  }
];

const Clients = () => {
  const [activeType, setActiveType] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredClients = activeType === 'all' 
    ? clients 
    : clients.filter(client => client.type === activeType);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredClients.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredClients.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/src/assets/images/clients-hero.jpg"
            alt="Our valued clients"
          />
          <div className="absolute inset-0 bg-green-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Valued Clients
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl">
            Building lasting relationships with farmers and agricultural businesses across Kenya.
          </p>
        </div>
      </div>

      {/* Client Type Tabs */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Client types">
              {clientTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setActiveType(type.id);
                    setCurrentSlide(0);
                  }}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeType === type.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div className="relative">
                {filteredClients.length > 0 ? (
                  <div className="text-center">
                    <div className="h-12 w-12 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                      <FaQuoteLeft className="h-6 w-6" />
                    </div>
                    <p className="text-xl text-gray-700 italic mb-8">
                      "{filteredClients[currentSlide].testimonial}"
                    </p>
                    <div className="mt-8">
                      <div className="h-16 w-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-700 mb-4">
                        {filteredClients[currentSlide].logo}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {filteredClients[currentSlide].name}
                      </h3>
                      <p className="text-gray-500">
                        {filteredClients[currentSlide].location} • Since {filteredClients[currentSlide].since}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No clients found in this category.</p>
                  </div>
                )}
              </div>

              {filteredClients.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 -ml-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-green-600 focus:outline-none"
                  >
                    <span className="sr-only">Previous</span>
                    <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 -mr-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-green-600 focus:outline-none"
                  >
                    <span className="sr-only">Next</span>
                    <FaChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {filteredClients.length > 1 && (
              <div className="mt-8 flex justify-center space-x-2">
                {filteredClients.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'w-6 bg-green-600' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">
            Trusted By Leading Agricultural Businesses
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: 'Egerton University', logo: 'EU' },
              { name: 'Nakuru County', logo: 'NC' },
              { name: 'Green Valley', logo: 'GV' },
              { name: 'AgroVet', logo: 'AV' },
              { name: 'Rift Valley Dairies', logo: 'RD' },
              { name: 'Molo Farmers', logo: 'MF' },
            ].map((client, index) => (
              <div
                key={index}
                className="col-span-1 flex justify-center py-8 px-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-full flex items-center justify-center text-2xl font-bold text-gray-700">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to grow your farm?</span>
            <span className="block text-green-200">Become our partner today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Get in Touch
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
