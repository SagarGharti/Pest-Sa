"use client";

import * as Yup from "yup";
import { Form, Formik } from "formik";
import ContactUs from "../Components/Contact";
import Footer from "../Components/Footer";
import InputField from "../Components/FormFiled/InputField";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import GoogleMapReact from "google-map-react";
import Message from "../Components/Message/Message";
import MessageForm from "../Components/MessageForm/MessageForm";
import { useMemo, useState } from "react";
import Loader from "../Components/Loader/Loader";

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  phoneNumber: Yup.number().required("phone Number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

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
        <a
          href="tel:0477775224"
          className="bg-primary-3 text-white py-3 rounded-lg px-6 inline-block no-underline hover:bg-primary-4 transition-colors duration-300"
        >
          0477775224
        </a>
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

function ContactForm() {
  const initialState = useMemo(
    () => ({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    }),
    []
  );

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted successfully", values);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-full p-[5%] bg-white gap-12 h-auto">
      <div className="border border-neutral-9 px-6 py-8 w-full">
        <p className="text-3xl font-bold pb-6">Contact Form</p>
        <Formik
          initialValues={initialState}
          onSubmit={handleSubmit}
          validationSchema={FORM_VALIDATION}
        >
          {({ errors, touched, isSubmitting, isValid }) => (
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
                  className="rounded-lg  p-2 "
                />
                <InputField
                  placeholder="Enter Phone Number"
                  type="number"
                  name="phoneNumber"
                  label="Phone Number"
                  errors={errors}
                  touched={touched}
                  className="rounded-lg  p-2 "
                />
                <InputField
                  placeholder="Enter subject"
                  type="text"
                  name="subject"
                  label="Subject"
                  errors={errors}
                  touched={touched}
                  className="rounded-lg p-2 "
                />
                <InputField
                  placeholder="Enter message"
                  type="text"
                  name="message"
                  label="Message"
                  errors={errors}
                  touched={touched}
                  className="rounded-lg p-2 "
                />
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  type="submit"
                  className="bg-primary-3 py-2 px-6 rounded-lg text-white flex items-center justify-center gap-3"
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting && <Loader />}
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
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

const MapMarker = ({ text }) => (
  <div className="relative">
    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-white rounded-full cursor-pointer hover:z-10">
      <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs py-1 px-2 rounded shadow">
        {text}
      </span>
    </div>
  </div>
);

const Contact = () => {
  const mapProps = {
    center: {
      lat: -34.9285, // Adelaide, Australia coordinates
      lng: 138.6007,
    },
    zoom: 11,
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Header />
      </div>
      <Navbar />
      <HeroSection />
      <ContactForm />
      <div className="h-[50vh] w-full">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          }}
          defaultCenter={mapProps.center}
          defaultZoom={mapProps.zoom}
        >
          <MapMarker lat={-34.9285} lng={138.6007} text="Adelaide, Australia" />
        </GoogleMapReact>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
