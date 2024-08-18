"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
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
        <p className="text-3xl font-bold ">Pest-SA Timber Pest control.</p>
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
    <div className="bg-neutral-10 p-4 md:p-[5%] flex flex-col lg:flex-row lg:justify-between lg:gap-8">
      <div className="w-full lg:w-[65%] flex flex-col gap-8 mb-8 lg:mb-0">
        <div className="text-base sm:text-lg leading-7 text-justify">
          <div className="w-full">
            <p className="text-2xl sm:text-3xl text-secondary-2 font-semibold">
              Timber Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-32 sm:w-40 mt-3 mb-6"></div>
            <div className="w-full">
              <img src="/timber-pest.png" alt="Timber Pest Control" className="w-full h-auto" />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">Pre-purchase Timber Pest Inspection</p>
            <p className="mb-4">
              The main purpose of pre-purchase timber pest inspection is to check the condition of the home before you plan to invest in it. If there are any issues, you can also do the needful to fix it or look for another suitable property.
            </p>
            <p className="mb-4">
              The most common effects in buildings during a regular inspection include checking for increase in damp, drain leakage issues, cracked walls, safety problems, leakage in the roof, etc. You can get an estimation before making a purchase decision in Adelaide. This will also help you to negotiate the final price of the building.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">Need for Pre-Purchase Pest Inspection</p>
            <p className="mb-4">
              A pre-purchase pest inspection is crucial before buying a property. It varies from the regular termite inspection which is carried out by the property owner. The Pre-Purchase Pest Inspection should include inspection of wood decay fungi, presence of mould, borers, etc. It also includes the overall cost of treating the pest issue and preventing the same condition from happening in the future. All this should be considered to negotiate the final price of the property and to make the right purchase decision.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">How to Finalize the Right Pest Inspectors for Your Building?</p>
            <p className="mb-4">
              Here are some tips to help you choose the right person to inspect the building for pests.
            </p>
            <ul className="list-decimal pl-6 mb-4">
              <li className="mb-2">Avoid going with real estate recommendations: Usually, real estate agents have internal dealings and preferences for specific pest control companies. They usually pass the details to you and won’t genuinely recommend the right company in Adelaide. This happens as the real estate companies are acting for the sellers and they prefer to avoid too detailed inspections as much as possible. The pest inspection may have a negative effect on the overall sales price, which is not great for the sellers. It is always advisable for buyers to approach a reputable pest control company like Pest-SA.</li>
              <li className="mb-2">Don’t select based on price: You need to understand the fact “cheap is not always best,” especially when you are deciding on a pest inspector for your building. Approach pest control inspectors with experience and those recommended by your friends, family, or colleagues. You can also look for online portals for testimonials and reviews.</li>
              <li className="mb-2">A professional inspector will take the necessary time to carry out the inspection and usually has a team of skilled professionals to ensure the total safety of your building. Pest-SA has the team of right inspectors who can help you to make the right investment decision.</li>
              <li className="mb-2">Check Authenticity: Always ensure the inspectors are well qualified to begin the inspection. It is a must for them to carry a valid license to work in Adelaide. It is mandatory for them to have a valid license to initiate timber pest/termite work along with their pest license. Moreover, also check the validity of insurance carried by the inspectors. They should have professional and public liability insurance to carry out the pest inspection job. A legitimate company will happily share these necessary documents upon request.</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">Are There Any Drawbacks to Pre-Purchase Timber Pest Inspection?</p>
            <p className="mb-4">
              A pre-purchase timber pest inspection will not cause any damage to the property or any furniture. The inspectors will note all the areas which have been inspected. If they haven’t got access to any particular area, it will also be mentioned in the final inspection report.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">How Pre-Purchase Timber Pest Inspection is Done?</p>
            <p className="mb-4">
              Usually, the seller does not provide access to a few areas to hide the furniture. A good company like Pest-SA Pest Control is usually aware of such tricks and shares the final report based on the inspections. The inspector should not comment on any particular area for which they have not gained access.
            </p>
            <p className="mb-4">
              The pre-purchase timber inspections should be carried out as per the Australian Standards AS 4349.1 to inspect the borers, decaying of wood, active pest activities, termites, damage signs, any faults in the building, overall environmental conditions, or any occurrence of pest issues in the future.
            </p>
            <p className="mb-4">
              To begin with the inspection, the inspector should thoroughly check every room and also inspect the roof void and sub-floor timber. Additionally, they should inspect the outside building, fencing area, and trees up to 30 meters from the building. The inspectors usually look for leakages, drainage issues, ventilation problems, construction faults, and other major issues that could damage the house due to termites.
            </p>
            <p className="mb-4">
              Pest-SA Pest Control is a professional company that uses additional equipment to ensure 100% pest inspections. The equipment includes moisture meters, imaging cameras, and motion detectors to thoroughly investigate each nook and corner of the building. During the inspection, they do not move any belongings or open up walls to confirm the presence of termites.
            </p>
            <p className="mb-4">
              Before investing in any property located in Adelaide, make sure to hire a qualified pest inspection company to do the job.
            </p>
          </div>
        </div>
      </div>
      <ResidenialSidebar/>
    </div>
  );
}

const TimberResidential = () => {
  return (
    <div>
      {" "}
      <div className="hidden lg:block">
        <Header />
      </div>
      <Navbar />
      <HeroSection />
      <ResidentialPestControl />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default TimberResidential;
