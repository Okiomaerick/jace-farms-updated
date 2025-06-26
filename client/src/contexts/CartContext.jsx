import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if it exists
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('jaceFarmsCart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('jaceFarmsCart', JSON.stringify(cart));
    }
  }, [cart]);

  // Generate a unique key for each cart item based on product ID and variant
  const getCartItemKey = (item) => {
    if (!item) return '';
    const variantKey = item.variant 
      ? Object.entries(item.variant)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([key, value]) => `${key}:${value}`)
          .join('|')
      : '';
    return `${item.id}-${variantKey}`;
  };

  const addToCart = (product) => {
    console.log('addToCart called with:', product); // Debug log
    
    // Ensure quantity is a valid number and at least 1
    const quantity = Math.max(1, parseInt(product.quantity) || 1);
    
    setCart(prevCart => {
      console.log('Previous cart:', prevCart); // Debug log
      
      // Create a clean product object with only the necessary properties
      const productToAdd = { 
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        unit: product.unit,
        backgroundImage: product.backgroundImage,
        quantity: quantity,
        variant: product.variant || null,
        notes: product.notes
      };
      
      const productKey = getCartItemKey(productToAdd);
      console.log('Product key:', productKey); // Debug log
      
      // Check if this exact variant already exists in cart
      const existingItemIndex = prevCart.findIndex(item => {
        const itemKey = getCartItemKey(item);
        console.log('Comparing keys:', { itemKey, productKey, matches: itemKey === productKey }); // Debug log
        return itemKey === productKey;
      });
      
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity
        };
        console.log('Updated existing item:', updatedCart[existingItemIndex]); // Debug log
        return updatedCart;
      }
      
      // Add new item with the specified quantity
      console.log('Adding new item:', productToAdd); // Debug log
      return [...prevCart, productToAdd];
    });
    
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCart(prevCart => {
      if (!variant) {
        return prevCart.filter(item => item.id !== productId);
      }
      // Only remove if both ID and variant match
      return prevCart.filter(item => 
        !(item.id === productId && 
          JSON.stringify(item.variant || {}) === JSON.stringify(variant))
      );
    });
  };

  const updateQuantity = (productId, quantity, variant) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item => {
        // Match by both ID and variant if variant is provided
        const isMatch = variant 
          ? item.id === productId && 
            JSON.stringify(item.variant || {}) === JSON.stringify(variant)
          : item.id === productId;
          
        return isMatch ? { ...item, quantity } : item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
      return {
        count: total.count + item.quantity,
        amount: total.amount + price * item.quantity
      };
    },
    { count: 0, amount: 0 }
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
