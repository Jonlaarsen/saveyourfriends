"use client";
import { useInView } from "@/hooks/useInView";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const items = [
  {
    id: 1,
    url: "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481086-d179e0d5cad972ddacac6d534e17d469.jpg",
  },
  {
    id: 2,
    url: "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481087-0ccc8c09f20ff6b06517a29199962d43.jpg",
  },
  {
    id: 3,
    url: "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481089-5146a1d6cbc01d2122e93f6e234ccad8.jpg",
  },
];

const FeaturedComponent = () => {
  const x = useInView();
  const y = useInView();
  const z = useInView();

  return (
    <div className="h-full w-full flex flex-col md:flex-row overflow-hidden gap-10 px-4 items-center py-20 justify-evenly">
      <div
        ref={y.ref}
        className={`${y.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} duration-500 delay-100 flex items-center justify-center max-w-lg border-secondary border-4 -skew-3 h-full p-10 md:min-h-[80vh] rounded-4xl`}
      >
        <h1
          ref={x.ref}
          className={`${x.isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"} duration-500 delay-300 text-foreground font-bold text-3xl md:text-7xl text-center`}
        >
          ALL NEW COOL HOODIES FOR YOU TO RIP IN
        </h1>
      </div>
      <div
        ref={z.ref}
        className={`${z.isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"} duration-500 delay-300 h-full flex flex-col space-y-5 items-center`}
      >
        <h1 className="text-xl md:text-3xl font-bold">2025 SS COLLECTION</h1>
        <Carousel
          className="min-w-[40vh] max-w-xl overflow-hidden flex items-center h-[50vh] md:h-[70vh] bg-transparent  rounded-4xl border-4 "
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem className=" h-full max-h-[70vh] " key={item.id}>
                <img
                  src={item.url}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <button className="mt-4 bg-secondary text-black px-6 py-2 rounded-full hover:bg-lime-400 hover:scale-110 transition-all">
          CHECK IT OUT
        </button>
      </div>
    </div>
  );
};

export default FeaturedComponent;
