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
              Residential Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
          </div>
          <div>
            <img src="/rodent-pest.png" />
          </div>
          <div>
            <p className="font-semibold py-8">
              Safeguard Your Home with Rodents Pest Control. RATS/MICE
            </p>
            <p>
              Rats are not only creepy but can also cause a lot of damage. The
              teeth of rodents continue to grow, it can damage hard substances
              like plastic pipes, electrical wiring and can also contaminate
              food leading to dangerous diseases like Tuberculosis, tapeworms,
              plagues, Salmonellosis, etc. Rodents are usually referred to both
              rats and mice which can give you sleepless nights and can damage
              the properties and belongings. The rodents love our home because
              it is the perfect place for them to live, settle and multiply.
              They are commonly found under cupboards, near the water heaters,
              parking area, garden etc. Rodents are very common in Adelaide
              South Australia and it is must opt for Pest Control. Look out for
              a reliable company like Pest-SA Pest Control to keep your home
              Rodent free.
            </p>
          </div>
          <div>
            <p className="font-semibold py-8">
              Common Signs of Rodents at Home
            </p>
            <p>
              Rats are a nuisance and are a big troublemaker. They can make your
              home the worst place for you to stay. Here are the common signs of
              rodents at home which you should not ignore.
            </p>
            <ul>
              <li>
                1. Frequent scratching of walls, roofs, and other building.
              </li>
              <li>2. Rodents can spoil items inside the home.</li>
              <li>
                3. Rats often leave ammonia-like smell which can be too
                suffocating in an enclosed area.
              </li>
              <li>
                4. The bite marks on wood, plastic and other household items can
                cause damage. The situation is worst if they bite the electrical
                wires.
              </li>
              <li>5. Spoiling the food and contaminating water.</li>
              <li>6. Building up of rats excreta, fur on surface and sheds.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold py-8">
              Tips to Keep Rats and Mice Away
            </p>
            <p>
              Rodents can be the hub of the deadly disease, as soon as you find
              the creepy creatures make sure to reach out Pest Control Adelaide,
              meanwhile also follow these below mentioned prevention tips
            </p>
            <p>Prevention Tips</p>
            <ul>
              <li>
                1. Always cover all the food items in airtight containers.
              </li>
              <li>
                2. Maintain routine clean-up of home, garage and garden area.
              </li>
              <li>
                3. Discard all the rubbish bags outside, else it can become a
                new home for the rats and mice.
              </li>
            </ul>
          </div>
          <div>
            <p> Proofing of Home from Rodent</p>
            <p>
              Here are some additional tips which should be taken into
              consideration to secure the home from infestations.
            </p>
            <ul>
              <li>
                1. The chances of rats entering from the entrance are very high.
                Make sure to use bristle strips at the bottom of exterior doors.
                Always keep an eye on the pet doors, it can provide quick access
                to your home.
                <li>
                  2. Fill all the gaps in exterior walls, even a same opening is
                  enough for the rodents to get in.
                </li>
                <li>
                  3. If you have a damaged roof, repair as early as possible and
                  seal all the gaps. Rodents can climb up the cables and get
                  into the home through them.
                </li>
                <li>
                  4. Also, keep a check on the drains and sewer pipes, make sure
                  to close the toilet seat’s lid after use. Also, cross-check
                  the drain pipes, take immediate action if it needs
                  maintenance.
                </li>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold py-8">How to Get Rid of Rodents</p>
            <p>
              If you feel rodents are present at home make sure to secure the
              foodstuffs. Cover the food and water. Ensure dedicated usage of
              cookware and cutlery after washing it with detergent.  It is
              highly recommended to get  Rodents Removal treatment.
              <p>
                The Pest-SA Pest Control is a reliable company which makes use
                of different rodent control methods to get rid of rats and mice.
                These methods include poisoning, exclusion, trapping and
                eliminating the rodents nest.  It also includes discarding the
                dead rats as it can also lead to fatal diseases. The team of
                skilled and trained experts will take all necessary measures to
                control the rodents in your home and office.
              </p>
              <p>
                Pest-SA Pest Control takes care of all the necessary techniques
                to eliminate the current infestation and also provides follow up
                service so that the problem does not persist in future. The
                entire technique involves totally safety of pets and children.
              </p>
              <p>
                Rats can further damage the home building and commercial
                building by introducing other pests like mites, ticks. All these
                can contaminate the food, water and damage the building.
              </p>
              <p>
                If you have kids at home, it is very important to maintain a
                high standard of hygiene and sanitation. Opt for a good pest
                control company to solve the issue of Rodents as easy as
                possible because rodents breed and mature at a very rapid speed.
              </p>
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
const RodentResidential = () => {
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
export default RodentResidential;
