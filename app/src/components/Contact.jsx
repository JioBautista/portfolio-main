import React from "react";
import { Element } from "react-scroll";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "68d06cb0-d9e6-42d2-ab1c-f07f009ff408");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      event.target.reset();
      console.log(data.message);
    } else {
      console.log("Error", data);
    }
  };
  return (
    <Element name="contact">
      <div className="text-center p-5 md:p-8 md:text-left">
        <h1 className="text-4xl font-bold">Let's Connect!</h1>
        <p className="text-gray-500 mb-5">
          Or just reach out manually to pachojio@gmail.com
        </p>
        <form
          className="text-left md:grid md:grid-cols-2 md:gap-2"
          onSubmit={onSubmit}
        >
          <div>
            <label className="font-bold block mb-2">Name</label>
            <input
              className="px-5 py-2 w-full border-2 border-gray-300 rounded-lg mb-2"
              placeholder="Enter your name.."
              type="text"
              name="name"
              required
            />
          </div>

          <div>
            <label className="font-bold block mb-2">Email</label>
            <input
              className="px-5 py-2 w-full border-2 border-gray-300 rounded-lg mb-2"
              placeholder="Enter your email address.."
              type="email"
              name="email"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-bold block mb-2">Message</label>
            <textarea
              placeholder="Enter your message here.."
              className="border-2 border-gray-300 rounded-lg mb-5 w-full p-5"
              name="message"
              required
            />
            <button
              className="block w-full px-5 py-3 bg-blue-500 text-white rounded-full font-bold tracking-wide md:ml-auto md:w-50 cursor-pointer"
              type="submit"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </Element>
  );
}

export default Contact;
