"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type CartCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

const CartCard = ({ id, name, imageUrl, price, quantity }: CartCardProps) => {
  const { updateQuantity } = useCart();

  function addAmount() {
    updateQuantity(id, quantity + 1);
  }

  function minusAmount() {
    if (quantity > 0) {
      updateQuantity(id, quantity - 1);
    }
  }

  return (
    <div
      className="bg-white max-w-3xl overflow-hidden w-full flex items-center justify-between pr-10 h-32 rounded-lg md:rounded-2xl text-primary z-20"
      key={id}
    >
      <img className="max-w-40 md:max-w-xs" src={imageUrl} alt={name} />

      <div className="flex flex-col justify-center items-start w-full">
        <h1 className="font-mono font-bold">{name}</h1>
        <p className="font-mono ">${price}</p>
      </div>
      <div className="flex items-center justify-center space-x-2 max-w-5 md:max-w-20 w-full">
        <button onClick={addAmount}>
          <PlusCircle className="w-5 md:w-8 h-5 md:h-8" />
        </button>
        <p className="font-mono">{quantity}</p>
        <button onClick={minusAmount}>
          <MinusCircle className="w-5 md:w-8 h-5 md:h-8" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
