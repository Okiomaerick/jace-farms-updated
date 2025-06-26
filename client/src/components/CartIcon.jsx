import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext';

export default function CartIcon() {
  const { cart, setIsCartOpen } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      type="button"
      className="group -m-2 p-2 flex items-center"
      onClick={() => setIsCartOpen(true)}
    >
      <ShoppingCartIcon
        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {itemCount}
      </span>
      <span className="sr-only">items in cart, view cart</span>
    </button>
  );
}
