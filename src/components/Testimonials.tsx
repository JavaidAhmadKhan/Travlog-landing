import { Star } from "lucide-react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TestmonialPic1 from "../assets/images/TestimonialPic1.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <div className=" pt-24 lg:pt-64 pb-4 lg:pb-24 px-4 lg:px-24">
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
          autoplay
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <img
                src={TestmonialPic1}
                className="object-fit w-[128px] h-[128px] rounded-full"
                alt="person"
              />
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
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.960206473.1699555545&semt=sph"
                className="object-fit w-[128px] h-[128px] rounded-full"
                alt="person"
              />
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
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1699555757~exp=1699556357~hmac=642e8077468125478ce2b32be36caa821d00db2b4228f958c57c59c0187a7ff6"
                className="object-fit w-[128px] h-[128px] rounded-full"
                alt="person"
              />
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
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
