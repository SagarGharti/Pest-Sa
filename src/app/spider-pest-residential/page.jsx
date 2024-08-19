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
        <p className="text-3xl font-bold ">Pest-SA Spider Pest Control.</p>
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

const serviceAreaLinks = [
  { href: "/residential", text: "Residential Pest Control" },
  { href: "/commercial-residential", text: "Commercial Pest Control" },
  { href: "/termite-inspection-residential", text: "Termite Inspection" },
];

const pestControlServicesLinks = [
  { href: "/pest-sa-cockroaches-residential", text: "Pest-SA Cockroaches" },
  { href: "/spider-pest-residential", text: "Spider Pest Control" },
  { href: "/rodent-pest-residential", text: "Rodents Pest Control" },
  { href: "/birds-pest-residential", text: "Birds Pest Control" },
  { href: "/bees-maps-residential", text: "Bees and Wasps Control" },
  { href: "/timber-residential", text: "Timber Pest Control" },
  { href: "/ants-residential", text: "Pest-SA Ants Pest Control" },
];

function ResidentalPestControl() {
  return (
    <div className="bg-neutral-10 p-[5%] flex flex-col lg:flex-row lg:justify-between lg:gap-8">
      <div className="w-full lg:w-[65%] flex flex-col gap-8">
        <div className="text-lg lg:w-full leading-7 text-justify">
          <div className="w-full">
            <p className="text-3xl text-secondary-2 font-semibold">
              Pest-SA Spider Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
          </div>
          <div>
            <img
              src="/spider-pest.png"
              alt="Spider Pest Control"
              className="w-full h-auto"
            />
          </div>
          <div>
            <p className="font-semibold py-6">
              Put a Full Stop to the Spider Issues With Pest Control
            </p>
            <p>
              Spiders are the creepiest creatures which can be commonly found in
              buildings, garden, garage because the place is perfect for their
              webs. Adelaide has more species of poisonous spiders and the
              weather is perfect for them to multiply and spread infection. In
              fact, some spider bites can lead to poisoning and even death, this
              is majorly due to the toxins in spiders. Moreover, spider webs can
              be a hub for dust and debris. Spiders can make your home or office
              look unhygienic, and they also cause phobia among folks. Some
              species of spider can weave their webs inside and outside the
              building, which can make the situation worse. They are usually
              present in wall cracks, air vent areas, the roof of the home,
              corner walls, etc. In the case of a spider bite, it is crucial to
              seek immediate medical advice, as it can lead to an allergic
              reaction. Some species of spiders are extremely venomous and can
              lead to death.
            </p>

            <p className="font-semibold py-6">
              Common Signs of Spider Infestation at Home or Office
            </p>
            <p>
              If you have come across spiders anywhere in your home or office,
              there are high chances of spider infestation. Here are the common
              signs of it. It is always advisable to approach a reputable pest
              control company to get rid of spiders.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                You may find spider webs inside and outside the home, garden, or
                garage. The web size and shape can vary, but the damage remains
                the same and can lead to several health issues if the food and
                water are contaminated.
              </li>
              <li>
                Some spiders are capable of living inside the gaps and cracks of
                buildings. It is a perfect place for them to mate, lay eggs, and
                multiply.
              </li>
              <li>
                Other species of spiders need a moisture environment and can be
                found near walls, basements, sheds, and kitchen cabinets.
              </li>
              <li>
                You may also notice spiders and webs in the attic of the home,
                corners of walls, roof ceiling, cupboards, storage cabins, etc.
              </li>
              <li>
                If your home has other insects like flies or ants, you may find
                spiders living there, as it is their food source.
              </li>
            </ul>
            <p>
              It is essential to opt for Pest Control as the situation gets
              worse during autumn. When the temperature drops, spiders look for
              a place to mate and multiply. Approach a credible company like
              Pest-SA Pest Control as soon as possible, or the spider eggs can
              lead to more spiders around your home or office.
            </p>
          </div>
          <div>
            <p className="font-semibold py-6">
              How to Prevent Spider Infestations
            </p>
            <p>
              The primary way for spider entry is via building gaps like
              windows, doors, and under the main gate. The best way to prevent
              spider infestation is to avoid spiders entering the home. Routine
              cleaning of the home, garden, garage, and kitchen is crucial.
              Never leave belongings on the floor for a long time. Spiders can
              be easily trapped using a glass jar and then discarded outside.
            </p>
            <p>
              When lights are not in use, switch them off. All insects,
              especially spiders, can be easily attracted and enter the home.
              Besides these prevention methods, it is advisable to seek the help
              of professionals to get rid of spiders at home or office in
              Adelaide.
            </p>
          </div>
          <div>
            <p className="font-semibold py-6">
              Professional Solutions for Spider Infestations
            </p>
            <p>
              If the spider issue is not addressed initially, it can lead to a
              huge problem. Approach a good pest control company like Pest-SA
              Pest Control. The technical and skilled professionals use
              different spider removal methods to eliminate spiders and eggs
              from the home and office building. The skilled staff are well
              aware of the behavior of each species and use the right control
              methods to eradicate them from your home, ensuring it remains a
              hygienic and safe place for everyone.
            </p>
            <p>
              Pest Control Adelaide follows unique treatment methods to prevent
              future infestations of webbing and crawling spiders at your home
              or office. The treatment involves breaking the breeding cycle and
              removing all the webs. A reputable pest control company like
              Pest-SA also shares strategies to ensure spiders don’t return to
              your building in the future. Spider pest control treatment is
              completely safe for the family and does not harm kids and pets. It
              is crucial to protect your family from infection and infestation
              via venomous insects like spiders. We Treat Your Home Like Ours.
            </p>
          </div>
        </div>
      </div>
      <ResidenialSidebar />
    </div>
  );
}

const SpiderResidential = () => {
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
export default SpiderResidential;
