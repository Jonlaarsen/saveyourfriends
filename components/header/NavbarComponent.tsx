"use client";
import { useInView } from "@/hooks/useInView";
import { GitCommit } from "lucide-react";

const NavbarComponent = () => {
  const x = useInView();
  return (
    <>
      <div
        ref={x.ref}
        className={`${x.isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"} z-50 duration-500 absolute py-5 top-0 left-0 right-0 w-full px-2 flex justify-center items-center overflow-hidden`}
      >
        <div className=" w-full bg-zinc-950 pb-5 max-w-lg rounded-2xl md:skew-x-12 border-b-4 border-white ">
          <div className="flex flex-col   justify-center md:-skew-x-12  items-center">
            <h1 className=" font-uni text-secondary text-xl md:text-6xl font-semibold">
              Save your friends
            </h1>
            <div className="flex justify-evenly w-full pt-5 font-mono">
              <a className="hover:text-secondary" href="/tops">
                tops
              </a>
              <GitCommit className="w-5 h-5" />
              <a className="hover:text-secondary" href="/bottoms">
                bottoms
              </a>
              <GitCommit className="w-5 h-5" />
              <a className="hover:text-secondary" href="/accesory">
                accesory
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
