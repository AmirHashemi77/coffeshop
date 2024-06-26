import React from "react";
import CartItem from "./CartItem";
import Error from "../Error";

const CartList = ({ cartItems }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl ">
      {cartItems.length === 0 ? (
        <Error message={"Empty Cart"} type="line" />
      ) : (
        cartItems?.map((item) => (
          <CartItem
            imgUrl={item.image}
            id={item.id}
            number={item.number}
            price={item.price}
            title={item.title}
            key={item.id}
          />
        ))
      )}
    </div>
  );
};

export default CartList;
