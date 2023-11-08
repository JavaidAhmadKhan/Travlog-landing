import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TestmonialPic1 from "../assets/images/TestimonialPic1.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div className=" pt-64 pb-24 px-24">
      <div>
        <h1 className="text-center text-[#F85E9F] text-[23px] font-bold uppercase pt-4">
          Testimonials
        </h1>
        <p className="text-center text-[#191825] text-[44px] font-bold pb-8">
          Trust our clients
        </p>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <img src={TestmonialPic1} alt="" />
              <h1 className="pt-12 text-center text-[#FF5722] text-[28px] font-bold">
                {" "}
                Mark Smith{" "}
                <span className="text-[#191825]">/ Travel Enthusiast</span>
              </h1>
              <div className="flex items-center gap-4 pt-8">
                <Star color="#FACD49" />
                <Star color="#FACD49" />
                <Star color="#FACD49" />
                <Star color="#FACD49" />
                <Star color="#FACD49" />
              </div>
              <p className="text-center pt-8 pb-16 text-[#191825BF] font-medium text-[23px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots <br /> in a piece of classical Latin
                literature from 45 BC.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  flex-col items-center justify-center">
              <img src={TestmonialPic1} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
