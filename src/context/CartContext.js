import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartTotalPriceArr = cart.map((item) => item.totalPrice);
  const cartTotalPrice =
    cart.length === 0
      ? 0
      : cartTotalPriceArr.reduce(
          (total, prev) => Number(total) + Number(prev),
          0
        );

  const tax = (cartTotalPrice * 5) / 100;
  const packing = (cartTotalPrice * 2) / 100;

  const payable = Number(cartTotalPrice + tax + packing).toFixed(2);

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        cartTotalPrice,
        tax,
        packing,
        payable,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
