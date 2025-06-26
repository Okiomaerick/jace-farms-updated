import { useState } from 'react';

// Import testimonial images (will be undefined if files don't exist)
const luciaImg = () => {
  try {
    return require('../assets/images/testimonials/lucia.jpg');
  } catch (e) {
    return null;
  }
};

const muremiImg = () => {
  try {
    return require('../assets/images/testimonials/muremi.jpg');
  } catch (e) {
    return null;
  }
};

const hesbonImg = () => {
  try {
    return require('../assets/images/testimonials/hesbon.jpg');
  } catch (e) {
    return null;
  }
};

const testimonials = [
  {
    id: 1,
    name: 'Lucia Jaber',
    role: 'Mixed Farmer, Kericho',
    content: 'Jace Farms helped me balance my crop and poultry farming. Their feed and agronomy advice are on point.',
    image: luciaImg(),
    initials: 'LJ'
  },
  {
    id: 2,
    name: 'Muremi Nene',
    role: 'Poultry Farmer, Nyeri',
    content: 'I doubled my egg output thanks to their feed plan and disease control tips. Very reliable team.',
    image: muremiImg(),
    initials: 'MN'
  },
  {
    id: 3,
    name: 'Hesbon Mogaka',
    role: 'Agribusiness Consultant, Kisii',
    content: 'Working with Jace Farms made my advisory work easier. Their tech solutions and consulting are solid.',
    image: hesbonImg(),
    initials: 'HM'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Hear from farmers who have transformed their agricultural practices with our help.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-8 py-10">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {testimonials[currentIndex].image ? (
                      <img
                        className="h-16 w-16 rounded-full object-cover border-2 border-green-100"
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-xl ${testimonials[currentIndex].image ? 'hidden' : 'flex'}`}>
                      {testimonials[currentIndex].initials}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-green-600">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
                <blockquote className="mt-6">
                  <p className="text-base text-gray-700">"{testimonials[currentIndex].content}"</p>
                </blockquote>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md text-green-600 hover:bg-green-50 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 w-3 rounded-full ${
                      index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md text-green-600 hover:bg-green-50 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
