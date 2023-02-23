import React, { useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

type Props = {};

const initialData={
  name:"",
  email:"",
  subject:"",
  message:""
}

const ContactMe = (props: Props) => {
  const [formData,setFormData]=useState(initialData)
 

  const handleChange=(e:any)=>{
  let {name,value}=e.target 
  setFormData((prev)=>({...prev,[name]:value}))
  }

  const {name,email,subject,message}=formData

  const handleSubmit=(e:any)=>{
      e.preventDefault()
      window.location.href=`mailto:sakilahmed965@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
      
  }

  

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-slate-500 text-2xl">
        contact
      </h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center">
          I have just what you need.{" "}
          <span className="decoration-[yellow] underline">Lets Talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-yellow-700 animate-pulse" />
            <p className="text-2xl">+91-8967834909</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-yellow-700 animate-pulse" />
            <p className="text-2xl">sakilahmed965@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-yellow-700 animate-pulse" />
            <p className="text-2xl">Kolkata, Westbengal, India</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit}>
          <div className="space-x-2">
            <input placeholder="Name" value={name} className="contactInput" type="text" name="name" onChange={handleChange}/>
            <input
              placeholder="Email"
              type="email"
              className="contactInput"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" onChange={handleChange} value={subject} name="subject"/>
          <textarea placeholder="Message" className="contactInput" onChange={handleChange} value={message} name="message"/>
         
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
