"use client";

// import Image from "next/image";

// import assets from "@/assets/index";
// import ourTeamSectionContent from "@/contents/home-page-contents/our-team-section-content";
// import Team from "./Team";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamsSection = () => {
  // const CustomPrevArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       onClick={onClick}
  //       className={`py-4 absolute md:top-1/2 max-md:bottom-[-91px] -left-[4rem] max-md:left-7 transform -translate-y-1/2  cursor-pointer`}
  //     >
  //       <Image src={assets.prevArrow} alt="Previous arrow" />
  //     </div>
  //   );
  // };

  // const CustomNextArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       onClick={onClick}
  //       className={` py-4 absolute md:top-1/2 max-md:bottom-[-90px] -right-[4rem] max-md:right-7 transform -translate-y-1/2  cursor-pointer`}
  //     >
  //       <Image src={assets.nextArrow} alt="Next arrow" />
  //     </div>
  //   );
  // };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1160,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         dots: true,
  //         speed: 200,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: true,
  //         speed: 200,
  //       },
  //     },
  //   ],

  //   prevArrow: <CustomPrevArrow />,
  //   nextArrow: <CustomNextArrow />,

  //   customPaging: function (i: any) {
  //     const totalSlides = ourTeamSectionContent.length;

  //     const activeDotIndex = (this as any).currentSlide % totalSlides;

  //     const isActiveDot = i === activeDotIndex;

  //     const backgroundColor = isActiveDot ? "bg-[#2B00FF]" : "bg-[#77818A]";

  //     return (
  //       <div key={i} className={`mt-16 max-md:mt-10 `}>
  //         <span
  //           className={`block h-2 w-2 rounded-full mx-auto ${backgroundColor}`}
  //         ></span>
  //       </div>
  //     );
  //   },
  // };

  // const bgColors = ["bg-[#77818A]", "bg-[#2B00FF]", "bg-[#161527]"];
  return (
    <section className="max-container bg-primaryWhite pt-28 max-md:py-[40px] pb-28 px-2 ">
      <header>
        <h2 className="font-ubuntu font-bold text-[40px] max-md:text-[32px] leading-[45px] text-center text-darkBlue">
          Our Team
        </h2>
        <p className="mt-6 max-w-[1004px] mx-auto font-roboto font-normal text-[20px] leading-[30px] text-center text-darkBlue">
          With a team of experienced data scientists and specialists in
          financial econometrics, we combine advanced machine learning
          techniques with deep market knowledge. Our models are not only
          accurate and reliable but also continuously adapted to the changing
          market.
        </p>
      </header>

      {/* <div className="hidden mt-10  max-[1160px]:block mx-auto">
        <Slider {...settings}>
          {ourTeamSectionContent.map((team, index) => (
            <div key={index}>
              <Team
                profile={team.profile}
                fullName={team.fullName}
                position={team.position}
                description={team.description}
                bgColor={bgColors[index] || bgColors[0]}
              />
            </div>
          ))}
        </Slider>
      </div>

      <main className="mt-10 flex items-center justify-center ">
        <div className="max-[1160px]:hidden flex items-center gap-[26px]">
          {ourTeamSectionContent.map((team, index) => (
            <Team
              key={index}
              profile={team.profile}
              fullName={team.fullName}
              position={team.position}
              description={team.description}
              bgColor={bgColors[index] || bgColors[0]}
            />
          ))}
        </div>
      </main> */}
    </section>
  );
};

export default TeamsSection;
