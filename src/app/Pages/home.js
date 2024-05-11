"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import DynamicCard from "../Components/Card";
import { Rating, Typography } from "@mui/material";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const navbar_items = [
    "Home",
    "About",
    "Residental",
    "Commercial",
    "Services",
    "Testimonials",
    "Blog",
    "Contact",
  ];
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white">
      <div className="bg-neutral-2 h-14 w-full flex items-center justify-between px-16">
        <div className="text-white flex gap-4 font-sans-serif">
          <div className="flex items-center gap-1">
            <IoLocationOutline className=" h-6 w-6" />
            <p>3 Limerick Street Salisbury Downs SA 5108. Australia |</p>
          </div>
          <div className="flex gap-1 items-center">
            <IoIosCall className="h-6 w-6" />
            <p>0477 775 224, 0420 348 484 |</p>
          </div>
          <div className="flex gap-1 items-center">
            <CgMail className="h-6 w-6" />
            <p>info@pestsaadelaide.com.au |</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaRegClock className="h-6 w-6" />
            <p>Mon-Fri: 8:00 AM - 16:00 PM </p>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <div className="bg-white rounded-full p-1">
            <FaFacebookF />
          </div>
          <div className="bg-white rounded-full p-1">
            <AiFillInstagram />
          </div>
          <div className="bg-white rounded-full p-1">
            <IoLogoTwitter />
          </div>
          <div className="bg-white rounded-full p-1">
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-25">
        <div>
          <Image src="/Logo.png" height={250} width={200} />
        </div>
        <div>
          <ol className="flex gap-12 text-xl font-sans-serif">
            {navbar_items.map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <li
                  onClick={() => handleItemClick(index)}
                  className={activeIndex === index ? "text-success" : ""}
                >
                  {item}
                </li>
                {activeIndex === index && (
                  <div className="bg-success w-auto h-1 rounded-lg"></div>
                )}
              </div>
            ))}
          </ol>
        </div>
      </div>
      <div
        className=" relative bg-cover bg-center h-[526px] w-full flex items-center"
        style={{ backgroundImage: `url('/homepage.png')` }}
      >
        <div className="absolute inset-0 bg-neutral opacity-40"></div>
        <div className="flex justify-between items-center w-full z-10">
          <div className="mx-20">
            <p className="text-5xl font-semibold text-white w-[520px] mb-4">
              Reliable Guaranteed & Affordable Pest Control
            </p>
            <button className="bg-primary-4 text-white rounded-lg p-2">
              Show More
            </button>
          </div>
          <div className="flex-1 flex justify-end mx-20">
            <div className="w-[523px] h-[349px] rounded-lg relative">
              <div className="bg-neutral-3 absolute w-full h-[20%]">
                <p className="text-2xl text-white font-semibold text-center py-5">
                  Overall Rating
                </p>
              </div>
              <div className="bg-white w-full h-[80%] opacity-80 absolute bottom-0">
                <div className="rounded-lg">
                  <p className="text-success">Call/SMS -Instant Chat Now</p>

                  <div className="flex">
                    <IoIosCall className="h-6 w-6" />
                    <p className="font-bold">
                      Call Now{" "}
                      <span className="text-primary-4">0477 775 224 </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral h-[230px] mb-12">
        <p className="text-white text-center text-2xl py-6 font-sans-serif">
          What Kind of pest control service are you looking for ?
        </p>
        <div className="flex items-center justify-between px-20">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white h-[90px] w-[90px] border-2 border-secondary-4">
              <Image src="/termite.png" height={150} width={150} />
            </div>
            <p className="text-white">Termites</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-full bg-white h-[90px] w-[90px] border-2 border-secondary-4 flex items-center justify-center">
              <Image src="/spider.png" height={60} width={60} />
            </div>

            <div>
              <p className="text-white">Spider Pest Control</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white h-[90px] w-[90px] border-2 border-secondary-4 flex items-center justify-center">
              <Image src="/rat.png" height={70} width={70} />
            </div>
            <p className="text-white">Rodents Pest Control </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white h-[90px] w-[90px] border-2 border-secondary-4 flex items-center justify-center">
              <Image src="/ant.png" height={60} width={60} />
            </div>
            <p className="text-white">Ants Pest Control</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white h-[90px] w-[90px] border-2 border-secondary-4 flex items-center justify-center">
              <Image src="/cockroach.png" height={60} width={60} />
            </div>
            <p className="text-white">Cockroaches Pest Control</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white h-[90px] w-[90px] border-2 border-secondary-4 flex items-center justify-center">
              <Image src="/pigeon.png" height={60} width={60} />
            </div>
            <p className="text-white">Birds Pest Conrol</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white h-[90px] w-[90px] border-2 border-secondary-4 flex items-center justify-center">
              <Image src="/bee.png" height={60} width={60} />
            </div>
            <p className="text-white">Bees and Wasps Control</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white h-[90px] w-[90px] border-2 border-secondary-4 flex items-center justify-center">
              <Image src="/cockroach.png" height={60} width={60} />
            </div>
            <p className="text-white">Timber pest control</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-3xl text-secondary-2 font-semibold my-4">
            Welcome to PEST-SA Pest Control
          </p>
          <div className="bg-secondary-2 h-1 w-60"></div>
          <div className="w-[70%] mt-15">
            <p className="text-center text-xl">
              Pest-SA Pest Control serves homes and businesses across all of
              Adelaide and surrounding areas. We provide real solutions for all
              domestic and Commercial Pest control needs. Specializing In
              Termites, Cockroaches and Rodents, we also provide reliable
              pre-purchase inspections and pre-building termite management
              systems. Our service begins with extensive pest inspections of the
              entire property and surrounding area. This thoroughness is key to
              everything we do.
            </p>
          </div>
        </div>
        <div>
          <div className="h-[722px] w-full bg-neutral-9 rounded-lg my-15 flex justify-center gap-20 items-center">
            <div className="w-[60%] h-[599px]">
              <p className="text-secondary-2 text-2xl font-semibold">
                WHY PEST-SA ?
              </p>
              <div className="bg-secondary-2 h-1 w-30 m-4"></div>

              <div className="text-xl flex flex-col gap-4 pt-4">
                <p>1. Reliable,friendly and punctual service</p>
                <p>2. Highly trained and certified technician</p>
                <p>3. We are Fully License and Insured</p>
                <p>4. An Integrated pest management approach to pest control</p>
                <p>5. Warranties on most of our servises </p>
                <p>
                  6. The Safety of our employes,customers, and the environment
                  is always our first priority. As Certified pest control
                  company, We take the responsibility seriously.
                </p>
                <p>
                  7. We strive to be on the fore-front of new technologies,
                  techniques and products that will enable us to deliver our
                  services in more efficient manner. The more effective and
                  successful we'll be at managing your pest related problems
                </p>
              </div>
            </div>
            <div className="w-[477px] h-[599px] bg-primary-1 mt-5 rounded-lg flex flex-col items-center justify-center gap-8">
              <div>
                <Image src="/gurantee.png" height={250} width={250} />
              </div>
              <div className="w-[85%]">
                <p className="text-white text-center">
                  If you are not satisfied with the results of PEST-SA ADELAIDE
                  service, we will provide corrective service at no additional
                  charge. After 28 days, should you continue to be unsatisfied,
                  we’ll continue to provide service at no charge until you are
                  satisfied, or we will refund your last service payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%]">
        <div className="w-[30%] flex flex-col">
          <p className="text-secondary-2 text-2xl font-semibold">
            Services Area
          </p>
          <div className="bg-secondary-2 h-1 w-30 mt-4 mr-6"></div>
        </div>
        <div className="flex gap-10 my-8">
          <DynamicCard
            title="Residential Pest Control"
            description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... "
            image="serviceArea.png"
            buttonText1="Quote"
            buttonText2="Show More"
          />

          <DynamicCard
            title="Commercial Pest Control"
            description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... 
        "
            image="serviceArea.png"
            buttonText1="Quote"
            buttonText2="Show More"
          />

          <DynamicCard
            title="Termite Inspection"
            description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... 
        "
            image="serviceArea.png"
            buttonText1="Quote"
            buttonText2="Show More"
          />

          <DynamicCard
            title="Termite Inspection"
            description="Pest-SA Pest Control, believe in providing a safe and effective solution to prevent pest from entering you home. As nature lovers we love all insects just as long there not... 
        "
            image="serviceArea.png"
            buttonText1="Quote"
            buttonText2="Show More"
          />
        </div>
      </div>

      <div className="bg-[#333333] px-[5%]">
        <p className="text-white text-2xl font-semibold pt-8">Testimonials</p>
        <div className="bg-secondary-2 h-1 w-30 mt-4 mr-6"></div>
        <div className="h-[527px] w-full flex flex-col justify-center">
          <div className="flex gap-10 justify-center w-full">
            <p className="text-2xl text-white w-90 self-center">
              Here’s What Our customer have to Say...
            </p>

            <div className="bg-white rounded-lg w-[20%] flex justify-between flex-col p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-lg">Coretta Dossantos</p>
                  <p>CEO at Gigolo, Inc</p>
                </div>

                <div className="pt-1">
                  <Image src="/google.png" height={40} width={40} />
                </div>
              </div>
              <div>
                <Rating name="read-only" color="success" readOnly />
              </div>
              <div>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. #Creatt-Wire
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg w-[20%] flex justify-between flex-col p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-lg">Coretta Dossantos</p>
                  <p>CEO at Gigolo, Inc</p>
                </div>

                <div className="pt-1">
                  <Image src="/google.png" height={40} width={40} />
                </div>
              </div>
              <div className="py-5">
                <Rating name="read-only" color="success" readOnly />
              </div>
              <div>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. #Creatt-Wire
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg w-[20%] flex justify-between flex-col p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-lg">Coretta Dossantos</p>
                  <p>CEO at Gigolo, Inc</p>
                </div>

                <div className="pt-1">
                  <Image src="/google.png" height={40} width={40} />
                </div>
              </div>
              <div>
                <Rating name="read-only" color="success" readOnly />
              </div>
              <div>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. #Creatt-Wire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[275px] bg-neutral-2 flex flex-col justify-center items-center gap-10">
        <p className="text-white text-4xl font-semibold">
          Don’t Hesitate to Contact us.
        </p>
        <button className="bg-primary-4 text-white p-3 rounded-lg text-xl w-50">
          {" "}
          0477 775 224{" "}
        </button>
      </div>
      <div className="h-[429px] w-full bg-black-2 flex flex-col justify-between py-[1%]">
        <div className=" flex justify-center items-center py-[2%]">
          <div className="w-[30%] flex flex-col gap-6">
            <Image src="/Logo.png" height={200} width={200} />
            <p className="text-white w-[70%]">
              Pest-SA Adelaide serves homes and businesses across all of
              Adelaide and surrounding areas, We provide real solutions for all
              Domestic and Commercial Pest control needs.
            </p>
          </div>
          <div className="text-white w-[20%]">
            <p className="text-xl font-semibold">Services</p>
            <p>Residental Pest Control</p>
            <p>Commercial Pest Control</p>
            <p>Pest Prevention</p>
          </div>
          <div className="text-white w-[20%]">
            <p className="text-xl font-semibold">Company</p>
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Reservation Conditions</p>
          </div>
          <div className="text-white w-[20%]">
            <p className="text-xl font-semibold">Reach Us</p>
            <p>0477 775 224</p>
            <p>Mon - Fri 8 Am - 4 Pm </p>
            <p>info@pestsaadelaide.com.au</p>
          </div>
        </div>
        <div className="px-[5%]">
          <div className="h-[1px] w-[100%] bg-white "></div>
      
            <div className="text-white flex items-center justify-between pt-6">
              <p>Copyright © Creatt Wire UI Kit All rights reserved</p>
              <div className="flex gap-4">
                <FaFacebookF />
                <IoLogoTwitter />
                <FaLinkedinIn />
                <FaYoutube />
                <AiFillInstagram />
              </div>
              <p>Made with Creatt by Studios</p>
            </div>
          
        </div>
      </div>
    </div>
  );
}
