import Image from "next/image";

const Team = ({
  profile,
  fullName,
  position,
  description,
  bgColor,
}: {
  profile: any;
  fullName: string;
  position: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <section className={`mx-5`}>
      <div
        className={`${bgColor} flex flex-col justify-center items-center w-full h-[493px] max-[1160px]:w-full max-md:w-full max-md:h-[493px] py-[56px] px-[43px]`}
      >
        <Image
          src={profile}
          alt="Our Team"
          loading="eager"
          width={175}
          height={175}
          className="size-[175px] rounded-full"
        />
        <h3 className="mt-5 capitalize font-bold text-[32px] leading-[48px] text-center text-primaryWhite">
          {fullName}
        </h3>
        <h6 className="font-roboto font-bold text-[18px] text-center text-primaryWhite">
          {position}
        </h6>
        <p className="mt-7 font-roboto font-normal text-[20px] leading-[20px] text-center text-primaryWhite">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Team;
