import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const navbar_items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Residential", path: "/residential" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-20">
        <div className="flex items-center justify-between px-[5%] py-4 bg-white shadow-md lg:bg-white">
          <Link href="/">
            <Image
              src="/Logo.png"
              height={200}
              width={200}
              alt="Logo"
              className="w-30 lg:w-40 xl:w-50"
            />
          </Link>
          <div className="lg:hidden">
            <button onClick={handleMenuToggle}>
              <RxHamburgerMenu size={24} className="text-neutral-4" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            <ol className="flex gap-12 text-title-sm font-sans-serif">
              {navbar_items.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer relative text-neutral-4 ${
                    activeIndex === index ? "text-success" : ""
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  <Link href={item.path}>{item.name}</Link>
                  {activeIndex === index && (
                    <div className="bg-primary-4 w-full h-1 rounded-lg absolute bottom-[-8px] left-0"></div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md lg:hidden text-neutral-4">
            <ol className="flex flex-col items-center gap-4 text-xl font-sans-serif p-4">
              {navbar_items.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer relative ${
                    activeIndex === index ? "text-success" : ""
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  <Link href={item.path}>{item.name}</Link>
                  {activeIndex === index && (
                    <div className="bg-primary-4 w-full h-1 rounded-lg absolute bottom-[-8px] left-0"></div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
