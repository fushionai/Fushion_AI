import Image from "next/image";

import TopNavBar from "@/components/layouts/TopNavBar";

import heroBg from "@/assets/images/products-page-images/our-products-hero.png";
import ContactForm from "@/components/contact-us-page-components/ContactForm";
import ContactInformation from "@/components/contact-us-page-components/ContactInformation";

const page = () => {
  return (
    <section>
      <section className="relative bg-center bg-cover bg-no-repeat pb-36 max-sm:pb-28">
        <Image
          src={heroBg}
          alt="Background image"
          layout="fill"
          loading="eager"
          className="-z-10 object-cover "
        />
        <section className="max-container">
          <header>
            <TopNavBar />
          </header>
          <main className="mt-16 px-10 pb-20 md:mt-20 md:px-32 max-sm:px-2">
            <h2 className="font-ubuntu text-[64px] max-sm:text-[32px]  font-bold text-primaryWhite text-center leading-[73px] max-sm:leading-[48px]">
              Contact Us
            </h2>

            <div className="absolute -bottom-2 left-0 right-0 w-full bg-transparent h-24">
              {/* transparent */}
              <div
                className="absolute inset-0 w-full h-full bg-white/50"
                style={{
                  clipPath:
                    "polygon(94.95% 47.92%, 100% 47.92%, 100% 89.58%, 0% 99.58%, 0% 0%, 10.17% 0%, 57.5% 0%, 58.64% 20%, 93.98% 20%, 94.95% 47.92%)",
                }}
              ></div>

              {/* bold white */}
              <div className="absolute -bottom-2 left-0 w-full h-12 md:h-16 bg-transparent">
                <div
                  className="absolute inset-0 w-full h-full bg-[#EDEEF9]"
                  style={{
                    clipPath:
                      "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
                  }}
                ></div>
              </div>
            </div>
          </main>
        </section>
      </section>

      <section className="w-full bg-[#EDEEF9] px-4 py-12 md:py-16">
        <div className="mx-auto p-10 max-w-6xl grid gap-8 md:grid-cols-2 md:gap-12 bg-white">
          <ContactInformation />
          <ContactForm />
        </div>
      </section>
    </section>
  );
};

export default page;
