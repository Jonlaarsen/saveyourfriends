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
          <>
            <div className="flex flex-wrap px-2 items-center justify-center gap-5 w-full">
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
            <div className="mt-8 text-white font-mono text-xl border-t-2 border-white pt-4 w-full text-center">
              Total: ${getTotalPrice().toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
