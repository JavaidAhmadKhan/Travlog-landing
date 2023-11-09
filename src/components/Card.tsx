import EasyBookingImg from "../assets/images/booking.png";
import DestinationImg from "../assets/images/destination.png";

const data = [
  {
    imageUrl: DestinationImg,
    title: "Best Tour Guide",
    description:
      "What looked like a small patch of purple grass, above five feet.",
  },
  {
    imageUrl: EasyBookingImg,
    title: "Easy Booking",
    description: "Square, was moving across the sand in their direction.",
  },
  {
    imageUrl: "../assets/images/booking.png",
    title: "Best Tour Guide",
    description:
      "What looked like a small patch of purple grass, above five feet.",
  },
];

const Card = () => {
  return (
    <>
      {data.slice(0, 2).map((card) => (
        <>
          <div className="bg-slate-100 rounded-2xl flex items-center justify-center flex-row py-3 px-6">
            <div className="flex flex-col items-center justify-center ">
              <img
                className="object-cover object-center"
                src={card.imageUrl}
                alt="booking"
              />
              <h2 className="mt-8 text-center">{card.title}</h2>
              <p className="text-center text-[#191825] text-base font-normal mt-8">
                {card.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Card;
