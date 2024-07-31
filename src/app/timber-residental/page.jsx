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

function ResidentalPestControl() {
  return (
    <div className="bg-neutral-10 p-[5%] flex">
      <div className="w-full flex-col flex gap-8">
        <div className="text-lg lg:w-[60%] sm:w-full md:w-full leading-7 text-justify">
          <div className="w-full">
            <p className="text-3xl text-secondary-2 font-semibold ">
              Timber Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
            <div>
              <img src="/timber-pest.png" />
            </div>
            <div>
              <p className="font-semibold py-8">
                pre-purchase timber pest inspection
              </p>
              <p>
                The main purpose of pre-purchase timber pest inspection is to
                check the condition of the home before you plan to invest in it.
                If there are any issues you can also do the needful to fix it or
                look for another suitable property.
              </p>
              <p>
                The most common effects in buildings during a regular inspection
                is checking for  increase in damp ,drain leakage issues, cracked
                walls, safety problems, leakage in the roof etc. You can get an
                estimation before making a purchase decision in Adelaide. This
                will also help you to negotiate the final price of the building.
              </p>
            </div>
            <div>
              <p className="font-semibold py-8">
                Need for Pre Purchase Pest Inspection
              </p>
              <p>
                A pre-purchase pest inspection is curial before buying a
                property. It varies from the regular termite inspection which is
                carried by the property owner. The Pre Purchase Pest Inspection
                should include inspection of wood decay fungi, presence of
                mould, borers etc.  It also includes the overall cost of
                treating the pest issue, preventing the same condition to happen
                in future. All this should be considered in order to negotiate
                the final price of the property and to make the right purchase
                decision.
              </p>
            </div>
            <div>
              <p className="font-semibold py-8">
                How to finalize the right pest inspectors for your building?
              </p>
              <p>
                Here are some tips which will help you to reach the right person
                to inspect the building for pests.
              </p>
              <ul className="list-decimal	pl-8">
                <li>
                  Avoid going with the real estate recommendations: Usually,
                  real estate agents have internal dealings and preferences for
                  specific pest control companies. They usually will pass the
                  detail to you and won’t genuinely recommend the right company
                  in Adelaide. This happens as the real estate companies are
                  acting for the sellers and they prefer to avoid too detailed
                  inspection as much as possible. The pest inspection may have a
                  negative effect on the overall sales price which is not great
                  for the sellers. It is always advisable for the buyers to
                  approach a good pest control company like Pest-SA
                </li>
                <li>
                  Don’t select based on the price: You need to understand the
                  fact “cheap is not always best” especially when you are
                  deciding a pest inspector for your building. Approach the pest
                  control inspectors with experience and which are recommended
                  by your friends, family or colleagues. You can also look for
                  online portals for testimonials and reviews.
                </li>
                <li>
                  A professional inspector will take the necessary time to carry
                  out the inspection and they usually have a team of skilled
                  professional to ensure total safety of your
                  building. Pest-SA  has the team of right inspectors who can
                  help you to make a right investment decision.
                </li>
                <li>
                  Check Authenticity: Always ensure the inspectors are well
                  qualified to begin the inspection. It is a must for them to
                  carry a valid license to work in Adelaide. It is mandatory for
                  them to have a valid license to initiate timber pest/termite
                  work along with their pest license. Moreover, also check the
                  validity of insurance carried by the inspectors, they should
                  have a professional and public liability insurance to carry
                  with the pest inspection job. A legit company will happily
                  share these necessary documents on request.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold py-8">
                Are There Any Drawbacks to Pre Purchase Timber Pest Inspection?
              </p>
              <p>
                A pre-purchase timber pest inspection will not cause any damage
                to the property or any furniture. The inspectors will note all
                the area which has been inspected. If they haven’t got access to
                any particular area, it is also mentioned in the final
                inspection report.
              </p>
            </div>
            <div>
              <p className="font-semibold py-8">
                How Pre Purchase Timber Pest Inspection is Done?
              </p>
              <p>
                Usually, the seller does not provide access to a few areas in
                order to hide the furniture, a good company like Pest-SA Pest
                Control are usually aware of such tricks and share the final
                report based on the inspections.  The inspector should not
                comment on any particular area for which they have not got the
                access to.
              </p>
              <p>
                The pre-purchase timber inspections should be carried as per the
                Australian Standards AS 4349.1.  to inspect the borers, decaying
                of wood, active pest activities, termites, damage signs, any
                fault at the building, overall environment condition or any
                occurrence of pest issues in future.
              </p>
              <p>
                In order to begin with the inspection, the inspector should
                deeply go through every room and also inspect the roof void and
                sub-floor timber. In addition to it, they should inspect the
                outside building, fencing area, tress area up to 30 meters from
                the building. The inspectors usually look for leakages, drainage
                and issue in ventilation, a fault in the construction and all
                other major issues which damage the house due to termites.
              </p>
              <p>
                Pest-SA Pest Control is a professional company which makes use
                of additional equipment to ensure 100 % pest inspections. The
                equipment includes moisture meters, imaging cameras, motion
                detectors which ensures to all investigation of each nook and
                corner of the building. During the visit of inspections, they do
                not move any belongings or open up the walls to confirm the
                presence of termites.
              </p>
              <p>
                Before investing in any property located in Adelaide make sure
                to hire a qualified pest inspection company to do the job.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-[20%]">
        <div className=" rounded-lg p-6 shadow-lg ">
          <p className="text-xl">Services Area</p>
          <div className="bg-black h-1 w-35 mt-3 mb-7"></div>
          <div className="flex flex-col gap-6">
            <Link href="/residential">
              <button className="shadow-md py-3 rounded-lg border border-neutral-9">
                <p>Residental Pest Control</p>
              </button>
            </Link>
            <Link href="/commercial-residental">
              <button className="shadow-md py-3 rounded-lg border border-neutral-9">
                <p>Commercial Pest Control</p>
              </button>
            </Link>
            <Link href="/termite-inspection-residental">
              <button className="shadow-md py-3 rounded-lg border border-neutral-9 w-full">
                <p>Termite Inspection</p>
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
              </button>
            </Link>

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
                Timber Pest Control
              </button>
            </Link>
            <Link href="ants-residental">
              <button className="shadow-md p-3 rounded-lg border border-neutral-9">
                Pest-SA Ants Pest Control
              </button>
            </Link>

          </div>
        </div>
      </div>
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
      <ResidentalPestControl />
      {/* <ResidentalOffer /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};
export default TimberResidential;
