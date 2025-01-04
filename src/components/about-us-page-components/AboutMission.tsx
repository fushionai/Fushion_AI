const AboutMission = ({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <section
      className={`${bgColor} rounded border py-[51px] px-12 max-md:py-4 max-md:px-4`}
    >
      <h3 className="font-ubuntu font-medium text-[24px] leading-[36px] text-primaryWhite">
        {title}
      </h3>
      <h6 className="max-w-[444px] mt-4 font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite">
        {description}
      </h6>
    </section>
  );
};

export default AboutMission;
