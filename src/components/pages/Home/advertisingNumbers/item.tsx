export const Item = ({
  headline,
  number,
  unit,
  text,
  downText,
}: {
  headline: string;
  number: string;
  unit: string;
  text: string;
  downText?: string;
}) => {
  return (
    <div>
      <div
        className={
          "mobile:py-6 mobile:px-5 rounded-[20px] bg-white box-border py-9 px-8 text-primary"
        }
      >
        <h2
          className={
            "mobile:text-menuXl mobile:leading-6 text-xl font-medium leading-[32px] max-w-[304px] w-full"
          }
        >
          {headline}
        </h2>
        <div className={"mobile:mt-4 font-medium mt-6"}>
          <span
            className={
              "mobile:text-[52px] mobile:leading-[52px] text-5xl text-gisGreen leading-[64px]"
            }
          >
            {number}
          </span>
          <span className={"mobile:text-[30px] mobile:leading-[36px] text-2xl"}>
            {" "}
            {unit}
          </span>
        </div>
        <p
          className={
            "mobile:mt-4 mobile:leading-[18px] mobile:text-sm mt-6 font-normal leading-6 text-base w-full max-w-[304px]"
          }
        >
          {text}
        </p>
      </div>
      {downText ? (
        <p className={"mobile:hidden opacity-50 text-center mt-3 text-sm"}>
          По данным ООО «ДубльГИС» на март 2024 года
        </p>
      ) : null}
    </div>
  );
};
