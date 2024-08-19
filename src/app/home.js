"use client";
import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";
import DynamicCard from "./Components/Card";
import { Rating } from "@mui/material";
import Star from "./Components/Icon/Star";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContactUs from "./Components/Contact";
import { FcGoogle } from "react-icons/fc";
import LeftArrow from "./Components/Icon/LeftArrow";
import RightArrow from "./Components/Icon/RightArrow";
import MessageForm from "./Components/MessageForm/MessageForm";
import Message from "./Components/Message/Message";

function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleMessageClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center pt-[7%] pb-12 w-full flex items-center "
        style={{ backgroundImage: `url('/homepage.png')` }}
      >
        <div className="absolute inset-0 bg-neutral opacity-40"></div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center w-full z-10">
          <div className="mx-20">
            <p className="text-title-xl md:text-[4rem] font-semibold text-white mb-4 leading-tight lg:leading-[1.3] w-full lg:w-[600px]">
              Reliable Guaranteed & Affordable Pest Control
            </p>
            <button className="bg-primary-4 text-white rounded-lg py-2 px-6">
              Read More
            </button>
          </div>
          <div className="mx-auto mt-8 xl:mt-0 xl:absolute xl:mx-0 right-16 bottom-10">
            <div className="flex-1 flex xl:justify-end relative mt-8 lg:mt-0 w-full">
              <div className="xl:w-[523px] lg:w-[800px] md:w-[600px] sm:w-[500px] w-[300px] h-[349px] rounded-lg relative lg:mx-0 mx-10">
                <div className="bg-neutral-3 absolute w-full h-[20%] top-0 rounded-lg">
                  <p className="lg:text-2xl text-xl text-white font-semibold text-center py-5">
                    Overall Rating
                  </p>
                </div>
                <div className="bg-white w-full h-[80%] opacity-85 absolute bottom-0 rounded-b-lg"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 py-12">
                  <div className="bg-white relative z-20 p-3 rounded-md mt-15 w-[70%]">
                    <p className="text-primary-2 lg:text-lg text-md text-center font-medium">
                      Call/SMS - Instant Chat Now
                    </p>
                  </div>
                  <div className="flex gap-2 z-20">
                    <IoIosCall className="h-6 w-6" />
                    <a
                      href="tel:+0477775224"
                      className="font-bold lg:text-lg text-md"
                    >
                      Call Now{" "}
                      <span className="text-primary-4 lg:text-lg text-md">
                        0477 775 224
                      </span>
                    </a>
                  </div>

                  <div className="bg-secondary-4 w-40 text-white rounded-lg flex z-20 p-2 px-6 gap-3">
                    <p className="lg:text-xl text-lg font-semibold">5</p>
                    <div className="flex items-center justify-center">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://www.google.com/search?q=your+business+name+reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold lg:text-lg text-md underline z-20"
                    >
                      Read Reviews
                    </a>
                    <FcGoogle className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      <PestControlBanner />
    </div>
  );
}

function PestControlBanner() {
  const pestServices = [
    { name: "Termites", image: "/termite.png", size: 150 },
    { name: "Spider Pest Control", image: "/spider.png", size: 60 },
    { name: "Rodents Pest Control", image: "/rat.png", size: 70 },
    { name: "Ants Pest Control", image: "/ant.png", size: 60 },
    { name: "Cockroaches Pest Control", image: "/cockroach.png", size: 60 },
    { name: "Birds Pest Control", image: "/pigeon.png", size: 60 },
    { name: "Bees and Wasps Control", image: "/bee.png", size: 60 },
    { name: "Timber pest control", image: "/cockroach.png", size: 60 },
  ];

  return (
    <div className="w-full bg-neutral mb-12 px-4 sm:px-6 lg:px-8">
      <p className="text-white text-center text-xl sm:text-2xl py-12 font-sans-serif">
        What Kind of pest control service are you looking for?
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-10 pb-12">
        {pestServices.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-full bg-white h-24 w-24 sm:h-20 sm:w-20 lg:h-[90px] lg:w-[90px] border-2 border-secondary-4 flex items-center justify-center">
              <Image
                src={service.image}
                height={service.size}
                width={service.size}
                alt={service.name}
              />
            </div>
            <p className="text-white text-center text-xs sm:text-sm mt-2">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WelcomeText() {
  return (
    <div className="flex items-center justify-center flex-col lg:px-0 px-[5%]">
      <p className="lg:text-3xl text-2xl text-secondary-2 font-semibold my-4">
        Welcome to PEST-SA Pest Control
      </p>
      <div className="bg-secondary-2 h-1 w-60"></div>
      <div className="lg:w-[70%] mt-15">
        <p className="text-center text-[1.1rem] text-neutral-4">
          Pest-SA Pest Control serves homes and businesses across all of
          Adelaide and surrounding areas. We provide real solutions for all
          domestic and Commercial Pest control needs. Specializing In Termites,
          Cockroaches and Rodents, we also provide reliable pre-purchase
          inspections and pre-building termite management systems. Our service
          begins with extensive pest inspections of the entire property and
          surrounding area. This thoroughness is key to everything we do.
        </p>
      </div>
    </div>
  );
}

function WhyPestControl() {
  return (
    <div className="h-auto py-12 w-full bg-neutral-9 rounded-lg my-15 flex flex-col lg:flex-row justify-center gap-20 px-[5%]">
      <div className="w-full h-auto">
        <p className="text-secondary-2 lg:text-3xl text-2xl font-semibold">
          WHY PEST-SA ?
        </p>
        <div className="bg-secondary-2 h-1 w-30 m-4"></div>

        <div className="text-xl flex flex-col gap-4 pt-4 text-neutral-4 text-[1.1rem]">
          <p>1. Reliable,friendly and punctual service</p>
          <p>2. Highly trained and certified technician</p>
          <p>3. We are Fully License and Insured</p>
          <p>4. An Integrated pest management approach to pest control</p>
          <p>5. Warranties on most of our servises </p>
          <p>
            6. The Safety of our employes,customers, and the environment is
            always our first priority. As Certified pest control company, We
            take the responsibility seriously.
          </p>
          <p>
            7. We strive to be on the fore-front of new technologies, techniques
            and products that will enable us to deliver our services in more
            efficient manner. The more effective and successful we&apos;ll be at
            managing your pest related problems
          </p>
        </div>
      </div>
      <div className="lg:w-[50%] mx-auto w-[90%] h-auto py-[5%] bg-primary-1 mt-2 rounded-lg flex flex-col items-center justify-center gap-8">
        <div>
          <Image
            src="/gurantee.png"
            height={100}
            width={300}
            alt="money back gurantee"
          />
        </div>
        <div className="w-[85%]">
          <p className="text-white text-center">
            If you are not satisfied with the results of PEST-SA ADELAIDE
            service, we will provide corrective service at no additional charge.
            After 28 days, should you continue to be unsatisfied, we&apos;ll
            continue to provide service at no charge until you are satisfied, or
            we will refund your last service payment
          </p>
        </div>
      </div>
    </div>
  );
}

function ServicesArea() {
  return (
    <div className="px-[7%]">
      <div className="w-full flex flex-col">
        <p className="text-secondary-2 lg:text-3xl text-2xl font-semibold">
          Services Area
        </p>
        <div className="bg-secondary-2 h-1 w-30 mt-4 mr-6"></div>
      </div>
      <div className="flex gap-20 my-8 flex-col items-center lg:flex-row">
        <DynamicCard
          title="Residential Pest Control"
          description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... "
          image="residental-pest.png"
          buttonText1="Quote"
          buttonText2="Read More"
        />

        <DynamicCard
          title="Commercial Pest Control"
          description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... 
    "
          image="commercial-pest.png"
          buttonText1="Quote"
          buttonText2="Read More"
        />

        <DynamicCard
          title="Termite Inspection"
          description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... 
    "
          image="termite-pest.png"
          buttonText1="Quote"
          buttonText2="Read More"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Coretta Dossantos",
    position: "CEO at Gigolo, Inc",
    review:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. #Creatt-Wire",
  },
  {
    name: "John Doe",
    position: "CTO at Tech Solutions",
    review:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  {
    name: "Jane Smith",
    position: "CFO at Financial Group",
    review:
      "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsToShow, setTestimonialsToShow] = useState(3);

  const maxIndex = testimonials.length - 1;

  useEffect(() => {
    const updateTestimonialsToShow = () => {
      if (window.innerWidth < 768) {
        setTestimonialsToShow(1);
      } else {
        setTestimonialsToShow(3);
      }
    };

    updateTestimonialsToShow(); // Initial check
    window.addEventListener("resize", updateTestimonialsToShow); // Update on window resize

    return () => window.removeEventListener("resize", updateTestimonialsToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsToShow > maxIndex
        ? 0
        : prevIndex + testimonialsToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - testimonialsToShow < 0
        ? maxIndex
        : prevIndex - testimonialsToShow
    );
  };

  return (
    <div className="bg-[#333333] px-[5%]">
      <p className="text-white lg:text-3xl text-2xl font-semibold pt-8">
        Testimonials
      </p>
      <div className="bg-secondary-2 h-1 w-30 mt-4 mr-6"></div>
      <div className="h-auto w-full flex flex-col justify-center p-12">
        <div className="flex gap-10 justify-center w-full items-center flex-col lg:flex-row">
          <p className="text-2xl text-white w-200 lg:px-0">
            Here&apos;s what our customers have to say...
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-stretch text-neutral-4">
            {testimonials
              .slice(currentIndex, currentIndex + testimonialsToShow)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg lg:w-[20%] flex flex-col grow justify-between p-4"
                >
                  <div className="flex justify-between ">
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p>{testimonial.position}</p>
                    </div>
                    <div className="pt-1">
                      <Image
                        src="/google.png"
                        height={40}
                        width={40}
                        alt="Google Logo"
                      />
                    </div>
                  </div>
                  <div className="py-5 flex-grow">
                    <Rating name="read-only" color="success" readOnly />
                  </div>
                  <div>
                    <p>{testimonial.review}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex gap-2 justify-center pt-10">
          <button
            className="bg-secondary-3 px-4 py-3 rounded-lg"
            onClick={handlePrev}
          >
            <LeftArrow />
          </button>
          <button
            className="bg-secondary-3 px-4 py-3 rounded-lg"
            onClick={handleNext}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <HeroSection />
      <WelcomeText />
      <WhyPestControl />
      <ServicesArea />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
