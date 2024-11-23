import Image from "next/image";

import TopNavBar from "@/components/layouts/TopNavBar";

import heroBg from "@/assets/images/products-page-images/our-products-hero.png";

import AboutUsOurValues from "@/components/about-us-page-components/AboutUsOurValues";
import AboutUsLatestNews from "@/components/about-us-page-components/AboutUsLatestNews";
// import ContactSection from "@/components/about-us-page-components/ContactSection";

const AboutUsPage = () => {
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
              About Us
            </h2>
            <h6 className="max-w-[1158px] mx-auto mt-5 sm:mt-10 font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite text-center">
              We are a rapidly growing tech startup specializing in artificial
              intelligence solutions for the real estate sector. Our young and
              dynamic team is dedicated to revolutionizing the industry through
              innovative AI-driven technologies. With a focus on delivering
              cutting-edge solutions, we aim to transform the way real estate
              professionals operate and make data-driven decisions. Our small
              but highly skilled team thrives on collaboration and creativity,
              pushing the boundaries of what&apos;s possible in the real estate
              market.
            </h6>

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
                  className="absolute inset-0 w-full h-full bg-white"
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
      <AboutUsOurValues />
      <AboutUsLatestNews />
      {/* <ContactSection /> */}

      {/* Footer Styling */}
      <div className={`bg-[#161527] h-28 relative`}>
        <div className="relative w-full h-12 md:h-16 bg-white">
          <div
            className="absolute inset-0 w-full h-full bg-[#161527]"
            style={{
              clipPath:
                "polygon(0% 47.69%, 0% 100%, 100% 100%, 100% 0.77%, 89.8% 0.77%, 34.5% 0.77%, 31.42% 74.62%, 6.43% 74.62%, 5.12% 47.69%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
