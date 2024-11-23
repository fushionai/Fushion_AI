import Image from "next/image";

import assets from "@/assets/index";
import testimonialProfile from "@/assets/images/home-page-images/testimonial.png";

const Testimonial = ({
  description,
  fullName,
  position,
}: {
  description: string;
  fullName: string;
  position: string;
}) => {
  return (
    <section className="max-w-[1100px] mx-auto bg-gradient-secondary py-28 max-md:py-20 px-32 max-md:px-20 max-sm:px-5">
      <div className="flex flex-col items-center justify-center">
        <Image src={assets.stars} alt="Full start" loading="eager" />
        <blockquote className="mt-10 max-sm:mt-7 font-roboto font-normal text-primaryWhite  text-center italic text-[24px] max-sm:text-[16px] leading-[36px] max-sm:leading-[24px]">
          &quot;{description}&quot;
        </blockquote>
      </div>
      <footer className="mt-16 flex max-[900px]:flex-col items-center justify-center gap-5 max-[900px]:gap-7">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4 lg:border-r-4 lg:pe-6 lg:border-white">
            <Image
              src={testimonialProfile}
              alt="Styling image"
              loading="eager"
              className="w-16"
            />
            <div className="flex flex-col gap-3 text-primaryWhite">
              <h3 className="font-ubuntu font-bold text-[18px] leading-[17px] text-nowrap">
                {fullName}
              </h3>

              <p className="font-ubuntu font-light text-[16px] leading-[17px]">
                {position}
              </p>
            </div>
          </div>

          <div className="lg:hidden h-1 w-28 bg-slate-50"></div>

          <Image
            src={assets.logoIpsum}
            alt="Styling image"
            loading="eager"
            className=""
          />
        </div>
      </footer>
    </section>
  );
};

export default Testimonial;
