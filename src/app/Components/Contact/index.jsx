/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import MessageForm from "../MessageForm/MessageForm";

function ContactUs() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleMessageClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="w-full py-20 bg-neutral-2 flex flex-col justify-center items-center gap-4">
      <div>
        <p className="text-white text-4xl font-semibold text-center">
          Are you ready to take a services?
        </p>
        <div className="flex flex-wrap justify-center gap-4 py-8 text-neutral-4 mx-10">
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 px-4 grow xl:grow-0">
            <img src="/termite.png" className="h-8 w-8" alt="termite" />
            <button>Spider Pest Control</button>
          </div>
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 px-4 grow lg:grow-0">
            <img src="/termite.png" className="h-8 w-8" alt="termite" />
            <button>Rodents Pest Control</button>
          </div>
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 px-4 grow lg:grow-0">
            <img src="/termite.png" className="h-8 w-8" alt="termite" />
            <button>Ants Pest Control</button>
          </div>
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 px-4 grow lg:grow-0">
            <img src="/termite.png" className="h-8 w-8" alt="termite" />
            <button>Spider Pest Control</button>
          </div>
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 px-4 grow lg:grow-0">
            <img src="/termite.png" className="h-8 w-8" alt="termite" />
            <button>Spider Pest Control</button>
          </div>
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 px-4 grow lg:grow-0">
            <img src="/termite.png" className="h-8 w-8" alt="termite" />
            <button>Spider Pest Control</button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <div className="relative">
          <img
            src="/greenMessageIcon.svg"
            onClick={handleMessageClick}
            alt="message icon"
            className="cursor-pointer"
          />
          {isFormOpen && (
            <div className="absolute bottom-[2.4rem] -left-16 xl:right-15">
              <MessageForm handleCloseForm={handleCloseForm} />
            </div>
          )}
        </div>
        <p>Or</p>
        <div>
          <button className="bg-primary-4 text-white p-3 rounded-lg text-xl">
            <div className="flex gap-2 items-center justify-center">
              <img src="/solar_phone-bold.svg" alt="phone icon" />
              <a href="tel:0477 775 224">Call now</a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
