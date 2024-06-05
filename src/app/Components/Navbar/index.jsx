import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const navbar_items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Residential", path: "/residential" },
    // { name: "Commercial", path: "/commercial" },
    { name: "Services", path: "/services" },
    // { name: "Testimonials", path: "/testimonials" },
    // { name: "Blog", path: "/blog" },
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
    <div className="sticky top-0 z-10">
      <div className="flex items-center justify-between px-[5%] py-4 bg-white shadow-md lg:bg-white">
        <div>
          <Image src="/Logo.png" height={200} width={200} alt="Logo" />
        </div>
        <div className="lg:hidden">
          <button onClick={handleMenuToggle}>
            <RxHamburgerMenu size={24} />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-12">
          <ol className="flex gap-12 text-xl font-sans-serif">
            {navbar_items.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${activeIndex === index ? "text-success" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <Link href={item.path}>{item.name}</Link>
                {activeIndex === index && (
                  <div className="bg-success w-auto h-1 rounded-lg"></div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md lg:hidden">
          <ol className="flex flex-col items-center gap-4 text-xl font-sans-serif p-4">
            {navbar_items.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${activeIndex === index ? "text-success" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <Link href={item.path}>{item.name}</Link>
                {activeIndex === index && (
                  <div className="bg-success w-auto h-1 rounded-lg"></div>
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
