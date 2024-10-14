import { Button } from "@nextui-org/react";
import Image from "next/image";

import assets from "@/assets/index";

const ContactSection = () => {
  return (
    <section className="py-[48px] px-[143px] max-[890px]:px-6 bg-darkBlue">
      <main className="flex flex-wrap items-center justify-center gap-10">
        <section className="bg-blueGr p-8 py-20 max-sm:py-10 max-sm:px-8">
          <h4 className="font-ubuntu font-medium text-[24px] leading-[36px] text-primaryWhite">
            Contact info:
          </h4>
          <p className="mt-8 font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite">
            For general inquiries and support, please email us at
          </p>

          <div className="mt-4 flex items-center gap-[14px]">
            <Image src={assets.email} alt="Email" />
            <h4 className="font-ubuntu font-medium text-[24px] leading-[36px] text-primaryWhite ">
              info@fushionai.com
            </h4>
          </div>

          <p className="mt-6 font-roboto font-normal text-[20px] leading-[36px] text-primaryWhite ">
            Monday - Friday, 9:00 AM - 6:00 PM
          </p>
        </section>

        <section className="flex  flex-col gap-6">
          <div className="flex max-md:flex-col justify-center items-center gap-12 max-[890px]:gap-[24px]">
            <input
              placeholder="First name"
              className="bg-transparent text-primaryWhite   placeholder:bg-transparent focus:outline-none placeholder:text-slate-400 rounded-none border border-primaryWhite p-3 placeholder:font-roboto placeholder:text-[20px] font-roboto text-[20px] max-md:w-full"
            />
            <input
              placeholder="Last name"
              className="bg-transparent text-primaryWhite   placeholder:bg-transparent focus:outline-none placeholder:text-slate-400 rounded-none border border-primaryWhite p-3 placeholder:font-roboto placeholder:text-[20px] font-roboto text-[20px] max-md:w-full"
            />
          </div>
          <div className="flex flex-wrap  items-center justify-center  gap-12 max-[890px]:gap-[24px]">
            <input
              placeholder="Email"
              className="bg-transparent text-primaryWhite   placeholder:bg-transparent focus:outline-none placeholder:text-slate-400 rounded-none border border-primaryWhite p-3 placeholder:font-roboto placeholder:text-[20px] font-roboto text-[20px] max-md:w-full"
            />
            <input
              placeholder="Phone (optional)"
              className="bg-transparent text-primaryWhite   placeholder:bg-transparent focus:outline-none placeholder:text-slate-400 rounded-none border border-primaryWhite p-3 placeholder:font-roboto placeholder:text-[20px] font-roboto text-[20px] max-md:w-full"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-full bg-transparent text-primaryWhite   placeholder:bg-transparent focus:outline-none placeholder:text-slate-400 rounded-none border border-primaryWhite p-3 placeholder:font-roboto placeholder:text-[20px] font-roboto text-[20px]"
              rows={5}
            />
          </div>
          <div className="flex justify-center">
            <Button className="bg-primaryBlue text-primaryWhite rounded-none py-4 px-[67px] font-roboto font-bold text-[24px] leading-[28px] text-center max-md:w-full">
              Send
            </Button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ContactSection;
