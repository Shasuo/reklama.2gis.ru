import Image from "next/image";

export interface SliderItemTextBlock {
  title: string;
  text: string;
  titleMax?: number;
  textMax?: number;
  image?: { src: string; width: number; height: number };
  mobileMt: number;
  mobileMl: number;
}
export const SliderItemTextBlock = ({
  index,
  data,
}: {
  index: number;
  data: SliderItemTextBlock;
}) => {
  return (
    <div className={"flex items-start"}>
      <span
        className={
          "pt-[2px] box-border mt-1 max-w-6 min-w-6 max-h-6 min-h-6 w-6 h-6 rounded-[50%] bg-gisGreen text-white font-medium text-[12px] leading-3 flex items-center justify-center"
        }
      >
        {index + 1}
      </span>
      <div className={"ml-8"}>
        <h4
          style={{
            maxWidth: `${data.titleMax ? `${data.titleMax}px` : `unset`}`,
          }}
          className={"text-lg font-medium leading-6"}
        >
          {data.title}
        </h4>
        <p
          style={{
            maxWidth: `${data.textMax ? `${data.textMax}px` : `unset`}`,
            letterSpacing: "-0.02em",
          }}
          className={"mt-2 text-base font-normal leading-6"}
        >
          {data.text}
        </p>
        {data.image ? (
          <Image
            src={`/images/${data.image.src}`}
            alt={data.title}
            width={data.image.width}
            height={data.image.height}
            className={"mt-3"}
          />
        ) : null}
      </div>
    </div>
  );
};
