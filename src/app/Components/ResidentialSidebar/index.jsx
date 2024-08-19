import { useState, useEffect } from "react";
import Link from "next/link";

function ResidenialSidebar() {
  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => {
    // Update the selected link based on the current path
    setSelectedLink(window.location.pathname);
  }, []);

  const getLinkStyle = (href) => {
    const baseStyle =
      "shadow-md p-2 sm:p-3 rounded-xl border border-neutral-9 w-full text-lg sm:text-lg";
    return href === selectedLink
      ? `${baseStyle} bg-primary-3 text-white text-lg`
      : baseStyle;
  };

  const serviceAreas = [
    { href: "/residential", text: "Residential Pest Control" },
    { href: "/commercial-residential", text: "Commercial Pest Control" },
    { href: "/termite-inspection-residential", text: "Termite Inspection" },
  ];

  const pestControlServices = [
    { href: "/pest-sa-cockroaches-residential", text: "Pest-SA Cockroaches" },
    { href: "/spider-pest-residential", text: "Spider Pest Control" },
    { href: "/rodent-pest-residential", text: "Rodents Pest Control" },
    { href: "/birds-pest-residential", text: "Birds Pest Control" },
    { href: "/bees-maps-residential", text: "Bees and Wasps Control" },
    { href: "/timber-residential", text: "Timber Pest Control" },
    { href: "/ants-residential", text: "Pest-SA Ants Pest Control" },
  ];

  return (
    <div className="w-full lg:w-[20%] flex flex-col gap-8">
      <div className="rounded-xl p-4 sm:p-6 shadow-lg">
        <p className="text-xl">Services Area</p>
        <div className="bg-black h-1 w-40 sm:w-35 mt-3 mb-5 sm:mb-7"></div>
        <div className="flex flex-col gap-4 sm:gap-6 text-neutral-4">
          {serviceAreas.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={getLinkStyle(item.href)}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="shadow-lg rounded-xl p-4 sm:p-6 flex flex-col">
        <p className="text-xl">Pest Control Services</p>
        <div className="bg-black h-1 w-40 sm:w-50 mt-3 mb-5 sm:mb-7"></div>
        <div className="flex flex-col gap-4 sm:gap-6 text-neutral-4">
          {pestControlServices.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={getLinkStyle(item.href)}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResidenialSidebar;
