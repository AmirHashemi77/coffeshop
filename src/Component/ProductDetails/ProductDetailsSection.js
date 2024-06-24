import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import NumOfProduct from "./NumOfProduct";
import { authContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCartHandler } from "../../services/cartHandler";
import { useNavigate } from "react-router-dom";

const ProductDetailsSection = ({ image, title, subTitle, price, id }) => {
    const { user } = useContext(authContext);
  const [number, setNumber] = useState(1);
  const client = useQueryClient();
  const [showNumberUi, setShowNumberUi] = useState(false);
  const { error, isError, mutate } = useMutation({
    mutationKey: ["cartEdit"],
    mutationFn: editCartHandler,
    onSuccess: () => {
      alert("cart updated");
      setShowNumberUi(true);
      client.refetchQueries(["userData"]);
    },
  });
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const newCart = [
      ...user.cart,
      {
        id: id,
        title: title,
        image: image,
        number: number,
        price: price,
        totalPrice: price * number,
      },
    ];

    mutate({ newCartData: newCart, userId: user.id });
  }, [number]);

  const AddToCartHandler = () => {
    if (user) {
      const newCart = [
        ...user.cart,
        {
          id: id,
          title: title,
          image: image,
          number: number,
          price: price,
          totalPrice: Number(price) * Number(number),
        },
      ];

      mutate({ newCartData: newCart, userId: user.id });
    } else {
      alert("Please SignUp or LogIn to your account");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center w-full max-w-5xl bg-card-slider p-5 md:flex-row-reverse">
      {/* product image  */}
      <div className="flex items-center justify-center w-full px-5 md:w-5/12">
        <img
          src={image}
          alt="product"
          className="w-full h-96 object-contain object-center"
        />
      </div>

      {/* product details section  */}

      <div className="flex flex-col items-start w-full px-5 flex-1">
        {/* title section  */}
        <div className="flex flex-col w-full items-start gap-3 pb-6  border-b border-white border-opacity-50 px-3">
          {/* title  */}
          <h1 className="text-white text-3xl font-leiko leading-8 text-left md:text-4xl lg:text-5xl capitalize opacity-80">
            {title}
          </h1>
          {/* subtitle  */}
          <h3 className="text-white text-lg font-leiko leading-8 text-left capitalize opacity-40 ">
            {subTitle}
          </h3>
        </div>

        {/* price section */}
        <div className="flex flex-col items-center gap-4 justify-between w-full px-3 py-6 border-b border-white border-opacity-50 md:flex-row">
          <div className="flex flex-row items-center gap-3">
            <h2 className="text-white text-2xl font-leiko leading-8 text-center lg:text-3xl capitalize opacity-40">
              Price:
            </h2>
            <span className="text-white text-2xl font-leiko leading-8 text-center lg:text-3xl capitalize opacity-40">{`${price} $`}</span>
          </div>
          {showNumberUi && (
            <NumOfProduct number={number} setNumber={setNumber} />
          )}
        </div>

        {!showNumberUi && <button
          onClick={AddToCartHandler}
          className="flex items-center justify-center rounded-lg bg-[#22151884] w-full my-6 p-4 text-brown1 hover:bg-[#221518c0] duration-300"
        >
          Add to cart
        </button>}
      </div>
    </div>
  );
};

export default ProductDetailsSection;
