import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.title === product.title);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(productTitle) {
    setCartItems(cartItems.filter((item) => item.title !== productTitle));
  }

  function removeOne(product) {
    const existingItem = cartItems.find((item) => item.title === product.title);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCartItems(
          cartItems.map((item) =>
            item.title === product.title
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        removeFromCart(product.title);
      }
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  function getTotalPrice() {
    return cartItems.reduce(
      (sum, item) => sum + item.priceByDay * item.quantity,
      0
    );
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    removeOne,
    clearCart,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
