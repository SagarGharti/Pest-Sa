import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const navbar_items = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Residential", path: "/residential" },
      { name: "Commercial", path: "/commercial" },
      { name: "Services", path: "/services" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ];
  
    const [activeIndex, setActiveIndex] = useState(-1);
  
    const handleItemClick = (index) => {
      setActiveIndex(index);
    };
  
    return (
      <div className="flex items-center justify-between px-25 bg-white">
        <div>
          <Image src="/Logo.png" height={250} width={200} />
        </div>
        <div>
          <ol className="flex gap-12 text-xl font-sans-serif">
            {navbar_items.map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <Link href={item.path}>
                  <li
                    onClick={() => handleItemClick(index)}
                    className={activeIndex === index ? "text-success" : ""}
                  >
                    {item.name}
                  </li>
                </Link>
                {activeIndex === index && (
                  <div className="bg-success w-auto h-1 rounded-lg"></div>
                )}
              </div>
            ))}
          </ol>
        </div>
      </div>
    );
  }
  export default Navbar;