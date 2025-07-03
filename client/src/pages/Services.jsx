import { Link } from 'react-router-dom';
import PictureWithFallback from '../components/ui/PictureWithFallback';
import heroImage from '../assets/images/heroes/services-hero.webp';

const services = [
  {
    id: 1,
    name: 'Poultry Farming',
    description: 'Comprehensive poultry farming solutions including day-old chicks, feeds, and technical support.',
    icon: '🐔',
    features: [
      'Day-old chicks supply',
      'Quality poultry feeds',
      'Vaccination programs',
      'Housing and equipment',
      'Market linkages'
    ]
  },
  {
    id: 2,
    name: 'Crop Production',
    description: 'Expert guidance on crop selection, soil management, and sustainable farming practices.',
    icon: '🌱',
    features: [
      'Soil testing & analysis',
      'Seed selection & supply',
      'Irrigation solutions',
      'Pest & disease control',
      'Post-harvest handling'
    ]
  },
  {
    id: 3,
    name: 'Agri-Consultancy',
    description: 'Professional advisory services to optimize your farming operations and increase yields.',
    icon: '📊',
    features: [
      'Farm planning & design',
      'Financial planning',
      'Record keeping',
      'Market analysis',
      'Training & workshops'
    ]
  },
  {
    id: 4,
    name: 'Feed Production',
    description: 'High-quality animal feed formulation and production for optimal livestock nutrition.',
    icon: '🥗',
    features: [
      'Poultry feed',
      'Dairy meal',
      'Pig feed',
      'Custom formulations',
      'Nutritional analysis'
    ]
  },
  {
    id: 5,
    name: 'Agri-Training',
    description: 'Hands-on training programs for farmers at all levels of experience.',
    icon: '🎓',
    features: [
      'Modern farming techniques',
      'Value addition',
      'Organic farming',
      'Farm management',
      'Record keeping'
    ]
  },
  {
    id: 6,
    name: 'Farm Mechanization',
    description: 'Access to modern farming equipment and machinery for increased efficiency.',
    icon: '🚜',
    features: [
      'Equipment hire',
      'Maintenance services',
      'Operator training',
      'Custom hiring services',
      'New & used equipment sales'
    ]
  }
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="relative h-auto min-h-[60vh] w-full py-20 md:py-32">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <PictureWithFallback
            src={heroImage}
            alt="Jace Farms Services"
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
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="max-w-4xl space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Our Services
                </h1>
                <h2 className="text-2xl font-semibold text-green-300 sm:text-3xl lg:text-4xl">
                  Comprehensive Agricultural Solutions
                </h2>
                <p className="text-lg text-gray-200 sm:text-xl max-w-3xl mx-auto leading-relaxed">
                  Expert services designed to meet all your agricultural needs, from farm to market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">What We Offer</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Agricultural Services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide end-to-end solutions to help you succeed in your farming venture.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {services.map((service) => (
                <div key={service.id} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white text-2xl">
                    {service.icon}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{service.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {(service.id === 1 || service.id === 3 || service.id === 4) && (
                      <div className="mt-4">
                        <Link
                          to={
                            service.id === 1 ? "/services/poultry-farming" :
                            service.id === 3 ? "/services/agri-consultancy" :
                            "/services/feed-production"
                          }
                          className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500"
                        >
                          Read more <span className="ml-1">→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Work
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our proven process ensures you get the best agricultural solutions.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-green-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="relative space-y-10 md:space-y-20">
                {[
                  {
                    step: '01',
                    title: 'Consultation',
                    description: 'We begin by understanding your specific needs, challenges, and goals through a detailed consultation process.',
                    icon: '💬'
                  },
                  {
                    step: '02',
                    title: 'Assessment',
                    description: 'Our experts conduct a thorough assessment of your farm, soil, and current practices to identify opportunities for improvement.',
                    icon: '🔍',
                    direction: 'right'
                  },
                  {
                    step: '03',
                    title: 'Solution Design',
                    description: 'We develop a customized plan tailored to your specific requirements and objectives.',
                    icon: '📝'
                  },
                  {
                    step: '04',
                    title: 'Implementation',
                    description: 'Our team works closely with you to implement the recommended solutions with precision and care.',
                    icon: '🚀',
                    direction: 'right'
                  },
                  {
                    step: '05',
                    title: 'Support & Monitoring',
                    description: 'We provide ongoing support and monitoring to ensure the success of your agricultural venture.',
                    icon: '🤝'
                  }
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className={`md:flex items-center ${item.direction ? 'md:flex-row-reverse' : ''}`}>
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-2xl font-bold mx-auto md:mx-0">
                        {item.step}
                      </div>
                      <div className={`mt-4 md:mt-0 md:${item.direction ? 'mr-12' : 'ml-12'} md:w-1/2`}>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{item.icon}</span>
                            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                          </div>
                          <p className="mt-2 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your farm?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-200">
            Contact us today to learn more about how we can help you achieve your agricultural goals.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 bg-opacity-60 hover:bg-opacity-70"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
