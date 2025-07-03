import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaLeaf, FaSeedling, FaTractor, FaVial } from 'react-icons/fa';
import { createImageWithFallback, PictureWithFallback } from '../utils/imageUtils';

// Function to get image URL from public directory
const getImageUrl = (path) => {
  // Remove leading slash if exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return new URL(`/public/${cleanPath}`, import.meta.url).href;
};

// Preload images
const preloadImages = async () => {
  const images = [
    createImageWithFallback('/images/products/poultry-feed'),
    'images/heroes/default-hero.jpg'
  ];

  const imagePromises = images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `/${src}`;
      img.onload = () => resolve(img);
      img.onerror = (err) => {
        console.error(`Failed to load image: ${src}`, err);
        resolve(null);
      };
    });
  });

  return Promise.all(imagePromises);
};

const products = [
  {
    id: 1,
    name: 'One-Month Old Chicks',
    category: 'Poultry',
    price: 'KSh 280',
    unit: 'per chick',
    description: 'High-quality, vaccinated one-month old chicks for your poultry farming needs.',
    features: [
      'Disease-resistant breeds',
      'Fully vaccinated',
      'Fast-growing',
      'High survival rate'
    ],
    image: createImageWithFallback('/images/products/one-month-old-chicks1'),
    icon: <FaSeedling className="h-8 w-8 text-green-600" />,
    featured: true
  },
  {
    id: 2,
    name: 'Poultry Feed',
    category: 'Animal Feed',
    price: 'KSh 3,200',
    unit: 'per 50kg bag',
    description: 'Nutritionally balanced feed for all stages of poultry growth.',
    features: [
      'Complete nutrition',
      'Various formulations',
      'Promotes healthy growth',
      'High-quality ingredients'
    ],
    image: createImageWithFallback('/images/products/poultry-feed1'),
    icon: <FaLeaf className="h-8 w-8 text-green-600" />
  },
  {
    id: 3,
    name: 'Farming Equipment',
    category: 'Machinery',
    price: 'Varies',
    unit: 'per item',
    description: 'Quality tools and equipment for efficient farming operations.',
    features: [
      'Durable construction',
      'Ergonomic design',
      'Various sizes',
      'Maintenance services'
    ],
    image: createImageWithFallback('/images/products/farming-equipment'),
    icon: <FaTractor className="h-8 w-8 text-green-600" />
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProduct = products.find(product => product.featured);

  const [heroImageWebP, setHeroImageWebP] = useState('');
  const [heroImageJpg, setHeroImageJpg] = useState('');
  const [defaultImageWebP, setDefaultImageWebP] = useState('');
  const [defaultImageJpg, setDefaultImageJpg] = useState('');

  useEffect(() => {
    // Set image URLs
    setHeroImageWebP('/src/assets/images/heroes/products-hero.webp');
    // Since we only have WebP versions, we'll use the same for both
    setHeroImageJpg('/src/assets/images/heroes/products-hero.webp');
    setDefaultImageWebP('/src/assets/images/heroes/default-hero.webp');
    setDefaultImageJpg('/src/assets/images/heroes/default-hero.webp');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <picture>
              <source srcSet={heroImageWebP || defaultImageWebP} type="image/webp" />
              <source srcSet={heroImageJpg || defaultImageJpg} type="image/jpeg" />
              <img
                src={heroImageJpg || defaultImageJpg}
                alt="Poultry and farm products"
                className="w-full h-full object-cover object-center"
                style={{
                  minHeight: '24rem',
                  maxHeight: '32rem',
                  objectPosition: 'center 30%',
                  imageRendering: 'auto',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform'
                }}
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40">
          <div className="text-center px-4 sm:px-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-xl leading-tight">
              Quality Farm Products
            </h1>
            <p className="mt-8 text-2xl font-medium text-white max-w-4xl mx-auto sm:text-3xl">
              Premium agricultural products for farmers and agribusinesses
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-xl font-medium text-gray-100 drop-shadow-lg sm:text-2xl">
              Quality Products for Your Poultry and Agribusiness Needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured Product */}
          {featuredProduct && selectedCategory === 'All' && searchTerm === '' && (
            <div className="mb-12 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 md:p-8 shadow-sm">
              <div className="md:flex items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8 flex justify-center">
                  <div className="h-48 w-48 rounded-full bg-white p-4 shadow-md flex items-center justify-center">
                    {featuredProduct.icon}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-3">
                    <svg className="-ml-1 mr-1.5 h-2 w-2 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                    Featured Product
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{featuredProduct.name}</h2>
                  <p className="text-lg text-gray-700 mb-4">{featuredProduct.description}</p>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-green-600">{featuredProduct.price}</span>
                    {featuredProduct.unit && (
                      <span className="ml-2 text-gray-500">/ {featuredProduct.unit}</span>
                    )}
                    <Link
                      to={`/products/${featuredProduct.id}`}
                      className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Page Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
            {searchTerm && ` matching "${searchTerm}"`}
          </h2>
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="w-full md:w-1/2">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 py-3 border-gray-300 rounded-md"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <select
                  className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-center h-48 w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
                      {product.image ? (
                        <div className="w-full h-full">
                          <PictureWithFallback
                            basePath={product.image.webp.replace(/\.webp$/, '')}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-t-lg"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-48 flex items-center justify-center bg-gray-200">
                          <span className="text-gray-400">No image available</span>
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-green-600">{product.price}</span>
                        {product.unit && (
                          <span className="text-sm text-gray-500"> / {product.unit}</span>
                        )}
                      </div>
                      <p className="mt-3 text-base text-gray-500">{product.description}</p>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-900">Features:</h4>
                      <ul className="mt-2 space-y-1">
                        {product.features.map((feature, index) => (
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
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      <FaShoppingCart className="-ml-1 mr-2 h-5 w-5" />
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-sm text-gray-500">
                We couldn't find any products matching your search. Try adjusting your filters.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
