import { Mail, PhoneIncoming,MapPinCheck } from "lucide-react";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS, Firebase, or a backend API to handle the form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  const contacts =[
    {name:"Salem, Tamil Nadu", icon : MapPinCheck },
    {name:"info@zeit.com", icon : Mail },
    {name:"+919865456789", icon : PhoneIncoming },
   
  ]

  return (
    <section className="h-screen bg-light-bg flex flex-col md:flex-row gap-8 md:gap-4  items-start  lg:justify-between lg:px-10 lg:py-12">
    

        <div className="w-full flex flex-col gap-8  rounded-xl shadow-xl px-4 py-6 ">
            <h1
            className="text-2xl font-primary"
            >Reach us At</h1>

            <div className="flex flex-col gap-5 ">
            {
                contacts.map(({name,icon:Icon},index)=>(

                <div
                className="flex flex-row gap-6 items-center"
                key={index}
                >
                <Icon className="w-6 h-6 text-primary-400 "/>
                <h1 className="text-light-text-secondary font-secondary" >{name}</h1>

                </div>

                ))

            }

            </div>
        </div>


      <div className="max-w-2xl w-full flex flex-col  rounded-lg shadow-lg px-4 md:py-2">
        <h2 className="text-2xl font-primary  mb-6 text-center">
          Get a quote
        </h2>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
          {/* Name */}
          <div
          
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-400 text-white rounded-lg px-4 py-2 text-lg font-medium hover:bg-primary-500 transition duration-300"
          >
            Submit
          </button>
        </form>

      </div>


    </section>
  );
};

export default Form;
