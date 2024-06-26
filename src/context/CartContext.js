import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartTotalPrice =
    cart.length === 0
      ? 0
      : cart.length === 1
      ? Number(cart[0].totalPrice)
      : cart.reduce((prev, current) => Number(prev.totalPrice) + Number(current.totalPrice));
console.log(cartTotalPrice);
      const tax= (cartTotalPrice * 5) / 100
      const packing= (cartTotalPrice * 2) / 100

      const payable = cartTotalPrice + tax + packing

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        cartTotalPrice,
        tax,
        packing,
        payable
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
