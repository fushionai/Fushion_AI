import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-primaryWhite py-20">
      <header>
        <h2 className="px-10 font-bold font-ubuntu text-[40px] max-md:text-[32px] text-center text-darkBlue leading-[32px]">
          Why Choose{" "}
          <span className="max-md:text-primaryBlue"> Fushion AI </span>?
        </h2>
        <p className="max-w-[1003px] mx-auto mt-12 px-6 max-md:mt-8 font-roboto font-normal text-[20px] text-center leading-[30px]">
          At Fushion AI, we believe in the transformative power of data to
          revolutionize the real estate market. Our core mission is to empower
          our clients with advanced artificial intelligence (AI) models that
          deliver essential insights, helping them make informed investment
          decisions based on accurate and up-to-date information.
        </p>
      </header>
    </section>
  );
};

export default FeaturesSection;
