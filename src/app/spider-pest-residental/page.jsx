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
        Pest-SA Spider Pest Control.
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
              Pest-SA Spider Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
          </div>
          <div>
            <img src="/spider-pest.png" />
          </div>
          <div>
            <p className=" font-semibold py-6">
              Put a Full Stop to the Spider Issues With Pest Control
            </p>
            <p>
              Spiders are the creepiest creatures which can be commonly found in
              buildings, garden, garage because the place is perfect for their
              webs. Adelaide has more species of poisonous spiders and the
              weather is perfect for them to multiply and spread infection. In
              fact, some spider bite can lead to poisoning and even death, this
              is majorly due to the toxic in spiders. Moreover, the spider webs
              can be a hub for dust and debris. The spiders can make your home
              or office look unhygienic, it also causes phobia among folks. Some
              species of spider can weave their webs inside and outside the
              building which can make the situation worst. They are usually
              present in wall cracks, air vent area, the roof of the home,
              corner walls etc. In the case of spider biting, it is must take
              immediate medical advice else it can lead to an allergic reaction.
              Some species of spiders are extremely venomous and can lead to
              death.
            </p>

            <p className=" font-semibold py-6">
              Common Signs of Spider Infestation at Home or Office
            </p>
            <p>
              If you have come across spiders anywhere in home or office there
              are high chances of spider infestation. Here are the common signs
              of it. It is always advisable to approach a good pest control
              company to get rid of spiders.
            </p>
            <p>
              1. You may find spider webs inside and out of the home, garden or
              garage. The web size and shape can vary but the damage remains the
              same and can lead to serval health issues if the food and water
              are contaminated.
            </p>
            <p>
              2. Some spiders are capable of living inside the gaps and cracks
              of building. It is again a perfect place for them to mate, lay
              eggs and multiply.
            </p>
            <p>
              3. Whereas some species of spider needs moisture environment and
              can be found near the walls, basements, sheds, and kitchen
              cabinets.
            </p>
            <p>
              4. You may also notice spiders and webs on the attic of the home,
              corners of walls, roof ceiling, cupboards, storage cabins etc.
            </p>
            <p>
              5. If your home has other insects like flies, ants, you may find
              the spiders living there as it is the meal for them.
            </p>
            <p>
              It is must to opt for Pest Control  as the situation gets worst
              during the autumn. When the temperature drops, the spiders look
              for a place to mate and multiply. Approach a credible company
              like Pest-SA Pest Control as soon as possible else the spider eggs
              can lead to more spiders around the home or office.
            </p>
          </div>
          <div>
            <p className=" font-semibold py-6">
              How to Prevent Spiders Infestations
            </p>
            <p>
              The primary way for the spider entry is via building gaps like
              windows, doors and under the main gate. The best way to prevent
              spider’s infestation is to avoid spiders entering the home.
              Routine cleaning of home, garden, garage, and kitchen. Never leave
              the belongings on the floor for a long time. The spiders can be
              easily trapped using a glass jar and then discarded outside.
            </p>
            <p>
              When the lights are not in use switch it off. All insects,
              especially spiders can get easily attracted and enter the home.
              Besides all these prevention methods it is advisable to take help
              of professional to get rid of spiders at home or office
              in Adelaide.
            </p>
          </div>
          <div>
            <p className=" font-semibold py-6">
              Professional Solutions for Spider Infestations
            </p>
            <p>
              If the spider issue is not addressed initially, it can lead to the
              huge problem. Approach a good pest control company like Pest-SA
              Pest Control. The technical and skilled professional makes use of
              different spider removal method to eliminate spiders and eggs from
              the home and office building. The skilled staff is well aware of
              the behavior’s of each species and makes use of the right control
              method to eradicate them from your home so that it remains a
              hygienic and safe place for everyone.
            </p>
            <p>
              Pest Control Adelaide follows unique treating method to prevent
              future infestation of webbing and crawling spiders at your home or
              office. The treatment involves breaking the breeding cycle and
              removing all the webs. A good pest control company
              like Pest-SA also shares the strategies so that the spiders don’t
              come back to your building in future. The spider pest control
              treatment is totally safe for the family and does not harm the
              kids and pets. A pest control is must to protect your family from
              infection and infestation via venomous insects like spiders. We
              Treat Your Home Like Ours.
            </p>
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
const SpiderResidential = () => {
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
export default SpiderResidential;
