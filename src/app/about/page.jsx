"use client";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import MessageForm from "../Components/MessageForm/MessageForm";
import Message from "../Components/Message/Message";
import Link from "next/link";

function HeroSection (){
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleMessageClick = () => {
      setIsFormOpen(!isFormOpen);
    };
  
    const handleCloseForm = () => {
      setIsFormOpen(false);
    };
    return(
        <div className="w-full flex flex-col gap-8 items-center justify-center py-16 relative">
           <div>
           <button className=" bg-secondary-9 px-6 py-2 rounded-full"><sapn className="text-primary">Pest-SA</sapn> / About</button>
           </div>
           <div className="text-center">
           <p className="text-3xl font-bold ">‘We’re there for you until they are Gone’! We stand by our </p>
            <p className="text-3xl font-bold ">warranties, so If the pests come back - so do we.</p>
           </div>
            <div className="text-center">
            <p className="text-lg ">we have worked with each other for a long period of time. Our focus is on building friendly </p>
            <p className="text-lg ">customer based services, which always put you first.</p>
            </div>
          <div className="flex justify-center">
             <Link href="/contact">
             <button className=" bg-primary-3 text-white py-3 rounded-lg px-6">contact us</button>
             </Link>
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
    )
}

function WhoWeAre() {
    return(
        <div className="bg-neutral-10 p-[5%]">
<div className="w-full">
    <p className="text-3xl text-secondary-2 font-semibold ">Who we are</p>
    <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
    </div>
  
<div className="flex justify-between flex-col lg:flex-row">
<div className="text-lg lg:w-[45%] sm:w-full md:w-full leading-7 text-justify">
<p >Pest-SA Pest Control serves homes and business across all of Adelaide and surrounding areas, we provide real solutions for all your domestic or commercial pest control needs. Specializing in termite management and inspections. We also provide reliable pre-purchase inspections and pre-building termite management systems.</p>
<p>Our service begins with extensive pest inspections of the entire property and surrounding area. This thoroughness is key to everything we do. It helps us identify the root problems as well as allowing us to completely eliminate the infestation. We believe in treating the root cause rather than just the symptoms. We are experts in spotting both the telltale signs of pests as well as the hidden sources not easily noticed. Some pests can be almost impossible to trace. But through our methods we will discover the heart of the infestation and tackle it appropriately.</p>
<p >We are fully insured, licensed and accredited. We utilize all of the specialist equipment and materials required to tailor our services to suit your needs. As a family owned business, we have worked with each other for a long period of time. Our focus is on building friendly customer based services, which always put you first. The team’s reputation is a result of our ability to make our customers happy with the outcome, as well as the way we deliver them.</p>
<p >We use low-toxic or non-toxic materials with our treatments. This method of pest control ensures the safety of our Adelaide based customers’ children and animals. Warranties are available whenever possible to provide our guarantee of excellence. Quality and satisfaction is of utmost importance to us. Our list of testimonials are available to view to help demonstrate our commitment to every customer we work with.</p>

</div>

    <div className="flex items-center justify-start">
    <img src="/about-whoweare.png" /> 
    </div>
</div>

        </div>
    )
}

function WhyUs() {
    return(
        <div className=" p-[5%]">

  
<div className="flex justify-between flex-col lg:flex-row">
<div className="flex items-center justify-start">
    <img src="/about-whyus.png" /> 
    </div>
<div className="text-lg lg:w-[45%] sm:w-full md:w-full">
<div className="w-full">
    <p className="text-3xl text-secondary-2 font-semibold ">Why us</p>
    <div className="bg-secondary-2 h-1 w-30 mt-3 mb-6"></div>
    </div>
  <div className="leading-10 text-justify">
      <p>1. Reliable,friendly and punctual service</p>
<p>2. Highly trained and certified technician</p>
<p>3. We are Fully License and Insured</p>
<p>4. An Integrated pest management approach to pest control</p>
<p>5. Warranties on most of our servises</p>
<p>6. The Safety of our employees,customers, and the environment is always our first priority. As Certified pest control company, We take the responsibility seriously.</p>
<p>7. We strive to be on the fore-front of new technologies, techniques and products that will enable us to deliver our services in more efficient manner. The more effective and successful we'll be at managing your pest related problems.</p>
  </div>

</div>

   
</div>

        </div>
    )
}

function OurMission(){
    return(
        <div className="bg-neutral-10 p-[5%]">
      
          
        <div className="flex justify-between flex-col lg:flex-row">
            
        <div className="text-lg lg:w-[45%] sm:w-full md:w-full flex flex-col justify-center">
        <div className="w-full ">
            <p className="text-3xl text-secondary-2 font-semibold ">Our Mission</p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
            </div>
      <div>
      <p className="text-justify">To be the customer's first choice for pest control, with highly motivated and trained staff, at all times willing to deliver exceptional professional (safe,quality,punctual,friendly) service.</p>
      </div>
        
        
        </div>
        
            <div className="flex items-center justify-start">
            <img src="/about-ourmission.png" /> 
            </div>
        </div>
        
                </div>
    )
}

function OurVision() {
    return(
        <div className=" p-[5%]">

  
        <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex items-center justify-start">
            <img src="/about-ourvision.png" /> 
            </div>
        <div className="text-lg lg:w-[45%] flex flex-col justify-center">
        <div className="w-full">
            <p className="text-3xl text-secondary-2 font-semibold">Our Vision</p>
            <div className="bg-secondary-2 h-1 w-40 mt-3 mb-6"></div>
            </div>
        <div className="text-justify">
        <p>We PEST-SA ADELAIDE want to be the leader in pest control Industry for the South Australia and Beyond, by providing affordable, quality and environmentally friendly service products through professional team members</p>
        </div>
        
        </div>
        
           
        </div>
        
                </div>
    )
}
const About = () =>{
    return(
        <div>
           <div className="hidden lg:block">
        <Header />
      </div>
           <Navbar/>
           <HeroSection/>
           <WhoWeAre/>
           <WhyUs/>
           <OurMission/>
           <OurVision/>
           <ContactUs />
      <Footer />
        </div>
    )
}
export default About;