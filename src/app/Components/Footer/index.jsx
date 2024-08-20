import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

function Footer() {
  return (
    <div className="h-auto w-full bg-black-2 flex flex-col py-6 px-4 md:px-8 lg:px-20">
      <div className="lg:flex justify-between py-6 lg:flex-row flex-col lg:items-start">
      <div className="w-full lg:w-1/2 flex flex-col items-start mb-6 lg:mb-0 lg:pr-4">
    <Image src="/Logo.png" height={200} width={200} alt="Logo" />
    <p className="text-white mt-4 max-w-md">
      Pest-SA Adelaide serves homes and businesses across all of Adelaide
      and surrounding areas. We provide real solutions for all Domestic
      and Commercial Pest control needs.
    </p>
  </div>
  <div className="w-full lg:w-1/6 flex flex-col gap-3 mb-6 lg:mb-0">
    <p className="text-xl font-semibold text-white">Services</p>
    <p className="text-white">Residential Pest Control</p>
    <p className="text-white">Commercial Pest Control</p>
    <p className="text-white">Pest Prevention</p>
  </div>
        <div className="w-full lg:w-1/5 flex flex-col gap-3 mb-6 lg:mb-0">
          <p className="text-xl font-semibold text-white">Company</p>
          <p className="text-white">About</p>
          <p className="text-white">Contact</p>
          <p className="text-white">Privacy Policy</p>
          <p className="text-white">Reservation Conditions</p>
        </div>
        <div className="w-full lg:w-1/5 flex flex-col gap-3">
          <p className="text-xl font-semibold text-white">Reach Us</p>
          <p className="text-white">0477 775 224</p>
          <p className="text-white">Mon - Fri 8 AM - 4 PM</p>
          <p className="text-white">info@pestsaadelaide.com.au</p>
        </div>
      </div>
      <div>
        <div className="h-[1px] w-full bg-white my-4"></div>
        <div className="text-white flex flex-col lg:flex-row lg:items-center justify-between">
          <p className="text-center lg:text-left mb-4 lg:mb-0">
            Copyright © Creatt Wire UI Kit. All rights reserved.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
          <a href="https://www.facebook.com/YourPageName" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
          </a>
          <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
          <IoLogoTwitter />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;