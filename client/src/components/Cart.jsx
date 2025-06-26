import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsCartOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setIsCartOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        {cart.length === 0 ? (
                          <EmptyCart setIsCartOpen={setIsCartOpen} />
                        ) : (
                          <CartItems 
                            cart={cart} 
                            updateQuantity={updateQuantity} 
                            removeFromCart={removeFromCart}
                            setIsCartOpen={setIsCartOpen}
                          />
                        )}
                      </div>
                    </div>

                    {cart.length > 0 && (
                      <CartSummary 
                        cartTotal={cartTotal} 
                        setIsCartOpen={setIsCartOpen} 
                      />
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function EmptyCart({ setIsCartOpen }) {
  return (
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
          strokeWidth={1}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
      <p className="mt-1 text-sm text-gray-500">Start adding some items to your cart.</p>
      <div className="mt-6">
        <button
          type="button"
          onClick={() => setIsCartOpen(false)}
          className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

function CartItems({ cart, updateQuantity, removeFromCart, setIsCartOpen }) {
  return (
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {cart.map((product) => {
          // Generate a unique key for each cart item
          const variantKey = product.variant 
            ? Object.entries(product.variant)
                .map(([key, value]) => `${key}:${value}`)
                .join('|')
            : '';
          const itemKey = `${product.id}-${variantKey}`;
          
          return (
            <li key={itemKey} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product.backgroundImage || '/images/placeholder-product.svg'}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder-product.svg';
                  }}
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <Link 
                        to={`/products/${product.id}`} 
                        onClick={() => setIsCartOpen(false)}
                        className="hover:text-green-600"
                      >
                        {product.name}
                      </Link>
                    </h3>
                    <div className="ml-4 text-right">
                      <p className="font-semibold">
                        KSh {parseFloat(product.price.replace(/[^0-9.]/g, '') * product.quantity).toLocaleString('en-US')}
                      </p>
                      {product.variant?.price && (
                        <p className="text-sm text-gray-500">
                          {product.variant.price} each
                        </p>
                      )}
                      {product.variant?.breed && (
                        <p className="text-sm text-gray-600 mt-1">
                          Breed: {product.variant.breed}
                        </p>
                      )}
                      {product.variant?.type && (
                        <p className="text-sm text-gray-600 mt-1">
                          Type: {product.variant.type}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${product.id}`} className="mr-2 text-sm font-medium text-gray-700">
                      Qty
                    </label>
                    <select
                      id={`quantity-${itemKey}`}
                      name={`quantity-${itemKey}`}
                      value={product.quantity}
                      onChange={(e) => updateQuantity(
                        product.id, 
                        parseInt(e.target.value),
                        product.variant
                      )}
                      className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex">
                  <button
                    type="button"
                    onClick={() => removeFromCart(product.id, product.variant)}
                    className="font-medium text-red-600 hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CartSummary({ cartTotal, setIsCartOpen }) {
  return (
    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
        <p>Subtotal</p>
        <p>KSh {cartTotal.amount.toLocaleString('en-US')}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6">
        <Link
          to="/checkout"
          onClick={() => setIsCartOpen(false)}
          className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
        >
          Checkout
        </Link>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{' '}
          <button
            type="button"
            className="font-medium text-green-600 hover:text-green-500"
            onClick={() => setIsCartOpen(false)}
          >
            Continue Shopping<span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
}
