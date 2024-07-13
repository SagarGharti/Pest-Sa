"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";

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
        <p className="text-3xl font-bold ">
          ‘We’re there for you until they are Gone’! We stand by our{" "}
        </p>
        <p className="text-3xl font-bold ">
          {" "}
          warranties, so If the pests come back - so do we.
        </p>
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



function ResidentalPestControl() {
  return (
    <div className="bg-neutral-10 p-[5%] flex">
      <div className="w-full flex-col flex gap-8">
          <div className="text-lg lg:w-[60%] sm:w-full md:w-full leading-7 text-justify">
          <div className="w-full">
            <p className="text-3xl text-secondary-2 font-semibold ">
              Residential Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
          </div>
          <p>
            Pest-SA Pest Control, believe in providing a safe and effective
            solution to prevent pest from entering you home. As nature lovers we
            love all insects just as long there not inside your home. We take
            time to find points of entry and develop the best possible treatment
            for you.  General pest covers ants, cockroaches, spiders, Rodents,
            and all types of different insects.  All our treatments are safe for
            kids and pets, we use the latest and leading brands in the industry
            to make sure we are able to produce the highest standard of results.
            All treatments come with guaranties if any pests come back we will
            return to your property.
          </p>

          <p>
            We are industry leaders in competitive pricing, Deliver dependable
            customer satisfaction and fully guarantee our service. Rest assure
            Pest-SA Pest control  is certified and accredited with South
            Australian Health the Controlled substances Pesticide Regulation. We
            are Fully Licensed and Insured Pest Control company.
          </p>
          <p>We work Saturday and Sunday with no extra charge.</p>
        </div>
        <div >
          <img src="/residental-pest.png" />
        </div>
      <div>
   
      </div>
      </div>
         <div className="flex flex-col gap-8 w-[20%]">
            <div className="bg-success rounded-lg p-6 text-white flex flex-col gap-8">
          <p className="text-xl">Services Area</p>
            <div className="bg-neutral-10 h-1 w-40 "></div>
            <p>Residental Pest Control</p>
            <p>Commercial Pest Control</p>
            <p>Termite Inspection</p>
        </div>
             <div className="bg-success rounded-lg p-6 text-white flex flex-col gap-8">
          <p className="text-xl">Pest Control Services</p>
            <div className="bg-neutral-10 h-1 w-40 "></div>
            <p>Pest-SA Cockroaches</p>
            <p>Spider Pest Control</p>
            <p>Rodents Pest Control</p>
            <p>Birds Pest Control</p>
            <p>Bees and Waps Control</p>
            <p>Timber  Pest Control</p>
            <p>Pest-SA Ants Pest Control</p>
            <p>Termites Pest Control</p>
        </div>
         </div>
    </div>
  );
}

function ResidentalOffer() {
  return (
    <div>
      <div className="w-full bg-secondary-2 h-1" />
      <div className="flex flex-col items-center py-8">
        <p className="text-3xl text-secondary-2 font-semibold">
          RESIDENTAL OFFERS
        </p>
        <div className="bg-secondary-2 h-1 w-60 mt-3" />
      </div>
      <div className="flex justify-between px-[5%] pt-6 pb-[5%]">
        <div className="bg-neutral-9 shadow-4 rounded-3xl p-6 w-[25%] py-[6%]">
            <p className="text-xl text-center">2 FOR 1 PEST TREATMENT -</p>
            <p className="text-secondary-2 text-3xl text-center pt-[15%] pb-[10%]">$250.00</p>
           <div className="text-lg py-5">
           <p>1. Includes External Spider Treatment</p>
           <div className="bg-neutral-7 h-[1px] w-full mt-8 mb-3" />
            <p>2. Roof Void Spider Dusting & Rodent Baiting</p>
            <div className="bg-neutral-7 h-[1px] w-full mt-8 mb-3" />
            <p>Conditions Apply.  Offer Code: PEST-SA1</p>
           </div>
        </div>
        <div className="bg-neutral-9 shadow-4 rounded-3xl p-6 w-[25%] py-[6%]">
            <p className="text-xl text-center">2 FOR 1 PEST TREATMENT -</p>
            <p className="text-secondary-2 text-3xl text-center pt-[15%] pb-[10%]">$250.00</p>
           <div className="text-lg py-5">
           <p>1. Includes External Spider Treatment</p>
           <div className="bg-neutral-7 h-[1px] w-full mt-8 mb-3" />
            <p>2. Roof Void Spider Dusting & Rodent Baiting</p>
            <div className="bg-neutral-7 h-[1px] w-full mt-8 mb-3" />
            <p>Conditions Apply.  Offer Code: PEST-SA1</p>
           </div>
        </div>
        <div className="bg-neutral-9 shadow-4 rounded-3xl p-6 w-[25%] py-[6%]">
            <p className="text-xl text-center">2 FOR 1 PEST TREATMENT -</p>
            <p className="text-secondary-2 text-3xl text-center pt-[15%] pb-[10%]">$250.00</p>
           <div className="text-lg py-5">
           <p>1. Includes External Spider Treatment</p>
           <div className="bg-neutral-7 h-[1px] w-full mt-8 mb-3" />
            <p>2. Roof Void Spider Dusting & Rodent Baiting</p>
            <div className="bg-neutral-7 h-[1px] w-full mt-8 mb-3" />
            <p>Conditions Apply.  Offer Code: PEST-SA1</p>
           </div>
        </div>
     
      </div>
    </div>
  );
}
const Residential = () => {
  return (
    <div>   <div className="hidden lg:block">
    <Header />
  </div>
     
      <Navbar />
      <HeroSection />
      <ResidentalPestControl />
      {/* <ResidentalOffer /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Residential;
