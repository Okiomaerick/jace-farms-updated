import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaPhone, FaEnvelope, FaLeaf, FaSeedling, FaTractor, FaVial, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { createImageWithFallback, PictureWithFallback } from '../utils/imageUtils';

// Sample product data with category-specific details
const productData = {
  // One-Month Old Chicks
  1: {
    id: 1,
    name: 'One-Month Old Chicks',
    category: 'Poultry',
    price: 'KSh 280',
    unit: 'per chick',
    description: 'High-quality, vaccinated one-month old chicks for your poultry farming needs. Our chicks are sourced from the best hatcheries and come with vaccination records.',
    features: [
      'Disease-resistant breeds',
      'Fully vaccinated',
      'Fast-growing',
      'High survival rate',
      'Available in large quantities',
      'Delivery available'
    ],
    details: {
      breeds: ['SASSO', 'KENBRO', 'KUROILER CHICKS'],
      minimumOrder: '100 chicks',
      delivery: 'Nationwide delivery available',
      support: '24/7 technical support',
      warranty: '48-hour health guarantee'
    },
    icon: <FaSeedling className="h-8 w-8 text-green-600" />,
    backgroundImage: createImageWithFallback('/images/products/one-month-old-chicks'),
    gallery: [
      createImageWithFallback('/images/products/one-month-old-chicks1'),
      createImageWithFallback('/images/products/one-month-old-chicks2'),
      createImageWithFallback('/images/products/one-month-old-chicks3')
    ]
  },
  
  // Poultry Feed
  2: {
    id: 2,
    name: 'Poultry Feed',
    category: 'Animal Feed',
    price: 'From KSh 3,200',
    unit: 'per 50kg bag',
    description: 'Premium quality poultry feed formulated for optimal growth, health, and egg production. Our feeds are made from high-quality ingredients to ensure your birds get the best nutrition.',
    features: [
      'Complete and balanced nutrition',
      'Various formulations for different growth stages',
      'Enhanced with essential vitamins and minerals',
      'Promotes healthy growth and egg production',
      'Improved feed conversion ratio',
      'Available in different package sizes'
    ],
    details: {
      types: [
        { name: 'Growers Mash', price: 'KSh 2,700/50kg' },
        { name: 'Layers Mash', price: 'KSh 3,200/50kg' },
        { name: 'Chick Mash', price: 'KSh 3,450/50kg' },
        { name: 'Kienyeji Mash', price: 'KSh 2,100/50kg' },
        { name: 'Dairy Meal', price: 'KSh 2,400/50kg' },
        { name: 'Dog Meal', price: 'KSh 2,500/50kg' },
        { name: 'Sow and Weaner', price: 'KSh 2,200/50kg' }
      ],
      benefits: [
        'Promotes rapid growth and weight gain',
        'Enhances egg production and quality',
        'Improves animal health and vitality',
        'Balanced nutrition for all stages',
        'Affordable feeding solutions',
        'Premium quality ingredients'
      ],
      delivery: 'Nationwide delivery available',
      support: 'Free feeding program consultation',
      warranty: 'Quality guaranteed'
    },
    icon: <FaLeaf className="h-8 w-8 text-green-600" />,
    backgroundImage: createImageWithFallback('/images/products/poultry-feed'),
    gallery: [
      createImageWithFallback('/images/products/poultry-feed1'),
      createImageWithFallback('/images/products/poultry-feed2'),
      createImageWithFallback('/images/products/poultry-feed3')
    ]
  },


  // Poultry Equipment
  3: {
    id: 3,
    name: 'Poultry Equipment',
    category: 'Poultry Supplies',
    price: 'Varies by equipment',
    unit: '',
    description: 'Comprehensive range of high-quality poultry farming equipment and supplies to optimize your poultry production and management.',
    features: [
      'Durable and poultry-specific equipment',
      'Suitable for all flock sizes',
      'Easy to clean and maintain',
      'Designed for bird health and safety',
      'After-sales support and training',
      'Installation services available'
    ],
    details: {
      categories: [
        {
          name: 'Feeding Equipment',
          items: [
            'Automatic feeders',
            'Manual feeders (hanging & trough)',
            'Chick feeders',
            'Feed storage bins',
            'Feed trolleys',
            'Feed scoops and measures'
          ]
        },
        {
          name: 'Watering Systems',
          items: [
            'Nipple drinkers',
            'Bell drinkers',
            'Automatic waterers',
            'Water tanks and reservoirs',
            'Water filters and regulators',
            'Water heaters for chicks'
          ]
        },
        {
          name: 'Housing Equipment',
          items: [
            'Brooders and heat lamps',
            'Egg incubators (manual & automatic)',
            'Nest boxes',
            'Perches and roosts',
            'Partition and divider systems',
            'Ventilation systems'
          ]
        },
        {
          name: 'Health & Management',
          items: [
            'Vaccination equipment',
            'Weighing scales',
            'Leg bands and wing markers',
            'Catching and handling equipment',
            'Disinfection systems',
            'Waste management solutions'
          ]
        },
        {
          name: 'Egg Handling',
          items: [
            'Egg collection trays',
            'Egg washers',
            'Egg grading machines',
            'Egg packaging materials',
            'Egg storage systems',
            'Egg candlers'
          ]
        }
      ],
      delivery: 'Nationwide delivery available',
      support: 'Installation, training, and technical support provided',
      warranty: '1-2 years warranty on equipment'
    
    },
    icon: <FaTractor className="h-8 w-8 text-green-600" />,
    backgroundImage: createImageWithFallback('/images/products/farming-equipment'),
    gallery: [
      createImageWithFallback('/images/products/farming-equipment1'),
      createImageWithFallback('/images/products/farming-equipment2'),
      createImageWithFallback('/images/products/farming-equipment3')
    ]
  }
  

};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id] || productData[1]; // Fallback to first product if not found
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedFeedType, setSelectedFeedType] = useState('');
  const [selectionError, setSelectionError] = useState('');
  const { addToCart } = useCart();

  // Initialize selected breed/feed type when product changes
  useEffect(() => {
    if (product.details?.breeds?.length > 0) {
      setSelectedBreed(product.details.breeds[0]);
    }
    if (product.details?.types?.length > 0) {
      setSelectedFeedType(product.details.types[0].name);
    }
  }, [product]);

  const validateSelection = () => {
    if (product.details?.breeds && !selectedBreed) {
      setSelectionError('Please select a breed');
      return false;
    }
    if (product.details?.types && !selectedFeedType) {
      setSelectionError('Please select a feed type');
      return false;
    }
    setSelectionError('');
    return true;
  };

  const handleAddToCart = () => {
    // Validate selection before adding to cart
    if (!validateSelection()) {
      return;
    }

    const selectedVariant = {};
    let itemPrice = product.price;
    
    // Add selected breed if available
    if (product.details?.breeds && selectedBreed) {
      selectedVariant.breed = selectedBreed;
    }
    
    // Handle feed type selection and pricing
    if (product.details?.types && selectedFeedType) {
      const selectedType = product.details.types.find(type => type.name === selectedFeedType);
      if (selectedType) {
        selectedVariant.type = selectedType.name;
        // Extract numeric price from the price string if available
        if (selectedType.price) {
          const priceMatch = selectedType.price.match(/\d+([.,]\d+)*/);
          if (priceMatch) {
            // Store the numeric price for calculations
            itemPrice = `KSh ${priceMatch[0].replace(',', '')}`;
          }
        }
      }
    }

    // Create a clean product object with all necessary properties
    const productToAdd = {
      id: product.id,
      name: product.name,
      category: product.category,
      price: itemPrice, // Use the calculated price
      unit: product.unit,
      backgroundImage: product.backgroundImage,
      quantity: quantity,
      details: product.details, // Pass along the details for variant pricing
      ...(Object.keys(selectedVariant).length > 0 && { variant: selectedVariant }),
      notes: notes.trim() || undefined
    };

    console.log('Adding to cart:', productToAdd);
    addToCart(productToAdd);
  };

  // Format price for display
  const formatPrice = (price) => {
    if (!price) return 'Contact for pricing';
    const [amount, unit] = price.split(' / ');
    return (
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">{amount}</span>
        {unit && <span className="ml-2 text-lg text-gray-600">/ {unit}</span>}
      </div>
    );
  };

  const whatsappMessage = `Hello Jace Farms, I'm interested in your ${product.name}. Can you provide more information?`;
  const whatsappUrl = `https://wa.me/254743304659?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:+254743304659`;
  const emailUrl = `mailto:info@jacefarms.co.ke?subject=Inquiry about ${encodeURIComponent(product.name)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/products" 
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Product Images */}
            <div className="mb-8 lg:mb-0">
              {/* Main Image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 relative aspect-w-1 aspect-h-1">
                <PictureWithFallback
                  basePath={product.backgroundImage.webp.replace('.webp', '')}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
                      {product.category}
                    </span>
                    <span className="ml-4 text-xl font-semibold">{product.price}</span>
                  </div>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {product.gallery && product.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-100 rounded-md overflow-hidden h-24 cursor-pointer hover:opacity-90 transition-opacity relative group"
                    onClick={() => {
                      // Create a new array with the clicked image first
                      const newGallery = [
                        img,
                        ...product.gallery.slice(0, index),
                        ...product.gallery.slice(index + 1)
                      ];
                      
                      // Update the background image and gallery
                      product.backgroundImage = img;
                      product.gallery = newGallery;
                      // Force re-render
                      window.location.reload();
                    }}
                  >
                    <PictureWithFallback
                      basePath={img.webp.replace('.webp', '')}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-md"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:pl-8">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {product.category}
                </span>
              </div>
              
              <div className="mb-6">
                {formatPrice(product.price)}
              </div>

              <div className="mb-8">
                <p className="text-gray-700 text-lg">{product.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category-Specific Details */}
              {product.details && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                    {product.name} Details
                  </h3>
                  
                  {/* Poultry Specific Details */}
                  {product.details.breeds && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Breed</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {product.details.breeds.map((breed, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedBreed(breed)}
                            className={`flex items-center p-3 rounded-md border-2 transition-colors ${selectedBreed === breed ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                          >
                            <FaSeedling className={`h-5 w-5 mr-2 ${selectedBreed === breed ? 'text-green-600' : 'text-gray-400'}`} />
                            <span className="text-gray-800">{breed}</span>
                          </button>
                        ))}
                      </div>
                      {selectedBreed && (
                        <p className="mt-3 text-sm text-green-700">
                          Selected: <span className="font-medium">{selectedBreed}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Fertilizer Specific Details */}
                  {product.details.types && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Feed Type</h4>
                      <div className="space-y-3">
                        {product.details.types.map((type, index) => (
                          <div 
                            key={index} 
                            onClick={() => setSelectedFeedType(type.name)}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${selectedFeedType === type.name ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-gray-900">{type.name}</p>
                                <p className="text-sm text-gray-600">{type.price}</p>
                              </div>
                              {selectedFeedType === type.name && (
                                <div className="h-5 w-5 rounded-full bg-green-600 flex items-center justify-center">
                                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      {selectedFeedType && (
                        <p className="mt-3 text-sm text-green-700">
                          Selected: <span className="font-medium">{selectedFeedType}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Product Categories */}
                  {product.details.categories && (
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        {product.category === 'Animal Health' ? 'Product Categories' : 'Equipment Categories'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.details.categories.map((category, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-green-600 px-4 py-3">
                              <h5 className="text-white font-medium">{category.name}</h5>
                            </div>
                            <div className="p-4">
                              <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-2"></span>
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* General Product Details */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.details.delivery && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <dt className="text-sm font-medium text-gray-500">Delivery</dt>
                          <dd className="mt-1 text-sm text-gray-900">{product.details.delivery}</dd>
                        </div>
                      )}
                      {product.details.support && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <dt className="text-sm font-medium text-gray-500">Support</dt>
                          <dd className="mt-1 text-sm text-gray-900">{product.details.support}</dd>
                        </div>
                      )}
                      {product.details.warranty && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <dt className="text-sm font-medium text-gray-500">Warranty</dt>
                          <dd className="mt-1 text-sm text-gray-900">{product.details.warranty}</dd>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mt-8">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-t border-b border-gray-300 py-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-4">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  id="notes"
                  rows="3"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Any special requests or instructions..."
                />
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 space-y-4">
                {selectionError && (
                  <div className="p-3 bg-red-50 border-l-4 border-red-500">
                    <p className="text-sm text-red-700">{selectionError}</p>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={!!selectionError}
                >
                  <FaShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </button>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href={phoneUrl}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FaPhone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                  <a
                    href={emailUrl}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FaEnvelope className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </div>

                <div className="mt-4">
                  <Link
                    to="/checkout"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-3 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    Proceed to Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {Object.values(productData)
              .filter(p => p.id !== product.id) // Don't show current product
              .filter(p => p.id !== 3 && p.id !== 4 && p.id !== 6) // Filter out Fertilizers (3), Veterinary Medicines (4), and Seeds (6)
              .slice(0, 3) // Show max 3 related products
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="w-full h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={relatedProduct.backgroundImage}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link to={`/products/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.category}</p>
                    <p className="mt-2 text-base font-medium text-green-600">
                      {relatedProduct.price}
                      {relatedProduct.unit && <span className="text-sm text-gray-500"> / {relatedProduct.unit}</span>}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
