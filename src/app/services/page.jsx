"use client";

import DynamicCard from "../Components/Card";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";


function HeroSection() {
    return (
      <div className="w-full flex flex-col gap-8 items-center justify-center py-16">
        <div>
          <button className=" bg-secondary-9 px-6 py-2 rounded-full">
            <sapn className="text-primary">Pest-SA</sapn> / Services
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
          <button className=" bg-primary-3 text-white py-3 rounded-full px-6">
            contact us
          </button>
        </div>
      </div>
    );
  }

  function ServicesArea() {
    return (
      <div className="px-[5%] bg-white py-[5%]">
        <div className="w-[30%] flex flex-col">
          <p className="text-secondary-2 text-2xl font-semibold">Services Area</p>
          <div className="bg-secondary-2 h-1 w-30 mt-4 mr-6"></div>
        </div>
        <div className="flex gap-10 my-8 flex-col lg:flex-row">
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
    );
  }

  function PestControlServices (){
    return(
      <div className="px-[10%] py-[5%]">
        <div className="w-full flex flex-col items-center">
          <p className="text-secondary-2 text-2xl font-semibold">Pest Control Services</p>
          <div className="bg-secondary-2 h-1 w-30 mt-4 mr-6"></div>
        </div>
      <div className="flex w-full pt-12 gap-6">
      <div className="flex flex-col gap-6" > 
          <div className="flex gap-6 items-center">
           <div className="bg-white flex justify-center items-center w-40 h-30 rounded-lg">
           <img src="/termite.png" />
           </div>
           <div >
           <p className="text-lg font-bold">Termites Pest Control</p>
            <p>Adelaide is a place when you can find a huge number of destructive termites.</p>
           </div>
          </div>
          <div className="flex gap-6 items-center">
           <div className="bg-white flex justify-center items-center w-60 h-30 rounded-lg">
           <img src="/ant.png" />
           </div>
           <div >
           <p className="text-lg font-bold">Ants Pest Control</p>
            <p>Ants in and around the home can make anyone extremely frustrated. There are many species of ants which can conta</p>
           </div>
          </div>
          <div className="flex gap-6 items-center">
           <div className="bg-white  flex justify-center items-center  w-40 h-30 rounded-lg">
           <img src="/bee.png" />
           </div>
           <div >
           <p className="text-lg font-bold">Bees and Wasps Control</p>
            <p>Bees and wasp can be seen unexpectedly anywhere. Out of nowhere they can.</p>
           </div>
          </div>
          
          </div>
         <div className="flex flex-col gap-6">
         
          <div className="flex gap-6 items-center">
           <div className="bg-white flex justify-center items-center w-60 h-30 rounded-lg">
           <img src="/spider.png"/>
           </div>
           <div >
           <p className="text-lg font-bold">Spider Pest Controll</p>
            <p>Spiders are the creepiest creatures which can be commonly found in buildings</p>
           </div>
          </div>
          <div className="flex gap-6 items-center">
           <div className="bg-white flex justify-center items-center w-60 h-30 rounded-lg">
           <img src="/cockroach.png"/>
           </div>
           <div >
           <p className="text-lg font-bold">Cockroaches Pest Control</p>
            <p>PEST-SA control Cockroaches. The American cockroaches is 1.5 inches long</p>
           </div>
          </div>
          <div className="flex gap-6 items-center">
           <div className="bg-white h-30 w-60 flex justify-center items-center rounded-lg">
           <img src="/cockroach.png"/>
           </div>
           <div >
           <p className="text-lg font-bold">Timber Pest Control</p>
            <p>Timber pest control is to check the condition of the home before you plan to invest in it.</p>
           </div>
          </div>
          
          </div>
         
          <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-center">
           <div className="bg-white h-30 w-60 flex justify-center items-center rounded-lg">
           <img src="/rat.png"/>
           </div>
           <div>
           <p className="text-lg font-bold">Rodents Pest Control</p>
            <p>Rats are not only creepy but can also cause a lot of damage .The teeth of rodents continue to.</p>
           </div>
          </div>
          <div className="flex gap-6 items-center">
           <div className="bg-white h-30 w-60 flex justify-center items-center rounded-lg">
           <img src="/pigeon.png"/>
           </div>
           <div >
           <p className="text-lg font-bold">Birds Pest Control</p>
            <p>The birds species can be really annoying for anyone at home or office, some species can</p>
           </div>
          </div>
          {/* <div className="flex gap-6 items-center">
           <div className="bg-white h-30 w-30 flex justify-center items-center">
           <img src="/termite.png" className="h-20 w-20"/>
           </div>
           <div >
           <p className="text-lg font-bold">Termites Pest Control</p>
            <p>Adelaide is a place when you can find a huge number of destructive termites.</p>
           </div>
          </div> */}
          
          </div>

      </div>
      </div>
    )
  }
const Services = () =>{
    return(
        <div>
        <Header/>
        <Navbar/>
        <HeroSection/>
        <ServicesArea/>
        <PestControlServices/>
        <ContactUs />
      <Footer />
     </div>
    )
}
export default Services;