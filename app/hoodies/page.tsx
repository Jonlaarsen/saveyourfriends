import ProductCard from "@/components/cards/ProductCard";
import BackButton from "@/components/ui/BackButton";

const prodcuts = [
  {
    id: 1,
    name: "Cool Hoodie",
    imageUrl:
      "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481087-3203b1683590de7fc61e2ad809008f79.jpg",
    price: 49.99,
  },
  {
    id: 2,
    name: "Another Hoodie",
    imageUrl:
      "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481087-3203b1683590de7fc61e2ad809008f79.jpg",
    price: 59.99,
  },
  {
    id: 3,
    name: "Third Hoodie",
    imageUrl:
      "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481087-3203b1683590de7fc61e2ad809008f79.jpg",
    price: 69.99,
  },
  {
    id: 4,
    name: "Cool Hoodie",
    imageUrl:
      "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481087-3203b1683590de7fc61e2ad809008f79.jpg",
    price: 49.99,
  },
  {
    id: 5,
    name: "Another Hoodie",
    imageUrl:
      "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481087-3203b1683590de7fc61e2ad809008f79.jpg",
    price: 59.99,
  },
  {
    id: 6,
    name: "Third Hoodie",
    imageUrl:
      "https://mediaslide-europe.storage.googleapis.com/wmodel/pictures/2024/9134/large-1707481087-3203b1683590de7fc61e2ad809008f79.jpg",
    price: 69.99,
  },
];

const page = () => {
  return (
    <div className="flex items-center box-border justify-center w-full bg-black min-h-screen py-20  md:px-20 ">
      <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <BackButton />
      <div className=" h-full w-full py-20 min-h-[80vh] md:p-20 p-2 gap-10 flex flex-wrap items-center justify-center  md:rounded-4xl bg-linear-to-br from-black to-zinc-950 via-zinc-800 border-white border-y-2 md:border-4 ">
        {prodcuts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
