"use client";
import Link from "next/link";
import { Home } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import BackButton from "@/components/ui/BackButton";

export default function NotFound() {
  const x = useInView();
  return (
    <div
      ref={x.ref}
      className={`${x.isInView ? "opacity-100 scale-100" : "opacity-0 scale-50"} duration-700 flex items-center justify-center bg-black min-h-screen py-20 px-4 md:px-20 overflow-x-hidden`}
    >
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-bold text-secondary font-uni">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground font-mono">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 font-mono">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-secondary text-black font-bold py-3 px-6 rounded-full hover:bg-lime-400 transition duration-200 font-mono"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/cart"
            className="flex items-center justify-center gap-2 border-secondary border-2 text-secondary font-bold py-3 px-6 rounded-full hover:bg-lime-400 hover:text-black transition duration-200 font-mono"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
