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
        <p className="text-3xl font-bold ">
          Pest-SA Bees and Waps Pest Control.
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
              Bees and Wasps Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-32 sm:w-40 mt-3 mb-6"></div>
            <div className="w-full">
              <img
                src="/bees-pest.png"
                alt="Bees and Wasps Pest Control"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6">
              <p className="font-semibold py-4 sm:py-8">
                Safeguard your home from Bees and Wasps
              </p>
              <p className="mb-4">
                Bees and wasp can be seen unexpectedly anywhere. Out of nowhere
                they can arrive at a place with their brigade and make a hive in
                and around your home or office building. They usually settle
                around chimney vents, tree, and garden area. It is very
                difficult to get rid of them, spraying water won&apos;t help.
                These tiny insects are usually in search of moisture and The
                city of Adelaide is the perfect home for them. Spraying water
                can be more inviting as well.
              </p>
              <p className="mb-4">
                Moreover, these bees and wasps are super active during the
                summer due to the hot and moist weather condition. when it bites
                anyone the sting is very painful and annoying. It can lead to
                allergic reactions and some are life threatening too. In fact,
                the tiny wasps are more aggressive in nature, once disturbed
                they can attack in a bunch and cause multiple stings.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold py-4 sm:py-8">
                Prevention of Bees and Wasps
              </p>
              <p className="mb-4">
                Getting rid of bees and wasp is very difficult, you can still
                try your level best to prevent them during summer. You can keep
                a narrow water tray and add some floating corks nearby bees hub.
                The cork should be a little about the water bowl, this will make
                the bees to land safely on the cork and get in contact with
                water.
              </p>
              <p className="mb-4">
                The wasps enjoys the liquid sweet treat, you can place a soft
                drink can and use the same to trap them. Never even try to
                approach a bee or wasp nest, they can be very aggressive while
                protecting their home. Wasps generally make mud cells near a
                shaded place as their home during summers.
              </p>
              <p className="mb-4">
                Let them finish the larval housing, once they have left, discard
                them. All of these prevention methods are temporary, in order to
                get rid of this issue, it is always advisable to approach
                reliable pest control, Adelaide. They make use of different
                techniques to solve the bees and wasps problem at home and
                office.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-semibold py-4 sm:py-8">
                Tips to prevent bees and wasps
              </p>
              <ul className="list-decimal pl-6 mb-4">
                <li className="mb-2">
                  Discard any fallen fruit or food items from the garden area.
                </li>
                <li className="mb-2">
                  Never leave the uneaten pet food outside the home or near the
                  balcony.
                </li>
                <li className="mb-2">
                  Discard the bins and make sure to use a tight-fitting lid so
                  that insects cannot enter inside. Limit the water sources.
                </li>
                <li className="mb-2">
                  Always cover the food when you are out of the home, especially
                  during picnics and barbeques.
                </li>
                <li className="mb-2">
                  Make sure to use clean containers with straw to drink, discard
                  cans and bottles with lids.
                </li>
                <li className="mb-2">Keep the child and pets away.</li>
                <li className="mb-2">
                  Always keep the windows and door shut so that the bees and
                  wasp don&apos;t enter your home.
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="font-semibold py-4 sm:py-8">
                Signs of Bee and Wasp Infestation at Home
              </p>
              <p className="mb-4">
                Usually, wasp and bees make nests in wood pulp, the saliva is
                used to create a wall. These nests are founded in the shaded
                area. They make corner of walls, roof, tree, unused vehicles are
                their home.
              </p>
              <p className="mb-4">
                Once the nest is built, the size can increase at a very rapid
                speed, the situation gets worst in summers. It is best to hire
                Pest-Ex Adelaide during the spring season. They will eradicate
                the problem of bees and wasps completely.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-semibold py-4 sm:py-8">
                Bees and Wasps are attracted to
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">
                  Easily accessible raw and cooked sweet foods like fruit, soft
                  drinks, wine, water
                </li>
                <li className="mb-2">Open pet food.</li>
                <li className="mb-2">Recently mown lawn area.</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="font-semibold py-4 sm:py-8">
                Professional Bee and Wasp Control
              </p>
              <p className="mb-4">
                The warm and moist weather of Adelaide makes it a perfect place
                for bees and wasp to grow, survive and multiply. Home remedies
                and prevention tips are good and workable for a short time
                duration. It is best to hire an expert like Pest-Ex Adelaide to
                undergo permanent Bee and Wasp Control, these treatments are
                totally safe for pets, family and also for the environment.
              </p>
              <p className="mb-4">
                The team is extremely skilled and does effective job at very
                affordable rates. They make sure the issue is dealt completely
                so that your home remains safe and pest free. Proactive risk
                management technique is used to ensure each and every place is
                through inspected, they eliminate nest in the current
                infestation and make sure that area is totally treated so that
                no issue of wasps and bees occurs in future.
              </p>
              <p className="mb-4">
                Always hire a trusted pest control company to do the eradication
                of bees and wasps, only a reliable company can solve the issue
                safely.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ResidenialSidebar />
    </div>
  );
}

const BeesMapResidential = () => {
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
export default BeesMapResidential;
