import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { editCartHandler } from "../../services/cartHandler";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NumOfProduct = ({ styles, userId, productId }) => {
  const queryClient = useQueryClient();
  const { cart, setCart } = useContext(cartContext);
  const currentItem = cart.find((item) => item.id === productId);
  const { mutate, isPending } = useMutation({
    mutationKey: ["cartEdit"],
    mutationFn: editCartHandler,
    onSuccess: () => {
      queryClient.invalidateQueries(["fetchCart"]);
      alert("cart updated");
    },
    onMutate: (data) => {
      const oldCart = cart;

      if (data.type === "inc") {
        setCart((prev) =>
          prev.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  number: item.number + 1,
                  totalPrice: (Number(item.number) + 1) * item.price,
                }
              : item
          )
        );
      }
      if (data.type === "dec") {
        setCart((prev) =>
          prev.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  number: item.number - 1,
                  totalPrice: (Number(item.number) - 1) * item.price,
                }
              : item
          )
        );
      }
      if (data.type === "del") {
        setCart((prev) => prev.filter((item) => item.id !== productId));
      }

      return oldCart;
    },
    onError: (error, v, context) => {
      setCart(context);
    },
  });

  const increaseHandler = () => {
    const newCart = cart.map((item) =>
      item.id === productId
        ? {
            ...item,
            number: item.number + 1,
            totalPrice: (Number(item.number) + 1) * item.price,
          }
        : item
    );

    mutate({ newCartData: newCart, userId: userId, type: "inc" });
  };
  const decreaseHandler = () => {
    if (currentItem.number === 1) {
      const newCart = cart.filter((item) => item.id !== productId);
      mutate({ newCartData: newCart, userId: userId, type: "del" });
      return;
    } else {
      const newCart = cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              number: item.number - 1,
              totalPrice: (Number(item.number) - 1) * item.price,
            }
          : item
      );
      mutate({ newCartData: newCart, userId: userId, type: "dec" });
    }
  };
  return (
    <div className={`flex flex-row items-center gap-3 ${styles}`}>
      <button
        disabled={isPending}
        onClick={increaseHandler}
        className="flex items-center justify-center rounded-full w-10 h-10 bg-brown1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 fill-brown4 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <input
        type="text"
        className="w-10 h-10 text-xl text-center rounded-lg bg-yellow-50"
        value={currentItem?.number}
        readOnly
      />
      <button
        disabled={isPending}
        onClick={decreaseHandler}
        className="flex items-center justify-center rounded-full w-10 h-10  bg-brown1 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-brown4 w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>
    </div>
  );
};

export default NumOfProduct;
