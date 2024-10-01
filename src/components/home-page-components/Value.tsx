import Image from "next/image";

const Value = ({
  icon,
  title,
  description,
  bgColor,
}: {
  icon: any;
  title: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <section
      className={`${bgColor} rounded border p-10 max-md:py-10 max-md:px-5`}
    >
      <Image src={icon} alt="Title icon" loading="eager" />
      <h3 className="mt-7 font-ubuntu font-medium text-[24px] leading-[36px] text-primaryWhite">
        {title}
      </h3>
      <h6 className="max-w-[420px] mt-4 font-roboto font-normal text-[20px] leading-[30px] text-primaryWhite">
        {description}
      </h6>
    </section>
  );
};

export default Value;
