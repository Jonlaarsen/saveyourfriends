"use client";

import { useInView } from "@/hooks/useInView";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

type ProductCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};
const ProductCard = ({ id, name, imageUrl, price }: ProductCardProps) => {
  const x = useInView();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, imageUrl, price });
    toast.success(`${name} added to cart!`, {
      duration: 2000,
    });
  };

  return (
    <div
      ref={x.ref}
      key={id}
      className={`${x.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} bg-linear-to-r from-zinc-800 via-zinc-900 to-black z-10 duration-500 flex-col min-h-96 h-full w-120 border-foreground border-4 rounded-2xl shadow-lime-400 shadow-md overflow-hidden text-black`}
    >
      <div className="h-86 w-full  overflow-hidden ">
        <img
          className="object-cover object-center w-full h-full "
          src={imageUrl}
          alt={name}
        />
      </div>

      <div className="w-full px-4 py-4 flex justify-between items-center gap-2 border-t-2 border-primary ">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="font-mono font-bold text-xl text-foreground">
            {name}
          </h1>
          <p className="font-mono text-secondary font-bold">${price}</p>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-2 bg-secondary text-black font-bold py-1 px-4 rounded-full hover:bg-lime-400 transition duration-200"
        >
          Add+
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
