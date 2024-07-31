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
              Bees and Waps Pest Control
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
            <div>
              <img src="/bees-pest.png" />
            </div>
            <div>
              <p className="font-semibold py-8">
                Safeguard your home from Bees and Wasps
              </p>
              <p>
                 Bees and wasp can be seen unexpectedly anywhere. Out of nowhere
                they can arrive at a place with their brigade and make a hive in
                and around your home or office building. They usually settle
                around chimney vents, tree, and garden area. It is very
                difficult to get rid of them, spraying water won’t help. These
                tiny insects are usually in search of moisture and The city
                of Adelaide is the perfect home for them. Spraying water can be
                more inviting as well.
              </p>
              <p>
                Moreover, these bees and wasps are super active during the
                summer due to the hot and moist weather condition. when it bites
                anyone the sting is very painful and annoying. It can lead to
                allergic reactions and some are life threatening too. In fact,
                the tiny wasps are more aggressive in nature, once disturbed
                they can attack in a bunch and cause multiple stings.
              </p>
            </div>

            <div>
              <p className="font-semibold py-8">Prevention of Bees and Wasps</p>
              <p>
                Getting rid of bees and wasp is very difficult, you can still
                try your level best to prevent them during summer. You can keep
                a narrow water tray and add some floating corks nearby bees hub.
                The cork should be a little about the water bowl, this will make
                the bees to land safely on the cork and get in contact with
                water.
              </p>
              <p>
                The wasps enjoys the liquid sweet treat, you can place a soft
                drink can and use the same to trap them.  Never even try to
                approach a bee or wasp nest, they can be very aggressive while
                protecting their home.  Wasps generally make mud cells near a
                shaded place as their home during summers.
              </p>
              <p>
                Let them finish the larval housing, once they have left, discard
                them. All of these prevention methods are temporary, in order to
                get rid of this issue, it is always advisable to approach
                reliable pest control, Adelaide.  They make use of different
                techniques to solve the bees and wasps problem at home and
                office.
              </p>
            </div>
            <div>
              <p className="font-semibold py-8">
                Tips to prevent bees and wasps
              </p>
              <ul className="list-decimal pl-8">
                <li>
                  Discard any fallen fruit or food items from the garden area.
                </li>
                <li>
                  Never leave the uneaten pet food outside the home or near the
                  balcony.
                </li>
                <li>
                  Discard the bins and make sure to use a tight-fitting lid so
                  that insects cannot enter inside. Limit the water sources.
                </li>
                <li>
                  Always cover the food when you are out of the home, especially
                  during picnics and barbeques.
                </li>
                <li>
                  Make sure to use clean containers with straw to drink, discard
                  cans and bottles with lids.
                </li>
                <li>Keep the child and pets away.</li>
                <li>
                  Always keep the windows and door shut so that the bees and
                  wasp don’t enter your home.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold py-8">
                Signs of Bee and Wasp Infestation at Home
              </p>
              <p>
                Usually, wasp and bees make nests in wood pulp, the saliva is
                used to create a wall. These nests are founded in the shaded
                area. They make corner of walls, roof, tree, unused vehicles are
                their home.
              </p>
              <p>
                Once the nest is built, the size can increase at a very rapid
                speed, the situation gets worst in summers. It is best to
                hire Pest-Ex Adelaide during the spring season. They will
                eradicate the problem of bees and wasps completely.
              </p>
            </div>
            <div>
              <p className="font-semibold py-8">
                Bees and Wasps are attracted to
              </p>
              <ul className="list-decimal pl-8">
                <li>
                  Easily accessible raw and cooked sweet foods like fruit, soft
                  drinks, wine, water
                </li>
                <li>Open pet food.</li>
                <li> Recently mown lawn area.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold py-8">
                Bees and Wasps are attracted to
              </p>
              <p>
                The warm and moist weather of Adelaide makes it a  perfect place
                for bees and wasp to grow, survive and multiply.  Home remedies
                and prevention tips are good and workable for a short time
                duration. It is best to hire an expert like Pest-Ex Adelaide to
                undergo permanent Bee and Wasp Control, these treatments are
                totally safe for pets, family and also for the environment.
              </p>
              <p>
                The team is extremely skilled and does effective job at very
                affordable rates. They make sure the issue is dealt completely
                so that your home remains safe and pest free. Proactive risk
                management technique is used to ensure each and every place is
                through inspected, they eliminate nest in the current
                infestation and make sure that area is totally treated so that
                no issue of wasps and bees occurs in future.
              </p>
              <p>
                Always hire a trusted pest control company to do the eratication
                of  bees and wasps, only a reliable company can solve the issue
                safely.
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


const BeesMapResidential = () => {
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
export default BeesMapResidential;
