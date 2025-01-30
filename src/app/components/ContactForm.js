"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const router = useRouter(); // Use Next.js router for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xzzbloay", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        router.push("/thankyou"); // Redirect using Next.js router
      } else {
        alert("There was a problem with your submission. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="contact-form"
      className="bg-white mb-20 p-8 shadow-lg rounded-lg w-[90%] sm:w-[400px] md:w-[500px]"
    >
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full">
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black text-sm py-1"
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black text-sm py-1"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email <span className="text-blue-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black text-sm py-1"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black text-sm py-1"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black text-sm py-1 resize-none"
        ></textarea>
      </div>
      <div className="mt-8 text-left">
        <button
          type="submit"
          className="bg-blue-600 text-white text-xs font-semibold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
