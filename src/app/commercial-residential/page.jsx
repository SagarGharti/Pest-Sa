"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
import Link from "next/link";
import ResidentialSidebar from '../Components/ResidentialSidebar/index.jsx'

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
        Commercial Pest Control SA
        </p>
       
      </div>
      <div className="flex justify-center">
        <p className="text-lg w-[60%]  ">
        we have worked with each other for a long period of time. Our focus is on building friendly customer based services, which always put you first.
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
        <div className="text-base sm:text-lg leading-7 text-justify">
          <div className="w-full">
            <p className="text-2xl sm:text-3xl text-secondary-2 font-semibold">
              Commercial Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-32 sm:w-40 mt-3 mb-6"></div>
          </div>
          <p className="mb-4">
            How we get the job done is just as important to our team, as the
            eradication and control of pests in your business. With a dedicated
            client service manager for our commercial pest control customers, we
            know what you need, when you need it and the best way to approach
            the problem. Pest SA Pest Control are your partners in keeping your
            premises and workplaces free from pests. We'll work with you to
            determine the best plan to meet the needs of your business, then
            estimate the job using our transparent quoting policy – with no
            hidden costs. Our skilled technicians will act quickly to treat the
            problem, eradicating all pests and safeguarding against their
            return.
          </p>
          <p className="mb-4">
            We are industry leaders in competitive pricing, Deliver dependable
            customer satisfaction and fully guarantee our service. Rest assure
            Pest-SA Pest control is certified and accredited with South
            Australian Health the Controlled substances Pesticide Regulation. We
            are Fully Licensed and Insured Pest Control company.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Warehouse and Containers Pest Control.</li>
            <li>Child Care and School Pest Control.</li>
            <li>Hospital and Office Pest Control</li>
            <li>Property Management (Strata Pest Control).</li>
            <li>Supermarket and Grocery store Pest Control.</li>
            <li>Restaurant and Bars Pest Control.</li>
            <li>Pre-Construction Pest Control</li>
          </ul>
        </div>
        <div className="w-full">
          <img src="/commercial-pest.png" alt="Commercial Pest Control" className="w-full h-auto" />
        </div>
      </div>
      <ResidentialSidebar />
    </div>
  );
}






const CommercialResidential = () => {
  return (
    <div>
      {" "}
      <div className="hidden lg:block">
        <Header />
      </div>
      <Navbar />
      <HeroSection />
      <ResidentialPestControl />
      {/* <ResidentalOffer /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};
export default CommercialResidential;
