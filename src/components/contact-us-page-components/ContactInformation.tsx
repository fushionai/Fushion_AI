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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
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
