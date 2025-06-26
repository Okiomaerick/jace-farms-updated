import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FaArrowLeft, FaCheckCircle, FaShoppingCart, FaMoneyBillWave, FaCreditCard, FaTruck } from 'react-icons/fa';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    county: '',
    notes: '',
    paymentMethod: 'mpesa',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the order to your backend here
    console.log('Order submitted:', { ...formData, items: cart, total: cartTotal });
    
    // Generate a random order number
    const newOrderNumber = `JACE-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(newOrderNumber);
    
    // Clear the cart and show success message
    clearCart();
    setOrderPlaced(true);
    
    // In a real app, you would redirect to a success page or show a success message
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Calculate delivery fee (example: 10% of order total, min 200, max 1000)
  const deliveryFee = Math.min(Math.max(cartTotal.amount * 0.1, 200), 1000);
  const totalWithDelivery = cartTotal.amount + deliveryFee;

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <FaShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Your cart is empty
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Looks like you haven't added anything to your cart yet.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/products')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <FaArrowLeft className="mr-2 -ml-1 h-5 w-5" />
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <FaCheckCircle className="h-10 w-10 text-green-600" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
                Order Placed Successfully!
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Thank you for your order #{orderNumber}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                We've sent a confirmation email with order details.
              </p>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
              <div className="mt-4 space-y-4">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size || ''}`} className="flex items-center">
                    <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden border border-gray-200">
                      <img
                        src={item.backgroundImage || '/images/placeholder-product.svg'}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                      {item.size && <p className="text-sm text-gray-500">{item.size}</p>}
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        KSh {parseFloat(item.price.replace(/[^0-9.]/g, '') * item.quantity).toLocaleString('en-US')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>KSh {cartTotal.amount.toLocaleString('en-US')}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <p>Delivery</p>
                  <p>KSh {deliveryFee.toLocaleString('en-US')}</p>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                  <p>Total</p>
                  <p>KSh {totalWithDelivery.toLocaleString('en-US')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 sm:px-10">
            <div className="text-center">
              <button
                onClick={() => navigate('/products')}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Checkout</h1>
        <div className="md:grid md:grid-cols-3 md:gap-8 space-y-8 md:space-y-0">
          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg h-full">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Order Summary
                </h2>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={`${item.id}-${item.size || ''}`} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden border border-gray-200">
                          <img
                            src={item.backgroundImage || '/images/placeholder-product.svg'}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                          {item.size && <p className="text-sm text-gray-500">{item.size}</p>}
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            KSh {parseFloat(item.price.replace(/[^0-9.]/g, '') * item.quantity).toLocaleString('en-US')}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>KSh {cartTotal.amount.toLocaleString('en-US')}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <p>Delivery</p>
                    <p>KSh {deliveryFee.toLocaleString('en-US')}</p>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                    <p>Total</p>
                    <p>KSh {totalWithDelivery.toLocaleString('en-US')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="md:col-span-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  {step === 1 ? 'Contact & Delivery Information' : 'Payment Method'}
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
                {step === 1 ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="given-name"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="family-name"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Delivery address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          autoComplete="street-address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City/Town *
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="county" className="block text-sm font-medium text-gray-700">
                          County *
                        </label>
                        <select
                          id="county"
                          name="county"
                          required
                          value={formData.county}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                          <option value="">Select a county</option>
                          <option value="Nairobi">Nairobi</option>
                          <option value="Mombasa">Mombasa</option>
                          <option value="Kisumu">Kisumu</option>
                          <option value="Nakuru">Nakuru</option>
                          <option value="Eldoret">Eldoret</option>
                          <option value="Thika">Thika</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                          Order notes (optional)
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="Any special instructions for delivery..."
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-4">Payment Method</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                          <input
                            id="mpesa"
                            name="paymentMethod"
                            type="radio"
                            value="mpesa"
                            checked={formData.paymentMethod === 'mpesa'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                          />
                          <label htmlFor="mpesa" className="ml-3 flex items-center">
                            <FaMoneyBillWave className="h-5 w-5 text-green-600 mr-2" />
                            <span className="block text-sm text-gray-700">M-Pesa</span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                          <input
                            id="card"
                            name="paymentMethod"
                            type="radio"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                            disabled
                          />
                          <label htmlFor="card" className="ml-3 flex items-center opacity-50">
                            <FaCreditCard className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="block text-sm text-gray-700">Credit/Debit Card (Coming Soon)</span>
                          </label>
                        </div>

                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                          <input
                            id="cod"
                            name="paymentMethod"
                            type="radio"
                            value="cod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                          />
                          <label htmlFor="cod" className="ml-3 flex items-center">
                            <FaTruck className="h-5 w-5 text-green-600 mr-2" />
                            <span className="block text-sm text-gray-700">Cash on Delivery</span>
                          </label>
                        </div>
                      </div>

                      {formData.paymentMethod === 'mpesa' && (
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                          <p className="text-sm text-green-700">
                            You'll receive an M-Pesa prompt on your phone to complete the payment.
                            Please ensure your phone is with you and has sufficient funds.
                          </p>
                        </div>
                      )}

                      {formData.paymentMethod === 'cod' && (
                        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                          <p className="text-sm text-blue-700">
                            Pay with cash when your order is delivered. An additional KSh 200 will be charged for cash on delivery orders.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="ml-3 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
