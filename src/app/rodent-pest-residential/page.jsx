"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
import ResidenialSidebar from "../Components/ResidentialSidebar/index.jsx";

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
        <p className="text-3xl font-bold ">Pest-SA Rodents Pest Control.</p>
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
    <div className="bg-neutral-10 p-4 md:p-[5%] flex flex-col lg:flex-row lg:justify-between lg:gap-8">
      <div className="w-full lg:w-[65%] flex flex-col gap-8 mb-8 lg:mb-0">
        <div className="text-base sm:text-lg leading-7 text-justify">
          <div className="w-full">
            <p className="text-2xl sm:text-3xl text-secondary-2 font-semibold">
              Residential Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-32 sm:w-40 mt-3 mb-6"></div>
          </div>
          <div className="w-full">
            <img
              src="/rodent-pest.png"
              alt="Rodent Pest Control"
              className="w-full h-auto"
            />
          </div>
          <div>
            <p className="font-semibold py-4 sm:py-8">
              Safeguard Your Home with Rodents Pest Control. RATS/MICE
            </p>
            <p className="mb-4">
              Rats are not only creepy but can also cause a lot of damage. The
              teeth of rodents continue to grow, which can damage hard
              substances like plastic pipes, electrical wiring, and contaminate
              food, leading to dangerous diseases like Tuberculosis, tapeworms,
              plagues, Salmonellosis, etc. Rodents, including both rats and
              mice, can cause sleepless nights and damage properties and
              belongings. They thrive in homes as it provides the perfect
              environment for them to live, settle, and multiply. Commonly found
              under cupboards, near water heaters, in parking areas, gardens,
              etc., rodents are very common in Adelaide, South Australia. It is
              essential to opt for Pest Control. Choose a reliable company like
              Pest-SA Pest Control to keep your home rodent-free.
            </p>
          </div>
          <div>
            <p className="font-semibold py-4 sm:py-8">
              Common Signs of Rodents at Home
            </p>
            <p className="mb-4">
              Rats are a nuisance and can make your home very uncomfortable.
              Here are some common signs of rodents that you should not ignore:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Frequent scratching of walls, roofs, and other building
                surfaces.
              </li>
              <li className="mb-2">Spoiling of items inside the home.</li>
              <li className="mb-2">
                Ammonia-like smell, which can be overwhelming in enclosed areas.
              </li>
              <li className="mb-2">
                Bite marks on wood, plastic, and other household items, which
                can cause damage, especially if they bite electrical wires.
              </li>
              <li className="mb-2">Contaminating food and water.</li>
              <li className="mb-2">Build-up of rat excreta, fur, and sheds.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold py-4 sm:py-8">
              Tips to Keep Rats and Mice Away
            </p>
            <p className="mb-4">
              Rodents can carry deadly diseases, so it&apos;s important to
              address any infestations promptly. In addition to contacting Pest
              Control Adelaide, follow these prevention tips:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Always cover all food items in airtight containers.
              </li>
              <li className="mb-2">
                Maintain a routine clean-up of your home, garage, and garden
                area.
              </li>
              <li className="mb-2">
                Dispose of rubbish bags outside promptly to avoid them becoming
                a new home for rats and mice.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold py-4 sm:py-8">
              Proofing Your Home from Rodents
            </p>
            <p className="mb-4">
              Consider these additional tips to secure your home from rodent
              infestations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Use bristle strips at the bottom of exterior doors to prevent
                entry. Also, monitor pet doors as they can provide access to
                your home.
              </li>
              <li className="mb-2">
                Fill all gaps in exterior walls, as even a small opening can
                allow rodents to enter.
              </li>
              <li className="mb-2">
                Repair damaged roofs promptly and seal all gaps. Rodents can
                climb cables and enter through them.
              </li>
              <li className="mb-2">
                Check drains and sewer pipes, and ensure toilet seats are closed
                after use. Also, inspect drain pipes and take action if
                maintenance is needed.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold py-4 sm:py-8">
              How to Get Rid of Rodents
            </p>
            <p className="mb-4">
              If you suspect rodents in your home, secure foodstuffs by covering
              them and ensure dedicated use of cookware and cutlery after
              washing. It is highly recommended to get professional rodent
              removal treatment.
            </p>
            <p className="mb-4">
              Pest-SA Pest Control offers reliable rodent control methods
              including poisoning, exclusion, trapping, and eliminating nests.
              They also handle the disposal of dead rodents to prevent disease.
              Their team of skilled experts will take all necessary measures to
              control rodents in your home and office.
            </p>
            <p className="mb-4">
              Pest-SA Pest Control ensures all techniques are safe for pets and
              children, and provides follow-up services to prevent future
              infestations. Rodents can introduce other pests like mites and
              ticks, contaminate food and water, and damage buildings. If you
              have kids, maintaining high standards of hygiene and sanitation is
              crucial. Opt for a good pest control company to address rodent
              issues promptly, as they breed and mature rapidly.
            </p>
          </div>
        </div>
      </div>
      <ResidenialSidebar />
    </div>
  );
}

const RodentResidential = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <ResidentalPestControl />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default RodentResidential;
