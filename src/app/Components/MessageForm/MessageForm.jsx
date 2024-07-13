const { IoIosClose } = require("react-icons/io");

function MessageForm({ handleCloseForm }) {
    return (
      <div className="w-[454px] relative z-9999">
        <div className="bg-primary-3 flex py-4 pl-[30%] justify-between pr-6">
          <div className="absolute top-[-30px] left-6">
            <img src="Message-logo.svg" alt="logo" />
          </div>
          <p className="text-white text-xl font-semibold">Have a question?</p>
          <div onClick={handleCloseForm}>
            <IoIosClose className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="bg-white px-8 py-6 rounded-sm">
          <div className="bg-neutral-9 rounded-lg p-3">
            <p>Enter your question below and we will get right back to you</p>
          </div>
          <div className="py-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-neutral-9 w-full py-4 "
            />
            <input
              type="number"
              placeholder="Mobile Phone"
              className="border-b border-neutral-9 w-full py-4"
            />
            <input
              type="text"
              placeholder="Message"
              className="border-b border-neutral-9 w-full py-4"
            />
          </div>
          <div className="flex gap-4 pb-6">
            <input type="checkbox" />
            <p className="text-neutral-7 text-sm">
              By submitting you agree to receive SMS or emails for the provided
              channel.{" "}
            </p>
          </div>
          <button className="bg-primary-3 px-6 py-2 rounded-lg text-white">
            Send
          </button>
        </div>
      </div>
    );
  }
  export default MessageForm;

  