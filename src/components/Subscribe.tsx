import { Mail } from "lucide-react";
import SubscribImg from "../assets/images/subscribe.png";

export const Subscribe = () => {
  return (
    <div className="px-4 lg:px-24 py-3 lg:py-36 relative">
      <div className="absolute top-24">
        <img
          className="object-contain w-auto h-auto"
          src={SubscribImg}
          alt="subscribe"
        />
      </div>
      <div className="bg-pink-100/80 py-16 mx-4 lg:mx-24 pt-36 lg:pt-0 rounded-lg">
        <div className="py-4 lg:py-16 px-4 lg:px-16 pt-24">
          <h1 className="text-[#F85E9F] text-[18px] lg:text-[23px] font-bold uppercase text-center">
            subscribe to our newsletter
          </h1>
          <p className="text-[#191825] text-[24px] lg:text-[55px] font-bold pt-8 text-center">
            Prepare yourself & let’s explore the beauty of the world
          </p>
        </div>
        <div>
          <form className="flex items-center justify-between gap-4 pt-12 px-4 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="flex items-center gap-2 w-full">
                <Mail strokeWidth={2} />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="bg-white py-3 w-full rounded-2xl outline-none placeholder-[#191825BF]  font-bold text-[16px]"
                />
              </div>
              <button
                type="submit"
                className="flex  bg-[#5D50C6] px-6 py-3 rounded-2xl text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
