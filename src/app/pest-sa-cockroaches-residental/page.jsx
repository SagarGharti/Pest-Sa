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
        Pest-SA Cockroaches
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
          <div className="absolute top-0 right-0 bg-primary-5 text-white rounded-full h-5 w-5 flex items-center justify-center">
            <p className="text-xs">1</p>
          </div>
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

  return (
    <div className="bg-neutral-10 p-[5%] flex">
      <div className="w-full flex-col flex gap-8">
        <div className="text-lg lg:w-[80%] sm:w-full md:w-full leading-7 text-justify">
          <div className="w-full">
            <p className="text-3xl text-secondary-2 font-semibold">
              Pest-SA Cockroaches{" "}
            </p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
          </div>
          <p className="italic font-semibold underline underline-offset-1 pb-8">
            American Cockroach:
          </p>
          <p>
            PEST-SA Pest control Cockroaches. The American cockroach is 1.5
            inches long, making them the largest of the house-infesting
            cockroaches. The American cockroach generally live in moist areas,
            but they can survive in dry areas if they have access to water.
            American cockroaches prefer warm temperatures. In residential areas,
            these cockroaches live in basements, around pipes and sewers, and
            may move outdoors into yards during warm weather. These cockroaches
            can be found in basements, crawl spaces and foundations. If you have
            any issue with cockroaches don’t hesitate to contact an expert now.
          </p>
          <p className="italic font-semibold underline underline-offset-1 py-8">
            Cockroach Life Cycle:
          </p>
          <p>
            Nymphs hatch from egg cases that the adult female cockroach
            deposits. As the nymph grows, it sheds its “skin” or exoskeleton so
            it can get larger. Each nymphal stage is larger than the previous
            one, and an adult cockroach emerges after the last nymphal stage.
            The figure shows a simplified image of the life cycle (egg stage,
            nymph stage and adult stage) of the German cockroach.
          </p>
          <p>American Cockroach</p>
          <p>Oriental Cockroach</p>
          <p>Oriental Cockroach</p>
          <p>Cockroach (Feeding) Habits</p>
          <p>
            The cockroaches normally encountered by humans in his dwellings and
            food establishments are the German cockroach, Blattella germanica
            (L.), the American cockroach, Periplaneta americana (L.), and the
            Oriental cockroach, Balta orientalist (L.). Each of these
            cockroaches undergoes a life cycle involving an egg capsule, a
            series of nymphs, and an adult.
          </p>
          <p className="italic font-semibold underline underline-offset-1 py-8">
            German Cockroach
          </p>
          <p>
            With the exception of the female Oriental cockroach, the adults of
            these three cockroaches have well-developed wings. However, they
            almost never fly; movement by both the adults and the wingless
            nymphs is by walking or rapid running. These three cockroaches can
            be distinguished by color and size. Adult German cockroaches are tan
            to medium brown in color and fairly small in size (10-15 mm). Adult
            American cockroaches are reddish brown in color and large in size
            (35-40 mm). Adult Oriental cockroaches are fairly large in size
            (26-30 mm) and are shiny, dark brown or black in color. Cockroaches
            require food, water, and places to hide and are, therefore, found in
            situations where these requirements can be met. They are nocturnal,
            remaining hidden during the day and becoming active at night to
            obtain food and water, and to reproduce. The German cockroach
            commonly occurs in kitchens; the American cockroach appears more
            often in food establishments; and the Oriental cockroach is usually
            associated with dampness around sinks or in basements. Cockroaches
            are not normally encountered by man unless their populations become
            very large. Cockroaches will eat almost anything: left-over human
            food, wood, leather, cigarette butts, toothpaste, milk, sugary
            materials, coffee grinds, glue, soap, feces, fabric, shoes, paint,
            the glue on the back of wallpaper, human hair, fingernails, etc
          </p>
          <p className="italic font-semibold underline underline-offset-1 py-8">
            Cockroach Facts
          </p>
          <p>
            Fact: The German cockroach is the most common house-infesting
            cockroach and the number one pest in Adelaide.
            <p>
              Fact: The cockroach can live without its head for an entire week.
            </p>
            <p>
              Fact: The word cockroach comes from the Spanish word “Cucaracha”
              which means “crazy bug”.
            </p>
            <p>
              Fact: There are about 4,000 different species of cockroaches in
              the world. About 30-50 species live in Australia.
            </p>
            <p>
              Fact: The world’s largest roach lives in South America and is 6
              inches long with a one-foot wingspan.
            </p>
            <p>
              Fact: Cockroaches will eat almost anything: left-over human food,
              paper, wood, leather, cigarette butts, toothpaste, coffee grinds,
              glue, soap, feces, fabric, shoes, paint, the glue on the back of
              wallpaper, human hair, fingernails, etc
            </p>
            <p>
              Fact: German cockroaches are very small. They can squeeze through
              a crack that is about 1/16th of an inch wide.
            </p>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-[20%]">
        <div className="rounded-lg p-6 shadow-lg">
          <p className="text-xl">Services Area</p>
          <div className="bg-black h-1 w-35 mt-3 mb-7"></div>
          <div className="flex flex-col gap-6">
            {serviceAreaLinks.map((item, index) => (
              <Link href={item.href} key={index}>
                <button className="shadow-md py-3 rounded-lg border border-neutral-9 w-full">
                  {item.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className="shadow-lg rounded-lg p-6 flex flex-col">
          <p className="text-xl">Pest Control Services</p>
          <div className="bg-black h-1 w-50 mt-3 mb-7"></div>
          <div className="flex flex-col gap-6">
            {pestControlServicesLinks.map((item, index) => (
              <Link href={item.href} key={index}>
                <button className="shadow-md p-3 rounded-lg border border-neutral-9 w-full">
                  {item.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



const PestSaCockroaches = () => {
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
export default PestSaCockroaches;
