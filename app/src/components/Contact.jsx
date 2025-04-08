import { Element } from "react-scroll";

function Contact() {
  return (
    <Element name="contact">
      <div className="text-center p-5 md:p-8 md:text-left">
        <h1 className="text-4xl font-bold">Let's Connect!</h1>
        <p className="text-gray-500 mb-5">
          Or just reach out manually to pachojio@gmail.com
        </p>
        <form className="text-left md:grid md:grid-cols-2 md:gap-2">
          <div>
            <label className="font-bold block mb-2">Name</label>
            <input
              className="px-5 py-2 w-full border-2 border-gray-300 rounded-lg mb-2"
              placeholder="Enter your name.."
            />
          </div>

          <div>
            <label className="font-bold block mb-2">Email</label>
            <input
              className="px-5 py-2 w-full border-2 border-gray-300 rounded-lg mb-2"
              placeholder="Enter your email address.."
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-bold block mb-2">Message</label>
            <textarea
              placeholder="Enter your message here.."
              className="border-2 border-gray-300 rounded-lg mb-5 w-full p-5"
            />
            <button className="block w-full px-5 py-3 bg-blue-500 text-white rounded-full font-bold tracking-wide md:ml-auto md:w-50 cursor-pointer">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </Element>
  );
}

export default Contact;
