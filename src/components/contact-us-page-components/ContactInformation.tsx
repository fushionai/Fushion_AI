import Image from "next/image";

import assets from "@/assets";

const ContactInformation = () => {
  return (
    <div className="space-y-6 md:w-1/2">
      <h2 className="text-2xl font-semibold font-roboto">Contact info:</h2>

      <div className="space-y-4">
        <p className="text-gray-500 font-semibold font-roboto">
          For general inquiries and support, please email us at
        </p>
        <a
          href="mailto:info@fushionai.com"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Image src={assets.emailIcon} alt="Our Email" />

          <span className="text-gray-900 font-semibold font-ubuntu">
            info@fushionai.com
          </span>
        </a>
      </div>

      <div className="space-y-4">
        <p className="text-gray-500 font-semibold font-roboto">
          You can reach our customer service team by phone at
        </p>
        <a
          href="tel:+1(31)36-2036297"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Image src={assets.phoneIcon} alt="Our Phone" />

          <span className="text-gray-900 font-semibold font-ubuntu">
            + 1 (31) 36- 2036297
          </span>
        </a>
        <p className="text-sm text-gray-900 font-semibold font-roboto">
          Monday - Friday, 9:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
