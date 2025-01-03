/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { localization } from "@/data/localization";
import { sendContactForm } from "@/lib/api";
import { useAppSelector } from "@/redux/hooks";
import { langSelector } from "@/redux/store";
import React from "react";
import { toast } from "react-toastify";

const ContactForm = ({ setToast }: any) => {
  const [isLoading, setIsLoading] = React.useState(false);
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

  const { language } = useAppSelector(langSelector) as { language: "en" | "nl" };

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
      errors.firstName =
        // "First Name is required"
        localization.Contact.Form.errorMessage.firstName[language];
      isValid = false;
    }

    if (!formState.lastName) {
      errors.lastName =
        // "Last Name is required"
        localization.Contact.Form.errorMessage.lastName[language];
      isValid = false;
    }

    if (!formState.email) {
      errors.email =
        // "Email is required";
        localization.Contact.Form.errorMessage.email[language];

      isValid = false;
    } else if (!emailPattern.test(formState.email)) {
      errors.email =
        // "Please enter a valid email address";
        localization.Contact.Form.errorMessage.validEmail[language];

      isValid = false;
    }

    if (!formState.company) {
      errors.company =
        // "Company is required";
        localization.Contact.Form.errorMessage.company[language];

      isValid = false;
    }

    if (!formState.message) {
      errors.message =
        // "Message is required";
        localization.Contact.Form.errorMessage.message[language];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await sendContactForm(formState);
        toast.success("Email sent successfully");
        // clear form
        setIsLoading(false);
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } catch (error) {
        toast.error("failed to send email, please try again");
        setIsLoading(false);
      }
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
            placeholder={
              localization.Contact.Form.firstNamePlaceholder[language]
            } // "First Name"
            value={formState.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
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
            placeholder={
              localization.Contact.Form.lastNamePlaceholder[language]
            } // "Last Name"
            value={formState.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
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
            placeholder={localization.Contact.Form.emailPlaceholder[language]} // "Email"
            value={formState.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
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
            placeholder={localization.Contact.Form.phonePlaceholder[language]} // "Phone (optional)"
            value={formState.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
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
          placeholder={localization.Contact.Form.companyName[language]} // "Company Name"
          value={formState.company}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
        />
        {errorMessages.company && (
          <div className="text-sm text-red-500">{errorMessages.company}</div>
        )}
      </div>

      <div className="space-y-2">
        <textarea
          id="message"
          name="message"
          placeholder={localization.Contact.Form.messagePlaceholder[language]} // "Message"
          value={formState.message}
          onChange={handleInputChange}
          rows={6}
          className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
        ></textarea>
        {errorMessages.message && (
          <div className="text-sm text-red-500">{errorMessages.message}</div>
        )}
      </div>
      <button
        type={"submit"}
        className={`w-full px-4 py-4  text-2xl font-bold text-white ${
          isLoading ? "bg-slate-300" : "bg-[#3300FF]"
        }  rounded-none ${isLoading ? "" : "hover:bg-[#2600CC]"}  font-roboto `}
        disabled={isLoading}
      >
        {/* {isLoading ? "Sending..." : "Send"} */}
        {isLoading
          ? localization.Contact.Form.sendingButton[language]
          : localization.Contact.Form.sendButton[language]}
      </button>
    </form>
  );
};

export default ContactForm;
