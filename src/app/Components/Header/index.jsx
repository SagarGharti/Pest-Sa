import { AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaRegClock, FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline, IoLogoTwitter } from "react-icons/io5";

function Header() {
    return (
      <div>
        <div className="bg-neutral-2 h-auto py-3 w-full flex items-center justify-between px-16">
          <div className="text-white flex gap-4 font-sans-serif">
            <div className="flex items-center gap-1">
              <IoLocationOutline className=" h-6 w-6" />
              <p>3 Limerick Street Salisbury Downs SA 5108. Australia |</p>
            </div>
            <div className="flex gap-1 items-center">
              <IoIosCall className="h-6 w-6" />
              <p>0477 775 224, 0420 348 484 |</p>
            </div>
            <div className="flex gap-1 items-center">
              <CgMail className="h-6 w-6" />
              <p>info@pestsaadelaide.com.au |</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegClock className="h-6 w-6" />
              <p>Mon-Fri: 8:00 AM - 16:00 PM </p>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <div className="bg-white rounded-full p-1">
              <FaFacebookF />
            </div>
           
            <div className="bg-white rounded-full p-1">
              <IoLogoTwitter />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  export default Header