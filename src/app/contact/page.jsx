"use client";

import { Form, Formik } from "formik";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import InputField from "../Components/FormFiled/InputField";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import GoogleMapReact from 'google-map-react';
import Message from "../Components/Message/Message";
import MessageForm from "../Components/MessageForm/MessageForm";
import { useState } from "react";

function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleMessageClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className=" relative w-full flex flex-col gap-8 items-center justify-center py-16">
      <div>
        <button className=" bg-secondary-9 px-6 py-2 rounded-full">
          <sapn className="text-primary">Pest-SA</sapn> / Testominals
        </button>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold ">Contact Pest-SA Pest control.</p>
      </div>
      <div className="text-center">
        <p className="text-lg ">
          Great Availability, Prompt & Professional, Customer Support and Cost
          Effective{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <button className=" bg-primary-3 text-white py-3 rounded-lg px-6">
          0477775224
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

function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row w-full p-[5%] bg-white gap-12 h-auto">
      <div className="border border-neutral-9 px-6 py-8 w-full">
        <p className="text-3xl font-bold pb-6">Contact Form</p>
        <Formik
        // initialValues={initialStateforChapterTitle}
        // onSubmit={handleAddTitle}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex w-full flex-col gap-4">
                <InputField
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  label="Name"
                  errors={errors}
                  touched={touched}
                />
                <InputField
                  placeholder="Enter your email"
                  type="text"
                  name="email"
                  label="Email"
                  errors={errors}
                  touched={touched}
                  className="rounded-lg border border-primary p-2 active:border-none"
                />
                <InputField
                  placeholder="Enter Phone Number"
                  type="number"
                  name="phoneNumber"
                  label="Phone Number"
                  errors={errors}
                  touched={touched}
                  className="rounded-lg border border-primary p-2 active:border-none"
                />
                <InputField
                  placeholder="Enter subject"
                  type="text"
                  name="subject"
                  label="Subject"
                  errors={errors}
                  touched={touched}
                  className="rounded-lg border border-primary p-2 active:border-none"
                />
                <InputField
                  placeholder="Enter message"
                  type="text"
                  name="message"
                  label="Message"
                  errors={errors}
                  touched={touched}
                  className="rounded-lg border border-primary p-2 active:border-none"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <button className="bg-primary-3 py-2 px-6 rounded-lg text-white">Send</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="border w-full border-neutral-9 px-6 py-8 ">
        <p className="text-3xl font-bold pb-6">Connect with us</p>
        <div className="leading-8 text-neutral-5">
          <p>5 Limerick Street Salisbury Fowns SA5108. Australia</p>
          <p>0477775224, 0420348484</p>
          <p>info@pestsaadelaide.com.au</p>
          <p>Mon-Sat: 7:00 AM - 18:00 PM</p>
        </div>
      </div>
    </div>
  );
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  return (
    <div>
       <div className="hidden lg:block">
        <Header />
      </div>
      <Navbar />
      <HeroSection />
      <ContactForm />
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
          defaultCenter={{ lat: 27.7172, lng: 85.3240 }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={27.7172}
            lng={85.3240}
            text="Kathmandu, Nepal"
          />
        </GoogleMapReact>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Contact;
