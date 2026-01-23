import FooterComponent from "@/components/footer/FooterComponent";
import FeaturedComponent from "@/components/landing/FeaturedComponent";
import HeroComponent from "@/components/landing/HeroComponent";

export default function Home() {
  return (
    <div className="min-h-[200vh] overflow-hidden bg-linear-0 from-black via-zinc-800 to-zinc-950 ">
      <HeroComponent />
      <FeaturedComponent />
      <FooterComponent />
    </div>
  );
}
