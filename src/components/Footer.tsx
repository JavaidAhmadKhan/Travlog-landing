import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <div className="px-4 md:px-12 lg:px-48 pt-8 pb-8">
      <div className="">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center text-[#191825BF] text-lg font-normal ">
          <li className="cursor-pointer">
            <img src={Logo} alt="logo" />
          </li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Meet Us</li>
        </ul>
      </div>
      <div className="flex items-center gap-4 justify-start pt-8">
        <Facebook className="cursor-pointer" />
        <Twitter className="cursor-pointer" />
        <Instagram className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
