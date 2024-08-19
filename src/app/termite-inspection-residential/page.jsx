"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
import Image from "next/image";
import ResidenialSidebar from "../Components/ResidentialSidebar";

function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleMessageClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center py-16 relative">
      <div>
        <button className=" bg-secondary-9 px-6 py-2 rounded-full">
          <sapn className="text-primary">Pest-SA</sapn> / Residental
        </button>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold ">Termite Inspection SA</p>
      </div>
      <div className="text-center">
        <p className="text-lg ">
          we have worked with each other for a long period of time. Our focus is
          on building friendly{" "}
        </p>
        <p className="text-lg ">
          customer based services, which always put you first.
        </p>
      </div>
      <div className="flex justify-center">
        <button className=" bg-primary-3 text-white py-3 rounded-lg px-6">
          contact us
        </button>
      </div>
      <div className="absolute bottom-[-30px] right-8 transform -translate-x-1/2 z-20">
        <div className="relative" onClick={handleMessageClick}>
          <Message />
          <div className="absolute top-0 right-0 bg-primary-5 text-white rounded-full h-5 w-5 flex items-center justify-center">
            <p className="text-xs">1</p>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="absolute top-[-4px] right-15">
          <MessageForm handleCloseForm={handleCloseForm} />
        </div>
      )}
    </div>
  );
}

function ResidentialPestControl() {
  return (
    <div className="bg-neutral-10 p-4 md:p-[5%] flex flex-col lg:flex-row lg:justify-between">
      <div className="w-full lg:w-[65%] flex flex-col gap-8 mb-8 lg:mb-0">
        <div className="text-lg  sm:w-full md:w-full leading-7 text-justify">
          <div className="w-full">
            <p className="text-3xl text-secondary-2 font-semibold ">
              Termite Inspection
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
          </div>
          <p>
            Pest-SA Pest Control Adelaide is a South Australia based Business.
            We are Local and we are Termite Specialist that perform a full
            termite inspections with most recent available technology. Our
            inspections accordance with Australian standards 3660.2. Our Termite
            Specialist inspects and provide 10 pages report for you.
          </p>
          <ul className="list-disc p-8">
            <li>Any accessible roof void.</li>
            <li>Any accessible sub floor.</li>
            <li>All Internal areas of the property.</li>
            <li>Outside the perimeter of the property.</li>
            <li>The Yard, fences, retaining walls and out buildings.</li>
          </ul>

          <p>
            If you think that is termites at your property do not disturb them
            and do not spray with any chemicals as you may make them go attack
            another part of the Building.
          </p>

          <p>
            If you have such issues please call us we can provide free
            information 24 hours a day 7 days a weeks. Our Highly trained pest
            control technician are skilled to identify and eradicate all your
            unwanted pests. We are Local, we not hear only for business we must
            help the South Australian communities.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row h-auto md:h-[600px]">
          <div className="w-full md:w-[70%] h-[300px] md:h-full relative">
            <Image
              src="/termite-pest.png"
              alt="Residential Pest Control"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full md:w-[30%] flex flex-row md:flex-col md:ml-4 h-auto md:h-full mt-4 md:mt-0">
            <div className="w-1/2 md:w-full h-[200px] md:h-[48%] relative">
              <Image
                src="/termite-pest1.png"
                alt="Residential Pest Control"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-1/2 md:w-full h-[200px] md:h-[50%] relative ml-4 md:ml-0 md:mt-[4%]">
              <Image
                src="/termite-pest2.png"
                alt="Residential Pest Control"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <ResidenialSidebar />
    </div>
  );
}

const TermiteInspection = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <ResidentialPestControl />
      {/* <ResidentalOffer /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};
export default TermiteInspection;
