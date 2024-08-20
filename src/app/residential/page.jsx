"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
import Image from "next/image";
import ResidentialSidebar from "../Components/ResidentialSidebar/index.jsx";
import Link from "next/link";

function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleMessageClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center py-16 relative px-10">
      <div>
        <button className=" bg-secondary-9 px-6 py-2 rounded-full text-neutral-4">
          <sapn className="text-primary">Pest-SA</sapn> / Residental
        </button>
      </div>
      <div className="text-center">
        <p className="text-title-sm xl:text-3xl font-bold ">
          Residental Pest control SA
        </p>
      </div>
      <div className="text-center">
        <p className="text-lg ">
          we have worked with each other for a long period of time. Our focus is
          on building friendly
        </p>
        <p className="text-lg ">
          customer based services, which always put you first.
        </p>
      </div>
      <div className="flex justify-center">
      <Link href="/contact">
          <button className=" bg-primary-3 text-white py-3 rounded-lg px-6">
            Contact us
          </button>
        </Link>
      </div>
      <div className="absolute -bottom-8 right-8 transform -translate-x-1/2 z-20">
        <div className="relative" onClick={handleMessageClick}>
          <Message />
        </div>
      </div>
      {isFormOpen && (
        <div className="absolute bottom-[2.4rem] xl:right-15 cursor-pointer">
          <MessageForm handleCloseForm={handleCloseForm} />
        </div>
      )}
    </div>
  );
}

function ResidentialPestControl() {
  return (
    <div className="bg-neutral-10 p-4 sm:p-6 md:p-[5%] flex flex-col lg:flex-row lg:justify-between lg:gap-8">
      <div className="w-full lg:w-[65%] flex flex-col gap-8 mb-8 lg:mb-0">
        <div className="text-base sm:text-lg leading-7 text-justify">
          <div className="w-full">
            <p className="text-2xl sm:text-3xl text-secondary-2 font-semibold mt-10">
              Residential Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-32 sm:w-40 mt-3 mb-6"></div>
          </div>
          <p className="mb-4 text-neutral-4">
            Pest-SA Pest Control, believe in providing a safe and effective
            solution to prevent pest from entering you home. As nature lovers we
            love all insects just as long there not inside your home. We take
            time to find points of entry and develop the best possible treatment
            for you. General pest covers ants, cockroaches, spiders, Rodents,
            and all types of different insects. All our treatments are safe for
            kids and pets, we use the latest and leading brands in the industry
            to make sure we are able to produce the highest standard of results.
            All treatments come with guaranties if any pests come back we will
            return to your property.
          </p>
          <p className="mb-4 text-neutral-4">
            We are industry leaders in competitive pricing, Deliver dependable
            customer satisfaction and fully guarantee our service. Rest assure
            Pest-SA Pest control is certified and accredited with South
            Australian Health the Controlled substances Pesticide Regulation. We
            are Fully Licensed and Insured Pest Control company.
          </p>
          <p className="mb-4 text-neutral-4">
            We work Saturday and Sunday with no extra charge.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/residental-pest.png"
            alt="Residential Pest Control"
            width={800}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
      <ResidentialSidebar />
    </div>
  );
}

const Residential = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <ResidentialPestControl />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Residential;
