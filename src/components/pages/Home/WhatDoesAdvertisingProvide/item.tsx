import Image from "next/image";
export const Item = ({
  image,
  headline,
  text,
}: {
  image: string;
  headline: string;
  text: string;
}) => {
  return (
    <div
      className={
        "mobile:min-h-[316px] mobile:px-5 mobile:py-6 box-border max-w-[268px] w-full min-h-[388px] rounded-[20px] bg-white pt-6 pr-5 pb-4 pl-7"
      }
    >
      <Image
        src={`/images/${image}`}
        width={96}
        height={96}
        alt={headline}
        className={"mobile:w-[72px] mobile:h-[72px]"}
      />
      <div className={"mobile:mt-18 mt-14"}>
        <h3
          className={
            "mobile:text-menuXl mobile:leading-6 text-xl font-medium leading-8 px-1"
          }
        >
          {headline}
        </h3>
        <p
          className={
            "mobile:text-sm mobile:leading-5 mt-3 text-base leading-6 font-normal px-1"
          }
        >
          {text}
        </p>
      </div>
    </div>
  );
};
