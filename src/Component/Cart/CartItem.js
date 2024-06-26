import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import NumOfProduct from "../ProductDetails/NumOfProduct";
import { authContext } from "../../context/AuthContext";

const CartItem = ({ imgUrl, title, price, id, number }) => {
  const { user } = useContext(authContext);

  return (
    <div className="flex flex-col gap-7 items-center justify-center w-full py-4 px-3 border-b border-white border-opacity-20 md:grid md:grid-cols-9 md:gap-3">
      {/* product img  */}
      <div className="flex items-center gap-5 col-start-1 col-end-6 justify-start">
        <img
          src={imgUrl}
          alt={title}
          className=" w-20 h-20 object-contain object-center"
        />
        <span className="text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90">
          {title}
        </span>
      </div>
      {/* num of product  */}
      <NumOfProduct
        userId={user.id}
        productId={id}
        styles="col-start-6 col-end-8"
      />
      {/* price  */}
      <p className="text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90 col-start-8 col-end-10">{`${price}$`}</p>
    </div>
  );
};

export default CartItem;
