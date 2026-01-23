"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

const CartButton = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link href="/cart" className="cursor-pinter">
      <div className="fixed md:top-5 top-2 md:right-5 right-2 z-100 font-mono font-bold hover:bg-secondary/30 bg-black/80 border-secondary border-2 rounded-full p-3 transition duration-200 cursor-pointer">
        <ShoppingCart className="md:w-6 w-4 md:h-6 h-4 font-bold text-secondary" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-black text-secondary border-secondary border-2 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartButton;
