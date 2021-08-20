import React from "react";
import emailjs from "emailjs-com";
import { Input, TextArea } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_qabfs9j";
const TEMPLATE_ID = "template_cqvwfe8";
const USER_ID = "user_5TQfYXjk2s5wf6PRM0Vwg";

export default function ContactSection() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    event.target.reset();
  };

  return (
    <>
      {" "}
      <section
        id="contact-section"
        className="text-gray-600 body-font relative"
      >
        {" "}
        <form
          className="container px-5 py-24 mx-auto flex"
          onSubmit={handleOnSubmit}
        >
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19473.67399598583!2d10.214749373502187!3d59.13377487630202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646c090553a802b%3A0xc35b51a25c3ce1a2!2sSandefjord!5e0!3m2!1sno!2sno!4v1624869469571!5m2!1sno!2sno"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Send en melding
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Jeg vil svare så fort som mulig
            </p>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                control={Input}
                name="reply_to"
                placeholder="Email…"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-4">
              <input
                control={Input}
                name="from_name"
                placeholder="Navn..."
                required
                type="text"
                id="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-4">
              <textarea
                control={TextArea}
                name="message"
                placeholder="Melding..."
                required
                id="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Send
            </button>
          </div>
        </form>
      </section>{" "}
    </>
  );
}
