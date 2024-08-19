"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
import ResidentialSidebar from "../Components/ResidentialSidebar/index.jsx";

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
        <p className="text-3xl font-bold ">Pest-SA Ants Pest Control.</p>
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

function ResidentialPestControl() {
  return (
    <div className="bg-neutral-10 p-4 md:p-[5%] flex flex-col lg:flex-row lg:justify-between lg:gap-8">
      <div className="w-full lg:w-[65%] flex flex-col gap-8 mb-8 lg:mb-0">
        <div className="text-base sm:text-lg leading-7 text-justify">
          <div className="w-full">
            <p className="text-2xl sm:text-3xl text-secondary-2 font-semibold">
              Pest-SA Ants Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-32 sm:w-40 mt-3 mb-6"></div>
            <div className="w-full">
              <img
                src="/ants-pest.png"
                alt="Ants Pest Control"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">
              Ants Pest Control at Pest-SA Pest Control
            </p>
            <p className="mb-4">
              Ants in and around the home can make anyone extremely frustrated.
              There are many species of ants which can contaminate the food and
              can ruin the electrical wiring at your home or commercial
              building. It is very important to safeguard your home and work
              area from the ants.
            </p>
            <p className="mb-4">
              The ants prefer to stay in a sunny climatic condition, this is the
              reason they are very common in Australia. The climatic condition
              at Adelaide is perfect for the ant to survive, multiply and cause
              damage.
            </p>
            <p className="mb-4">
              Nobody knows where the ants get into the home. It can be via
              garden, window or door, you won&apos;t want them to get into your
              home or contaminate the food cupboards and kitchen. The tiny
              species can be a real nuisance.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">
              Method to Get Rid of Ants
            </p>
            <p className="mb-4">
              The internet is flooded with many tips to get rid of ants, but
              unfortunately, it is all temporary. In order to fix the issue of
              ants and get rid of them permanently you should opt for
              professional ant&apos;s pest control at Adelaide. A good company
              like Pest-SA can help you to get an ant&apos;s free home
              permanently.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">
              How to Prevent and Control Ants?
            </p>
            <p className="mb-4">
              If you have too many ants at home and are concerned about the ant
              infestation caused by it, it is advisable to approach a reliable
              Ants Pest Control.
            </p>
            <p className="mb-4">Here are some tips to prevent ants at home</p>
            <ul className="list-decimal pl-6 mb-4">
              <li className="mb-2">
                Make sure to cover the food because ants only enter a home in
                search of food. This is why they are found in kitchen cupboards
                and food cabinets. They get easily attracted by sweet and sticky
                food particles.
              </li>
              <li className="mb-2">
                Keep the kitchen counter free form food particles and clean it
                immediately if any liquid spills. Moreover, clean the food
                particular under the kitchen appliances and gas top.
              </li>
              <li className="mb-2">
                Secure the edges of garbage cans, make sure it is sealed
                tightly. Always, discard the pet foods as soon as they have
                finished eating it.
              </li>
              <li className="mb-2">
                Also prevent the entry of ants by sealing the access point like
                cracks at the door, near the window frames etc.
              </li>
              <li className="mb-2">
                A regular pest control ensures that the overall ant activity is
                reduced to a great extent.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">
              Why Controlling Ant is Important?
            </p>
            <p className="mb-4">
              You may have explored many tips and tricks to prevent the ants but
              still, it is important to take service of professional ant&apos;s
              pest control to eradicate the root cause. The pest team consists
              of a skilled professional who are trained and experiences to sort
              out ant infestations.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">Whom to Approach?</p>
            <p className="mb-4">
              The reliable company like Pest-SA Adelaide have a team of skilled
              staffs who are certified and licensed to maintain their expertise
              in the field. The team has a detailed knowledge regarding every
              species of ant and they make use of it to control ant infections.
              The primary goal is to safeguard your family with all sort of
              ant&apos;s infestation. The high-quality safety reassures that the
              problem is dealt fully and the home is a safe place for everyone
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">
              What are the Methods used to Control Ant?
            </p>
            <p className="mb-4">
              There are many reliable ant removal methods, Pest-SA Pest Control
              follows the right strategies like Ant Control Dusting at the ant
              nests location. It also includes the application of the right
              material to control the entry of ants from the cavity walls and
              roof area and window frames. Make sure to also take the follow-up
              ant pest control treatment to ensure ant proofing of home for a
              long time.
            </p>
            <p className="mb-4">
              Always approach a fast and efficient company which guarantees to
              solve the root cause of the problem in your budget.
            </p>
          </div>
        </div>
      </div>
      <ResidentialSidebar />
    </div>
  );
}

const AntsResidential = () => {
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
export default AntsResidential;
