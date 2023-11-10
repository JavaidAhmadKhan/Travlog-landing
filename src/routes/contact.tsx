import { Mails, MapPin, PhoneForwarded } from "lucide-react";
import ContactBanner from "../assets/images/banners/contact_banner.webp";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-pink-100/80">
      <div
        style={{
          backgroundImage: `url(${ContactBanner})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          objectFit: "cover",
          height: "450px",
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 pt-12 ">
        <div className="bg-white p-12 rounded-sm">
          <div className="flex items-center gap-2">
            <Mails size={28} color="#242b89" />
            <h1 className="text-[#191825BF] font-semibold text-[20px]">
              Email Us
            </h1>
          </div>
          <p className="text-[#191825BF] font-normal text-[16px] pt-2">
            info@supportcompany.com
          </p>
          <p className="text-[#191825BF] font-normal text-[16px] pt-2">
            info@exmple.com
          </p>
        </div>
        <div className="bg-white p-12 rounded-sm">
          <div className="flex items-center gap-2">
            <PhoneForwarded size={28} color="#2a9265" />
            <h1 className="text-[#191825BF] font-semibold text-[20px]">
              Call Us
            </h1>
          </div>
          <p className="text-[#191825BF] font-normal text-[16px] pt-2">
            +7704345017
          </p>
          <p className="text-[#191825BF] font-normal text-[16px] pt-2">
            +866-398-5917
          </p>
        </div>
        <div className="bg-white p-12 rounded-sm">
          <div className="flex items-center gap-2">
            <MapPin size={28} color="#b1204c" />
            <h1 className="text-[#191825BF] font-semibold text-[20px]">
              Visit Us
            </h1>
          </div>
          <p className="text-[#191825BF] font-normal text-[16px] pt-2">
            45, Kormangla, 56001 , <br />
            Bangalore, India
          </p>
          <p className="text-[#191825BF] font-normal text-[16px] pt-2">
            info@exmple.com
          </p>
        </div>
      </div>
      <section className="pt-24 pb-24">
        <h1 className="text-[#F85E9F] text-[18px] lg:text-[23px] font-bold uppercase text-center">
          Get in Touch
        </h1>
        <h2 className="text-[#191825] text-[24px] lg:text-[55px] font-bold pb-8 text-center">
          Feel Free to Contact with us
        </h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
