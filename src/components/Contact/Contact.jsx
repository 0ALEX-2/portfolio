import React, { useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import {motion} from "framer-motion"

const initialData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { name, email, subject, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:sakilahmed965@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className=" pt-[100px] relative flex flex-col text-center px-10 justify-evenly mx-auto items-center pb-24">
      <h3 className=" top-24 uppercase tracking-[20px] text-slate-500 text-2xl">
        contact
      </h3>

      <div className="flex flex-col space-y-10 mt-20">
        <h4 className="text-4xl font-semibold text-center">
          I have just what you need,{" "}
          <span className="text-blue-400">Lets Talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-blue-700 animate-pulse" />
            <p className="text-2xl">+91-8967834909</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-blue-700 animate-pulse" />
            <p className="text-2xl">sakilahmed965@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-blue-700 animate-pulse" />
            <p className="text-2xl">Kolkata, Westbengal, India</p>
          </div>
        </div>

        <form
          className="flex flex-col  space-y-2 w-full mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="md:space-x-2  flex flex-col md:flex-row ">
            <input
              placeholder="Name"
              value={name}
              className="contactInput md:w-1/2 text-2xl mb-3 md:mb-0"
              type="text"
              name="name"
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              type="email"
              className="contactInput md:w-1/2 text-2xl"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput text-2xl"
            type="text"
            onChange={handleChange}
            value={subject}
            name="subject"
          />
          <textarea
            placeholder="Message"
            className="contactInput text-2xl"
            onChange={handleChange}
            value={message}
            name="message"
          />

          <motion.button
            type="submit"
            className="bg-blue-500 py-3 px-10 rounded-md font-bold text-3xl text-white"
            whileTap={{scale:0.6}}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
