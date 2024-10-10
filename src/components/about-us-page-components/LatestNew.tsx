import Image from "next/image";

const LatestNew = ({
  title,
  description,
  image,
  date,
}: {
  title: string;
  description: string;
  image: string;
  date: string;
}) => {
  return (
    <section className="max-w-[372px] max-h-[547px] rounded-[5px] p-6">
      <Image src={image} alt="Latest News" className="rounded-[5px]" />
      <div className="mt-[26px]">
        <p className="font-roboto font-normal text-[20px] text-secondaryGray leading-[30px] ">
          {date}
        </p>
        <h3 className="font-ubuntu font-bold text-[32px] text-darkBlue leading-[48px]">
          {title}
        </h3>
        <p className="font-roboto font-normal text-[20px] leading-[30px] text-secondaryGray">
          {description}
        </p>
      </div>
    </section>
  );
};

export default LatestNew;
