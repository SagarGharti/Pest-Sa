import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

function Footer() {
    return (
      <div className="h-[429px] w-full bg-black-2 flex flex-col justify-between py-[1%]">
        <div className=" flex justify-center items-center py-[2%]">
          <div className="w-[30%] flex flex-col">
            <Image src="/Logo.png" height={200} width={200} />
            <p className="text-white w-[70%]">
              Pest-SA Adelaide serves homes and businesses across all of Adelaide
              and surrounding areas, We provide real solutions for all Domestic
              and Commercial Pest control needs.
            </p>
          </div>
          <div className="text-white w-[20%] flex flex-col gap-3">
            <p className="text-xl font-semibold">Services</p>
            <p>Residental Pest Control</p>
            <p>Commercial Pest Control</p>
            <p>Pest Prevention</p>
          </div>
          <div className="text-white w-[20%] flex flex-col gap-3">
            <p className="text-xl font-semibold">Company</p>
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Reservation Conditions</p>
          </div>
          <div className="text-white w-[20%] flex flex-col gap-3">
            <p className="text-xl font-semibold">Reach Us</p>
            <p>0477 775 224</p>
            <p>Mon - Fri 8 Am - 4 Pm </p>
            <p>info@pestsaadelaide.com.au</p>
          </div>
        </div>
        <div className="px-[5%]">
          <div className="h-[1px] w-[100%] bg-white "></div>
  
          <div className="text-white flex items-center justify-between pt-6">
            <p>Copyright © Creatt Wire UI Kit All rights reserved</p>
            <div className="flex gap-4">
              <FaFacebookF />
              <IoLogoTwitter />
              <FaLinkedinIn />
              <FaYoutube />
              <AiFillInstagram />
            </div>
            <p>Made with Creatt by Studios</p>
          </div>
        </div>
      </div>
    );
  }
  export default Footer;