import Image from "next/image";
import clsx from "clsx";

export const BlockTitle = ({
  text,
  returnState,
  state,
}: {
  text: string;
  returnState: () => void;
  state: boolean;
}) => {
  return (
    <h4
      onClick={returnState}
      className={
        "mobile:h-10 mobile:flex mobile:items-center mobile:justify-between mobile:text-base mobile:leading-5 leading-6 text-lg font-medium text-primary"
      }
    >
      {text}
      <Image
        src={"/images/footer-arrow.png"}
        width={24}
        height={24}
        alt={"Развернуть"}
        className={clsx("mobile:block hidden mr-1 h-6 duration-200", {
          ["rotate-180 transform"]: state,
        })}
      />
    </h4>
  );
};
