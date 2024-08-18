"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MessageForm from "../Components/MessageForm/MessageForm";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
import Link from "next/link";
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
        <p className="text-3xl font-bold ">
        Pest-SA Ants Pest Control.
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
              Birds Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-32 sm:w-40 mt-3 mb-6"></div>
            <div className="w-full">
              <img src="/bird-pest.png" alt="Bird Pest Control" className="w-full h-auto" />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">
              Hire Specialist to Removal and Proofing of Pest Birds
            </p>
            <p className="mb-4">
              The bird species can be really annoying for anyone at home or
              office, some species can spread diseases like Ornithosis and
              Salmonella. Moreover, the birds can spoil the entire home and
              building by blocking gutters, building nests, spoiling roof tiles.
              The situation gets worst during the breeding season as they can
              get aggressive in order to protect their babies. Not to mention
              the dropping on homes, roof, cars, and garden. It is almost
              impossible to clean them. If the pest birds control is not done on
              time, it can lead to secondary insect infestation at home that
              includes the mites, lice and also flies. If the bird has made a
              nest on your home roof, get ready to face serious health risks
              too. Moreover, the bird’s nest can cause a potential fire hazard.
              It is very crucial to hire PEST-SA Adelaide to remove the birds.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">
              How to identify bird infestation?
            </p>
            <p className="mb-4">
              Our home is the perfect place for the birds to stay and breed.
              Almost all the birds, especially Pigeons can survive in Adelaide
              environment, they need very minimum shelter to build their nest.
              It is practically impossible to get rid of birds nest and roost
              for a long time duration. The issue should be fixed at the earlier
              by reliable pest control firm like Pest-SA Adelaide, else they can
              multiply at a very rapid rate. It can easily grow from 10 to 50-200
              in a very short time period.
            </p>
            <p className="mb-4">Here are the common signs of identifying bird infestation:</p>
            <ul className="list-decimal pl-6 mb-4">
              <li className="mb-2">Birds making the roof or garden as their home.</li>
              <li className="mb-2">Noise and humming of birds. It can also be cry from young birds.</li>
              <li className="mb-2">The waste material from bird nests can be found everywhere inside your home.</li>
              <li className="mb-2">Damaging of the garden, pot, and plants. It can be due to frequent pecking and fouling.</li>
              <li className="mb-2">Dropping almost everywhere, be it garden or walk area, the bird dropping is a very common issue.</li>
              <li className="mb-2">Remains of the nest, feathers in the gutter, drainage blogging the water line. It can also cause water contamination.</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">Method to Remove Pest Birds</p>
            <p className="mb-4">
              The surest way to remove birds is to eliminate the food sources. This will discourage them from settling in and near your home. Moreover, you can try below-mentioned tactics to remove birds:
            </p>
            <ul className="list-decimal pl-6 mb-4">
              <li className="mb-2">Seal all the hole in the roof and outside the house. This will prevent nesting of birds.</li>
              <li className="mb-2">If the birds have already made their nest, prevent their access. This can be done by adding some barriers.</li>
              <li className="mb-2">Avoid leaving leftover food outside the home, these attract the birds and encourage them to nest nearby so that they can have quick access to food always.</li>
              <li className="mb-2">Make sure to well cover all outside furniture and discard trash.</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">Whom to Approach?</p>
            <p className="mb-4">
              The reliable company like Pest-SA Adelaide have a team of skilled staffs who are certified and licensed to maintain their expertise in the field. The team has a detailed knowledge regarding every species of ant and they make use of it to control ant infections. The primary goal is to safeguard your family with all sort of ant’s infestation. The high-quality safety reassures that the problem is dealt fully and the home is a safe place for everyone.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-semibold py-4 sm:py-8">Method to Get Rid of Birds</p>
            <p className="mb-4">
              Pest birds can be a serious trouble at your home, among all the bird’s Pigeons and Seagulls are the biggest troublemakers. The pigeons look for food and grain, they can takeaways the food from trash and dirty places. Moreover, they breed the entire year and can quickly multiply.
            </p>
            <p className="mb-4">
              The Seagulls have a lifespan of 4 years and during this time duration they multiply and create all sorts of trouble at home and office. Moreover, once they find a nesting place they return to the same place every year. It gets extremely difficult to remove and prevent them for future visits.
            </p>
            <p className="mb-4">
              The best practice is to hire a team of experts and experienced professionals like Pest-SA Adelaide to get rid of pest birds and make your home and office a safe place. They make use of different removal techniques to remove the bird, discard nesting and prevent similar future incidences.
            </p>
            <p className="mb-4">
              It is mandatory to put a full stop to the growing bird issue. An effective bird control program through a trusted pest control company can solve your issue. These methods won’t harm the birds nor damage your house. Reach out a credible pest control company to solve the problem at the earliest and protect your home.
            </p>
          </div>
        </div>
      </div>
     <ResidenialSidebar/>
    </div>
  );
}

const BirdResidential = () => {
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
export default BirdResidential;
