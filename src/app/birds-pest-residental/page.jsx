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
              Birds Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
          </div>
          <div>
            <img src="/bird-pest.png" />
          </div>
          <div>
            <p className="font-semibold py-8">
              Hire Specialist to Removal and Proofing of Pest Birds
            </p>
            <p>
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
              It is very crucial to hire PEST-SA  Adelaide to remove the birds.
            </p>
          </div>
          <div>
            <p className="font-semibold py-8">
              How to identify bird infestation?
            </p>
            <p>
              Our home is the perfect place for the birds to stay and breed.
              Almost all the birds, especially Pigeons can survive in Adelaide
              environment, they need very minimum shelter to build their nest.
              It is practically impossible to get rid of birds nest and roost
              for a long time duration.  The issue should be fixed at the
              earlier by reliable pest control film like Pest-SA Adelaide, else
              they can multiply at a very rapid rate. It can easily grow from 10
              to 50- 200 in a very short time period.
            </p>
            <p>Here are the common signs of identifying bird infestation</p>
            <ul className="list-decimal pl-8">
              <li>Birds making the roof or garden as their home.</li>
              <li>
                Noise and humming of birds. It can also be cry from young birds.
              </li>
              <li>
                The waste material from bird nests can be found everywhere
                inside your home.
              </li>
              <li>
                Damaging of the garden, pot, and plants. It can be due to
                frequent pecking and fouling.
              </li>
              <li>
                Dropping almost everywhere, be it garden or walk area, the bird
                dropping is the very common issue.
              </li>
              <li>
                Remains of the nest, feathers in the gutter, drainage blogging
                the water line. It can also cause water contamination
              </li>
            </ul>
          </div>
          <div>
          <p className="font-semibold py-8">
          Method to Remover Pest Birds
            </p>
            <p>The surest way to remove birds is to eliminate the food sources. This will discourage them from settling in and near your home.  Moreover, you can try below-mentioned tactics to remove birds</p>
            <ul className="list-decimal pl-8">
              <li>
              Seal all the hole in the roof and outside the house. This will prevent nesting of birds.
              </li>
              <li>If the birds have already made their nest, prevent their access. This can be done by adding some barriers.
              </li>
              <li>Avoid leaving leftover food outside the home, these attract the birds and encourage them to nest nearby so that they can have quick access to food always.
              </li>
            <li>Make sure to well cover all outside furniture and discard trash.
            </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold py-8">Whom to Approach? </p>
            <p>The reliable company like Pest-SA Adelaide have a team of skilled staffs who are certified and licensed to maintain their expertise in the field. The team has a detailed knowledge regarding every species of ant and they make use of it to control ant infections. The primary goal is to safeguard your family with all sort of ant’s infestation. The high-quality safety reassures that the problem is dealt fully and the home is a safe place for everyone</p>
         
          </div>
          <div>
            <p className="font-semibold py-8">Method to Get Rid of Birds</p>
            <p>Pest birds can be a serious trouble at your home, among all the bird’s Pigeons and Seagulls are the biggest troublemakers. The pigeons look for food and grain, they can takeaways the food from trash and dirty places. Moreover, they breed the entire year and can quickly multiply.</p>
            <p>The Seagulls have a lifespan of 4 years and during this time duration they multiply and create all sorts of trouble at home and office. Moreover, once they find a nesting place they return to the same place every year. It gets extremely difficult to remove and prevent them for future visits.</p>
            <p>The best practice is to hire a team of experts and experienced professionals like Pest-SA Adelaide to get rid of pest birds and make your home and office a safe place. They make use of different removal techniques to remove the bird, discard nesting and prevent similar future incidences.</p>
            <p>It is mandatory to put a full stop to the growing bird issue. An effective bird control program through a trusted pest control company can solve your issue. These methods won’t harm the birds nor damage your house. Reach out a credible pest control company to solve the problem at the earliest and protect your home.</p>
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
const BirdResidential = () => {
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
export default BirdResidential;
