import { AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaRegClock, FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline, IoLogoTwitter } from "react-icons/io5";

function Header() {
  return (
    <div>
      <div className="bg-neutral-2 h-auto py-3 w-full flex items-center justify-end xl:justify-between px-4 md:px-8 lg:px-16">
        <div className="hidden text-white xl:flex xl:flex-row lg:gap-4 font-sans-serif">
          <div className="flex items-center gap-1">
            <IoLocationOutline className="h-5 w-5 md:h-6 md:w-6" />
            <p className="text-xs">
              3 Limerick Street Salisbury Downs SA 5108, Australia |
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <IoIosCall className="h-5 w-5 md:h-6 md:w-6" />
            <p className="text-xs">0477 775 224, 0420 348 484 |</p>
          </div>
          <div className="flex gap-1 items-center">
            <CgMail className="h-5 w-5 md:h-6 md:w-6" />
            <p className="text-xs">info@pestsaadelaide.com.au |</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaRegClock className="h-5 w-5 md:h-6 md:w-6" />
            <p className="text-xs">Mon-Fri: 8:00 AM - 16:00 PM</p>
          </div>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
        <a href="https://www.facebook.com/YourPageName" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-1">
            <FaFacebookF className="h-5 w-5 md:h-6 md:w-6 text-neutral-2 flex items-center justify-center" />
          </a>
          <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-1">
            <IoLogoTwitter className="h-5 w-5 md:h-6 md:w-6 text-neutral-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
