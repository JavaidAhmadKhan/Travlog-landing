import Des1Img from "../assets/images/des1.jpg";
import Des2Img from "../assets/images/des2.jpg";
import Des3Img from "../assets/images/des3.jpg";
import { Star } from "lucide-react";

const destinationData = [
  {
    imageUrl: Des1Img,
    title: "Paradise Beach, Bantayan Island",
    price: "550.16",
    country: "Rome, Italy",
    rating: "4.8",
  },
  {
    imageUrl: Des2Img,
    title: "Ocean with full of Colors",
    price: "210",
    country: "Maldives",
    rating: "4.5",
  },
  {
    imageUrl: Des3Img,
    title: "Mountain View, Above the cloud",
    price: "150",
    country: "United Arab Emeries ",
    rating: "5.0",
  },
];

const TopDestinations = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 px-4 lg:px-24 pt-12 pb-12">
        <div>
          <h2 className="text-[18px] lg:text-[23px]  font-bold leading-tight  text-[#F85E9F] uppercase">
            Top Destination
          </h2>
          <p className="text-[#191825] text-[24px] lg:text-[44px] font-bold mt-4">
            Explore top destination
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-24 gap-4 pt-6 pb-6 ">
        {destinationData.map((item) => (
          <div className="">
            <img
              className="rounded-t-2xl object-cover object-center w-full h-auto "
              src={item.imageUrl}
              alt=""
            />
            <div className="bg-slate-100 px-6 py-3 rounded-b-2xl">
              <div className="flex items-start justify-between">
                <h1 className="text-[#191825] text-[23px] font-bold">
                  {item.title}
                </h1>
                <p className="text-[#F85E9F] text-[23px] font-bold">
                  ${item.price}
                </p>
              </div>
              <p className="text-slate-600 text-[18px] font-normal pt-4">
                {item.country}
              </p>
              <div className="flex items-center gap-2 pt-4">
                <span className="text-[#FF5722] text-[23px] font-bold">
                  {item.rating}
                </span>
                <Star size={23} color="#FF5722" fill="#FF5722" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
