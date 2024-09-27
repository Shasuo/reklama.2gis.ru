import Image from "next/image";
export const NormalItem = ({
  img,
  headline,
  text,
}: {
  img: string;
  headline: string;
  text: string;
}) => {
  return (
    <div
      className={
        "mobile:pt-1 mobile:pb-6 mobile:px-1 mobile:mt-6 mobile:min-h-[unset] pt-2 pb-7 px-2 rounded-[20px] max-w-[368px] bg-white mt-8 min-h-[467px]"
      }
    >
      <Image
        src={`/images/${img}`}
        width={352}
        height={247}
        alt={"Размещайте рекламу там, где её заметят"}
        className={"h-[228px]"}
      />
      <div className={"mobile:px-4 box-border px-5 mt-5"}>
        <h3
          className={
            "mobile:text-menuXl mobile:leading-6 font-medium text-xl leading-[32px]"
          }
        >
          {headline}
        </h3>
        <p
          className={
            "mobile:leading-5 mobile:mt-2 mobile:text-sm mt-3 font-normal text-base leading-6"
          }
        >
          {text}
        </p>
      </div>
    </div>
  );
};
