import Image from "next/image";

const images = [
  { src: "/image-most-clicked.png", alt: "Most Clicked" },
  { src: "/image-most-watchlisted.png", alt: "Most Watchlisted" },
  { src: "/image-hottest-listing.png", alt: "Hottest Listing" },
];

const ImageCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 w-full h-auto gap-4 px-2">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="relative w-full aspect-[418/286] rounded-2xl justify-self-center"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
