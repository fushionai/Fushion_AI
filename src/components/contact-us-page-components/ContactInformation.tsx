"use client";
import Image from "next/image";

import assets from "@/assets";
import { localization } from "@/data/localization";
import { useAppSelector } from "@/redux/hooks";
import { langSelector } from "@/redux/store";

const ContactInformation = () => {
  const { language } = useAppSelector(langSelector) as { language: "en" | "nl" };

  return (
    <div className="space-y-6 md:w-1/2">
      <h2 className="text-2xl font-semibold font-roboto text-darkBlue">
        {/* Contact info: */}
        {localization.Contact.ContactInfo.title[language]}
      </h2>

      <div className="space-y-4">
        <p className="text-secondaryGray font-semibold font-roboto">
          {/* For general inquiries and support, please email us at */}
          {localization.Contact.ContactInfo.description[language]}
        </p>
        <a
          href="mailto:info@fushionai.com"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Image src={assets.emailIcon} alt="Our Email" />

          <span className="text-darkBlue font-semibold font-ubuntu">
            info@fushionai.com
          </span>
        </a>
      </div>

      <div className="space-y-4">
        <p className="text-secondaryGray font-semibold font-roboto">
          {/* You can reach our customer service via WhatsApp */}
          {localization.Contact.ContactInfo.emailLabel[language]}
        </p>
        <a className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
          <Image src={assets.phoneIcon} alt="Our Phone" />

          <span className="text-darkBlue font-semibold font-ubuntu">
            + 1 (31) 36- 2036297
          </span>
        </a>
        <p className="text-sm text-darkBlue font-semibold font-roboto">
          {/* Monday - Friday, 9:00 AM - 6:00 PM */}
          {localization.Contact.ContactInfo.workingHours[language]}
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
