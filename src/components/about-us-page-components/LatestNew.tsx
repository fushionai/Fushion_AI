import Image from "next/image";

const LatestNew = ({
  title,
  description,
  image,
  date,
}: {
  title: string;
  description: string;
  image: any;
  date: string;
}) => {
  return (
    <section className="max-w-[372px] max-[800px]:max-w-[95%] max-[800px]:mx-auto rounded-[5px] p-6 bg-[#F4F5FF]  ">
      <div className="w-[310px] max-[800px]:w-[95%] mx-auto h-[234px]">
        <Image
          src={image}
          alt="Latest News"
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
      <div className="mt-[26px]">
        <p className="font-roboto font-normal text-[20px] text-secondaryGray leading-[30px] ">
          {date}
        </p>
        <h3 className="font-ubuntu font-bold text-[32px] text-darkBlue leading-[48px] max-md:leading-[38px]">
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
