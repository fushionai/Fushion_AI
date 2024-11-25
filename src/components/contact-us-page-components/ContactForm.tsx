const ContactForm = () => {
  return (
    <form className="space-y-6 md:w-1/2">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
            className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
          />
        </div>

        <div className="space-y-2">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
            className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
          />
        </div>

        <div className="space-y-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
          />
        </div>

        <div className="space-y-2">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone (Optional)"
            className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company name"
          required
          className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
        />
      </div>

      <div className="space-y-2">
        <textarea
          id="message"
          name="message"
          required
          placeholder="Message"
          rows={6}
          className="w-full px-3 py-2 border border-gray-100 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
        ></textarea>
      </div>
      <button className="w-full px-4 py-4  text-2xl font-bold text-white bg-[#3300FF] rounded-none hover:bg-[#2600CC]  font-roboto ">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
