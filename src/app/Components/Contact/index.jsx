function ContactUs() {
    return (
      <div className="w-full py-[5%] bg-neutral-2 flex flex-col justify-center items-center gap-4">
        <p className="text-white text-4xl font-semibold">
        Are you ready to take a services ?
        </p>
        <p className="text-white text-xl">Don’t hesitate to contact us.</p>

       <div className="flex gap-6 py-8">
       <button className="border border-primary-3 text-white p-3 rounded-lg text-xl w-40">
         Live Demo
        </button>
        <button className="bg-primary-4 text-white p-3 rounded-lg text-xl w-50">
          {" "}
          0477 775 224{" "}
        </button>
       </div>
      </div>
    );
  }
  export default ContactUs;