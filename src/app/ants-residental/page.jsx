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
            Pest-SA Ants Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
            <div>
              <img src="/ants-pest.png" />
            </div>
          </div>
          <div>
            <p className="font-semibold py-8">
              Ants Pest Control at Pest-SA Pest Control
            </p>
            <p>
              Ants in and around the home can make anyone extremely frustrated. 
              There are many species of ants which can contaminate the food and
              can ruin the electrical wiring at your home or commercial
              building. It is very important to safeguard your home and work
              area from the ants.
            </p>
            <p>
              The ants prefer to stay in a sunny climatic condition, this is the
              reason they are very common in Australia. The climatic condition
              at Adelaide is perfect for the ant to survive, multiply and cause
              damage.
            </p>
            <p>
              Nobody knows where the ants get into the home. It can be via
              garden, window or door, you won’t want them to get into your home
              or contaminate the food cupboards and kitchen. The tiny species
              can be a real nuisance.
            </p>
          </div>
          <div>
            <p className="font-semibold py-8">Method to Get Rid of Ants</p>
            <p>
              The internet is flooded with many tips to get rid of ants, but
              unfortunately, it is all temporary. In order to fix the issue of
              ants and get rid of them permanently you should opt for
              professional ant’s pest control at Adelaide. A good company
              like Pest-SA  can help you to get an ant’s free home permanently.
            </p>
          </div>
          <div>
            <p className="font-semibold py-8">
              How to Prevent and Control Ants?
            </p>
            <p>
              If you have too many ants at home and are concerned about the ant
              infestation caused by it, it is advisable to approach a reliable
              Ants Pest Control.
            </p>
            <p>Here are some tips to prevent ants at home</p>
            <ul>
              <li>
                1. Make sure to cover the food because ants only enter a home in
                search of food. This is why they are found in kitchen cupboards
                and food cabinets. They get easily attracted by sweet and sticky
                food particles.
              </li>
              <li>
                2. Keep the kitchen counter free form food particles and clean
                it immediately if any liquid spills. Moreover, clean the food
                particular under the kitchen appliances and gas top.
              </li>
              <li>
                3. Secure the edges of garbage cans, make sure it is sealed
                tightly. Always, discard the pet foods as soon as they have
                finished eating it.
              </li>
              <li>
                4. Also prevent the entry of ants by sealing the access point
                like cracks at the door, near the window frames etc.
              </li>
              <li>
                5. A regular pest control ensures that the overall ant activity
                is reduced to a great extent.
              </li>
            </ul>
          </div>
          <div>
            <p>Why Controlling Ant is Important?</p>
            <p>
              You may have explored many tips and tricks to prevent the ants but
              still, it is important to take service of professional ant’s pest
              control to eradicate the root cause. The pest team consists of a
              skilled professional who are trained and experiences to sort out
              ant infestations.
            </p>
          </div>
          <div>
            <p className="font-semibold py-8">Whom to Approach? </p>
            <p>
              The reliable company like Pest-SA Adelaide have a team of skilled
              staffs who are certified and licensed to maintain their expertise
              in the field. The team has a detailed knowledge regarding every
              species of ant and they make use of it to control ant infections.
              The primary goal is to safeguard your family with all sort of
              ant’s infestation. The high-quality safety reassures that the
              problem is dealt fully and the home is a safe place for everyone
            </p>
          </div>
          <div>
            <p className="font-semibold py-8">
              What are the Methods used to Control Ant?
            </p>
            <p>
              There are many reliable ant removal methods, Pest-SA Pest
              Control follows the right strategies like Ant Control Dusting at
              the ant nests location. It also includes the application of the
              right material to control the entry of ants from the cavity walls
              and roof area and window frames. Make sure to also take the
              follow-up ant pest control treatment to ensure ant proofing of
              home for a long time.
            </p>
            <p>
              Always approach a fast  and efficient company which guarantees to
              solve the root cause of the problem in your budget.
            </p>
          </div>
        </div>

        <div></div>
      </div>
      <div className="flex flex-col gap-8 w-[20%]">
        <div className=" rounded-lg p-6 shadow-lg ">
          <p className="text-xl">Services Area</p>
          <div className="bg-black h-1 w-35 mt-3 mb-7"></div>
          <div className="flex flex-col gap-6">
            <button className="shadow-md py-3 rounded-lg border border-neutral-9">
              <p>Residental Pest Control</p>
            </button>
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
const AntsResidential = () => {
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
export default AntsResidential;
