
import Image from "next/image";

const Service = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <section className="max-w-[763px] mx-auto">
      <Image src={icon} alt="Title icon" />
      <h2 className="mt-10 font-ubuntu font-bold max-md:font-medium text-[40px] max-md:text-[24px] max-md:leading-[36px] text-snowWhite">
        {title}
      </h2>
      <p className="mt-6 font-roboto font-normal text-[20px] text-primaryWhite">
        {description}
      </p>
    </section>
  );
};

export default Service;
