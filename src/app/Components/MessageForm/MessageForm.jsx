import clsx from "clsx";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

function MessageForm({ handleCloseForm }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = () => {
    return formData.name && formData.phone && formData.message && agreedToTerms;
  };

  const handleSendToAPI = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setError("Please fill all fields and agree to the terms.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://graph.facebook.com/v19.0/382086344989913/messages",

        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer EAALhsZBPT9bgBO55hJ29q7DQjbhAQKOjaBHZC5T5deAg4ZACz1BT2fveZClw9I0bGBJWORvtnfZAVvV3YdrUSK8O7zlZCZCnc8O57YUsY10qCpdmr5dwjSrF20wWE62drp7wsv4pDGiZB5E8G04yoa0yZAUF74xoJewzolyZBcIrI9kJ2ALe7WlSaNeS9w32g78qRCTXJi9uu3EsZCSivVCJqAZD",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: formData.phone,
            type: "template",
            template: {
              name: "contact",
              language: {
                code: "en",
              },
              components: [
                {
                  type: "body",
                  parameters: [
                    {
                      type: "text",
                      text: formData.name,
                    },
                    {
                      type: "text",
                      text: formData.phone,
                    },
                    {
                      type: "text",
                      text: formData.message,
                    },
                  ],
                },
              ],
            },
          }),
        }
      );
      console.log(response);
      //   const response = await fetch("/api/sendMessage", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });

      //   const result = await response.json();

      //   if (response.ok) {
      //     alert("Your message has been sent successfully.");
      //     handleCloseForm();
      //   } else {
      //     setError(result.message || "Failed to send message");
      //   }
      //   console.log(formData);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[454px] relative z-9999">
      {/* Header */}
      <div className="bg-primary-3 flex py-4 pl-[30%] justify-between pr-6">
        <div className="absolute top-[-30px] left-6">
          <img src="Message-logo.svg" alt="logo" />
        </div>
        <p className="text-white text-xl font-semibold">Have a question?</p>
        <div onClick={handleCloseForm}>
          <IoIosClose className="h-8 w-8 text-white cursor-pointer" />
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSendToAPI}
        className="bg-white px-8 py-6 rounded-sm"
      >
        <div className="bg-neutral-9 rounded-lg p-3">
          <p>Enter your question below and we will get right back to you</p>
        </div>
        <div className="py-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-b border-neutral-9 w-full py-4"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Phone"
            className="border-b border-neutral-9 w-full py-4"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border-b border-neutral-9 w-full py-4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-4 pb-6">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            required
          />
          <p className="text-neutral-7 text-sm">
            By submitting you agree to receive SMS or emails for the provided
            channel.
          </p>
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          //   className="bg-primary-3 "
          className={clsx(
            "px-6 py-2 rounded-lg text-white",
            isFormValid() ? "bg-primary-3" : "bg-gray text-black"
          )}
          disabled={isLoading || !isFormValid()}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
