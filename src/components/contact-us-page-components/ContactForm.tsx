"use client";
import React from "react";

import { Button } from "@nextui-org/react";

const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errorMessages, setErrorMessages] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    };

    if (!formState.firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formState.lastName) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!formState.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formState.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formState.company) {
      errors.company = "Company is required";
      isValid = false;
    }

    if (!formState.message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrorMessages(errors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log(formState);
      // Send form data to the server
      // Send email
      // Clear form fields
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:w-1/2">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formState.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto"
          />
          {errorMessages.firstName && (
            <div className="text-sm text-red-500">
              {errorMessages.firstName}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formState.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto"
          />
          {errorMessages.lastName && (
            <div className="text-sm text-red-500">{errorMessages.lastName}</div>
          )}
        </div>

        <div className="space-y-2">
          <input
            // type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto"
          />
          {errorMessages.email && (
            <div className="text-sm text-red-500">{errorMessages.email}</div>
          )}
        </div>

        <div className="space-y-2">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone (Optional)"
            value={formState.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto"
          />
          {errorMessages.phone && (
            <div className="text-sm text-red-500">{errorMessages.phone}</div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company name"
          value={formState.company}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto"
        />
        {errorMessages.company && (
          <div className="text-sm text-red-500">{errorMessages.company}</div>
        )}
      </div>

      <div className="space-y-2">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formState.message}
          onChange={handleInputChange}
          rows={6}
          className="w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto"
        ></textarea>
        {errorMessages.message && (
          <div className="text-sm text-red-500">{errorMessages.message}</div>
        )}
      </div>
      <Button className="w-full px-4 py-2 text-white bg-[#3300FF] rounded-md hover:bg-[#2600CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-roboto font-semibold">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
