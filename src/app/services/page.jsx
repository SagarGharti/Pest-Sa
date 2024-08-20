/* eslint-disable @next/next/no-img-element */
"use client";
import DynamicCard from "../Components/Card";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Message from "../Components/Message/Message";
import MessageForm from "../Components/MessageForm/MessageForm";
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
    <div className="relative w-full flex flex-col gap-8 items-center justify-center py-16 text-neutral-4 px-10">
      <div>
        <button className=" bg-secondary-9 px-6 py-2 rounded-full">
          <sapn className="text-black">Pest-SA</sapn> / Services
        </button>
      </div>
      <div className="text-center">
        <p className="text-title-sm xl:text-3xl font-bold text-black">
          Pest-SA services where quality meets commitment.
        </p>
      </div>
      <div className="text-center text-black">
        <p className="text-lg ">
          we have worked with each other for a long period of time. Our focus is
          on building friendly{" "}
        </p>
        <p className="text-lg ">
          customer based services, which always put you first.
        </p>
      </div>
      <div className="flex justify-center">
      <Link href="/contact">
          <button className=" bg-primary-3 text-white py-3 rounded-lg px-6">
            Contact us
          </button>
        </Link>
      </div>
      <div className="absolute bottom-[-30px] right-8 transform -translate-x-1/2 z-20">
        <div className="relative" onClick={handleMessageClick}>
          <Message />
        </div>
      </div>
      {isFormOpen && (
        <div className="absolute bottom-[2.4rem] xl:right-15 cursor-pointer">
          <MessageForm handleCloseForm={handleCloseForm} />
        </div>
      )}
    </div>
  );
}

function ServicesArea() {
  return (
    <div className="px-[10%] bg-white py-[5%]">
      <div className="w-[30%] flex flex-col">
        <p className="text-secondary-2 text-2xl font-semibold">Services Area</p>
        <div className="bg-secondary-2 h-1 w-30 mt-4 mr-6"></div>
      </div>
      <div className="flex gap-20 my-8 flex-col items-center lg:flex-row">
        <DynamicCard
          title="Residential Pest Control"
          description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... "
          image="residental-pest.png"
          buttonText1="Quote"
          buttonText2="Read More"
          link="/residential"
        />

        <DynamicCard
          title="Commercial Pest Control"
          description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... 
    "
          image="commercial-pest.png"
          buttonText1="Quote"
          buttonText2="Read More"
          link="/commercial-residential"
        />

        <DynamicCard
          title="Termite Inspection"
          description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... 
    "
          image="termite-pest.png"
          buttonText1="Quote"
          buttonText2="Read More"
          link="/termite-inspection-residential"
        />
      </div>
    </div>
  );
}

function PestControlServices() {
  return (
    <div className="px-[10%] py-[5%] text-neutral-4 bg-[#EDEEF0]">
      <div className="w-full flex flex-col items-center">
        <p className="text-secondary-2 text-2xl font-semibold">
          Pest Control Services
        </p>
        <div className="bg-secondary-2 h-1 w-30 mt-4 mr-6"></div>
      </div>
      <div className="flex justify-center gap-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <Link href="/termite-inspection-residential">
         <div className="flex gap-6 items-center">
            <div className="bg-white flex justify-center items-center rounded-lg flex-shrink-0">
              <img src="/termite_square.png" alt="termite" />
            </div>
            <div>
              <p className="text-lg font-bold">Termites Pest Control</p>
              <p>
                Adelaide is a place when you can find a huge number of
                destructive termites.
              </p>
            </div>
          </div>
         </Link>
        <Link href="/ants-residential">
        <div className="flex gap-6 items-center">
            <div className="flex justify-center items-center rounded-lg flex-shrink-0">
              <img src="/ants_square.png" alt="ant" />
            </div>
            <div>
              <p className="text-lg font-bold">Ants Pest Control</p>
              <p>
                Ants in and around the home can make anyone extremely
                frustrated. There are many species of ants which can conta
              </p>
            </div>
          </div>
        </Link>
      <Link href="/bees-maps-residential">
      <div className="flex gap-6 items-center">
            <div className=" flex justify-center items-center w-40 h-30 rounded-lg flex-shrink-0">
              <img src="/bees_sqaure.png" alt="bee" />
            </div>
            <div>
              <p className="text-lg font-bold">Bees and Wasps Control</p>
              <p>
                Bees and wasp can be seen unexpectedly anywhere. Out of nowhere
                they can.
              </p>
            </div>
          </div>
      </Link>
       <Link href="/spider-pest-residential">
       <div className="flex gap-6 items-center">
            <div className="flex justify-center items-center rounded-lg flex-shrink-0">
              <img src="/spider_square.png" alt="spider" />
            </div>
            <div>
              <p className="text-lg font-bold">Spider Pest Control</p>
              <p>
                Spiders are the creepiest creatures which can be commonly found
                in buildings
              </p>
            </div>
          </div>
       </Link>
        <Link href="pest-sa-cockroaches-residential">
        <div className="flex gap-6 items-center">
            <div className="flex justify-center items-center rounded-lg flex-shrink-0">
              <img src="/cockroaches_square.png" alt="cockroach" />
            </div>
            <div>
              <p className="text-lg font-bold">Cockroaches Pest Control</p>
              <p>
                PEST-SA control Cockroaches. The American cockroaches is 1.5
                inches long
              </p>
            </div>
          </div>
        </Link>
         <Link href="/timber-residential">
         <div className="flex gap-6 items-center">
            <div className="flex justify-center items-center rounded-lg flex-shrink-0">
              <img src="/timber_square.png" alt="timber" />
            </div>
            <div>
              <p className="text-lg font-bold">Timber Pest Control</p>
              <p>
                Timber pest control is to check the condition of the home before
                you plan to invest in it.
              </p>
            </div>
          </div>
         </Link>
       <Link href="/rodent-pest-residential">
       <div className="flex gap-6 items-center">
            <div className="flex justify-center items-center rounded-lg flex-shrink-0">
              <img src="/rodents_square.png" alt="rodents" />
            </div>
            <div>
              <p className="text-lg font-bold">Rodents Pest Control</p>
              <p>
                Rats are not only creepy but can also cause a lot of damage. The
                teeth of rodents continue to.
              </p>
            </div>
          </div>
       </Link>
       <Link href="/birds-pest-residential">
       <div className="flex gap-6 items-center">
            <div className="flex justify-center items-center rounded-lg flex-shrink-0">
              <img src="/birds_square.png" alt="birds" />
            </div>
            <div>
              <p className="text-lg font-bold">Birds Pest Control</p>
              <p>
                The birds species can be really annoying for anyone at home or
                office, some species can
              </p>
            </div>
          </div>
       </Link>
        </div>
      </div>
    </div>
  );
}

const Services = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <ServicesArea />
      <PestControlServices />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Services;
