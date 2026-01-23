import { ArrowBigLeftDash } from "lucide-react";

const BackButton = () => {
  return (
    <div className="fixed md:top-5 bottom-2 md:left-5 left-2 z-50 cursor-pointer">
      <a
        className="md:text-xl text-sm font-bold flex items-center gap-2 text-white/70 hover:text-white duration-200 justify-center"
        href="/"
      >
        <ArrowBigLeftDash className="md:h-8 h-4 md:w-8 w-4" /> HOME
      </a>
    </div>
  );
};

export default BackButton;
