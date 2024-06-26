import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { clearCartHandler } from "../../services/cartHandler";

const BillSection = () => {
  const queryClient=useQueryClient()
  const { cartTotalPrice , tax , packing , payable ,setCart ,cart}=useContext(cartContext)
  const {user,isLogIn} = useContext(authContext)
  const {mutate , isPending}= useMutation({
    mutationKey:['clearCart',user?.id],
    mutationFn:clearCartHandler,
    onMutate:()=>{
      const oldCart=cart
      setCart([])

      return oldCart;
    },
    onSuccess:()=>{
      toast("Your order has been registered .")
      queryClient.invalidateQueries({queryKey:["fetchCart", user.id]})
    },
    onError:(error, v, context)=>{
     setCart(context)
     toast(error)
    }
  })

  const cartSubmitHandler = ()=>{
    if(isLogIn){

      mutate(user?.id)
    }
  }


 
  return (
    <>
      <div className="flex flex-col items-start gap-5 w-full max-w-4xl border-b border-white border-opacity-20 p-5">
        <div className="flex items-center gap-3">
          <p className="text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90">
            TotalPrice :{" "}
          </p>
          <p className="text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90">
            {`${cartTotalPrice} $`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90">
            tax :{" "}
          </p>
          <p className="text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90">
          {`${tax} $`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90">
            packing :{" "}
          </p>
          <p className="text-white text-xl font-leiko leading-8 text-center lg:text-2xl capitalize opacity-90">
          {`${packing} $`}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 w-full max-w-4xl p-5">
        <div className="flex items-center gap-3">
          <p className="text-white text-2xl font-leiko leading-8 text-center lg:text-3xl capitalize">
            Payable :{" "}
          </p>
          <p className="text-white text-2xl font-leiko leading-8 text-center lg:text-3xl capitalize">
          {`${payable} $`}
          </p>
        </div>
        <button onClick={cartSubmitHandler} className="flex items-center justify-center rounded-2xl bg-[#22151884] w-full p-4 text-brown1 hover:bg-[#221518d6] duration-300">
          { isPending ? 'Loading...' :'Submit'}
        </button>
      </div>
    </>
  );
};

export default BillSection;
