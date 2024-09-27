import { MainHeadline } from "@/components/pages/Home/components/mainHeadline";
import Image from "next/image";
export const StoriesInCards = () => {
  return (
    <section
      className={
        "mobile:px-5 mobile:pt-12 mobile:pb-5 mobile:mt-16 mt-standardSectionMargin text-primary relative bg-white overflow-hidden box-border py-[74px] px-12 rounded-[28px]"
      }
    >
      <MainHeadline text={"Сторис в карточках"} />
      <p
        className={
          "mobile:text-base font-normal text-lg leading-6 max-w-[483px] mt-4"
        }
      >
        Расскажите обо всех важных новостях компании с помощью нового рекламного
        формата
      </p>
      <a
        href={"https://reklama.2gis.ru/stories-feature"}
        className={
          "mobile:mt-[242px] mobile:w-full pt-1 h-12 w-[212px] font-medium text-base leading-6 bg-gisGreen rounded-[12px] text-white mt-10 px-[47.5px] relative z-10 flex items-center justify-center"
        }
      >
        Узнать больше
      </a>
      <Image
        src={"/images/storiesInCards-desktop.png"}
        width={1168}
        height={352}
        alt={"Сторис в карточках"}
        className={"mobile:hidden absolute top-0 right-0 pointer-events-none"}
      />
      <Image
        src={"/images/storiesInCards-mobile.png"}
        width={344}
        height={423}
        alt={"Сторис в карточках"}
        className={
          "mobile:block hidden absolute bottom-0 left-0 pointer-events-none"
        }
      />
    </section>
  );
};
