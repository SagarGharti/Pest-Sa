"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
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
              Termite Inspection
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
          </div>
          <p>
            Pest-SA Pest Control Adelaide is a South Australia based Business.
            We are Local and we are Termite Specialist that perform a full
            termite inspections with most recent available technology. Our
            inspections accordance with Australian standards 3660.2. Our Termite
            Specialist inspects and provide 10 pages report for you.
          </p>
          <ul className="list-disc p-8">
            <li>Any accessible roof void.</li>
            <li>Any  accessible sub floor.</li>
            <li>All Internal areas of the property.</li>
            <li>Outside the perimeter of the property.</li>
            <li>The Yard, fences, retaining walls and out buildings.</li>
          </ul>

          <p>
            {" "}
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
        <div>
          <img src="/termite-pest.png" />
        </div>
        <div></div>
      </div>
      <div className="flex flex-col gap-8 w-[20%]">
      <div className=" rounded-lg p-6 shadow-lg ">
          <p className="text-xl">Services Area</p>
            <div className="bg-black h-1 w-35 mt-3 mb-7"></div>
            <div className="flex flex-col gap-6">
  <button className="shadow-md py-3 rounded-lg border border-neutral-9">
   Residental Pest Control
  </button>
  <button className="shadow-md py-3 rounded-lg border border-neutral-9">
   Commercial Pest Control
  </button>
  <Link href="/termite-inspection-residental">
    <button className="shadow-md py-3 rounded-lg border border-neutral-9 w-full">
      Termite Inspection
    </button>
  </Link>
</div>
        </div>
        <div className="shadow-lg rounded-lg p-6 flex flex-col">
          <p className="text-xl">Pest Control Services</p>
            <div className="bg-black h-1 w-50 mt-3 mb-7"></div>
            <div className="flex flex-col gap-6">
         <Link href="/pest-sa-cockroaches-residental">
         <button className="shadow-md p-3 rounded-lg border border-neutral-9">
          Pest-SA Cockroaches
          </button>
          </Link>
         <Link href="spider-pest-residental">
         <button className="shadow-md p-3 rounded-lg border border-neutral-9">
            Spider Pest Control
            </button>
         </Link>
            <Link href="rodent-pest-residental">
            <button className="shadow-md p-3 rounded-lg border border-neutral-9">
            Rodents Pest Control
            </button></Link>

            <Link href="birds-pest-residental">
            <button className="shadow-md p-3 rounded-lg border border-neutral-9">
            Birds Pest Control
            </button>
            </Link>
         <Link href="bees-maps-residental">
         <button className="shadow-md p-3 rounded-lg border border-neutral-9">
          Bees and Waps Control
          </button>
         </Link>
          <Link href="timber-residental">
          <button className="shadow-md p-3 rounded-lg border border-neutral-9">
           Timber  Pest Control
           </button>
          </Link>
        <Link href="ants-residental">
        <button className="shadow-md p-3 rounded-lg border border-neutral-9">
           Pest-SA Ants Pest Control
           </button>
        </Link>
          <Link href="termites-pest-residental">
          <button className="shadow-md p-3 rounded-lg border border-neutral-9">
           Termites Pest Control
           </button>
          </Link>
         </div>
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
          <p className="text-secondary-2 text-3xl text-center pt-[15%] pb-[10%]">
            $250.00
          </p>
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
          <p className="text-secondary-2 text-3xl text-center pt-[15%] pb-[10%]">
            $250.00
          </p>
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
          <p className="text-secondary-2 text-3xl text-center pt-[15%] pb-[10%]">
            $250.00
          </p>
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
const TermiteInspection = () => {
  return (
    <div>
      {" "}
      <div className="hidden lg:block">
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
export default TermiteInspection;
