"use client";

import CartCard from "@/components/cards/CartCard";
import BackButton from "@/components/ui/BackButton";
import { useCart } from "@/contexts/CartContext";

const page = () => {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="flex items-center box-border justify-center w-full bg-black min-h-screen py-20  md:px-20 ">
      <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <BackButton />
      <div className=" h-full w-full py-20 min-h-[80vh]  md:p-20 flex flex-wrap items-center justify-center gap-5 md:rounded-4xl bg-linear-to-br from-black to-zinc-950 via-zinc-800 border-white border-y-2 md:border-4 ">
        {cartItems.length === 0 ? (
          <div className="text-white text-xl font-mono">Your cart is empty</div>
        ) : (
          <div className="flex space-x-10">
            <div className="flex md:min-w-3xl  flex-wrap px-2 items-center justify-center gap-5 w-full">
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center h-full z-20 text-white font-mono text-xl mt-8 pt-4 w-full text-center">
              <div className="flex flex-col justify-center items-center space-y-4 border-b-2 border-white pb-4 mb-4">
                <button className="mt-2 bg-secondary text-black font-bold py-1 px-4 rounded-full hover:bg-lime-400 transition duration-200 ">
                  Shop More
                </button>
                <button className="mt-2 border-secondary border-2 text-white font-bold py-1 px-4 rounded-full hover:bg-lime-400 transition duration-200">
                  Checkout
                </button>
              </div>
              <p>Total: ${getTotalPrice().toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
