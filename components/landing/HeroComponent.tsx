"use client";
import { useInView } from "@/hooks/useInView";

const url =
  "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481089-7f0740d9a5404472f8dd1746d5a38a7b.jpg";
const HeroComponent = () => {
  const x = useInView();
  return (
    <div className="h-full w-full p-4 pt-20  md:p-20">
      <div
        ref={x.ref}
        className={`${x.isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"} border-4 border-foreground delay-200 w-full h-full flex rounded-4xl duration-700 min-h-[95vh] bg-center bg-cover`}
        style={{ backgroundImage: `url('${url}')` }}
      >
        <div className=" flex items-center justify-center  min-h-[95vh] w-1/2 h-full  ">
          <h1 className="text-4xl md:text-7xl font-bold text-secondary pt-100 pl-4 md:pl-20">
            SUPER COOL SHIT!
          </h1>
        </div>
        <div className=" flex flex-col items-center justify-center  pb-20 md:pb-60 pr-5 md:pr-20 text-right min-h-[95vh] w-1/2 h-full  ">
          <h1 className="text-3xl md:text-7xl font-bold text-foreground">
            MARLEY LIKES HORSES
          </h1>
          <p className="text-xs md:text-base text-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum,
            unde, blanditiis quos hic aut architecto voluptate recusandae
            numquam eaque accusamus sequi iste sed praesentium explicabo
            necessitatibus porro quam! Officiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
