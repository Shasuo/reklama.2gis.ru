import Image from "next/image";
import { TargetAnchor } from "@/components/scripts/target-anchor";
export const FirstScreen = () => {
  return (
    <section
      className={
        "mobile:pb-0 mobile:mt-[-45px] mt-[104px] overflow-hidden w-full pt-5 pb-[300px]"
      }
    >
      <div
        className={
          "dangerMobile:max-w-10-px-borders mobile:max-w-mobileWidth font-normal text-primary max-w-desktopWidth w-full mx-auto relative"
        }
      >
        <Image
          src={"/images/mainfirstscreen-mobile.png"}
          width={786}
          height={417}
          alt={"2ГИС реклама"}
          className={
            "mobile:ml-[-220px] mobile:block max-w-none mx-auto hidden"
          }
        />
        <h1
          className={
            "mobile:text-[40px] mobile:leading-[48px] mobile:tracking-[-0.2px] text-4xl font-medium max-w-[732px] leading-[64px]"
          }
        >
          Реклама в 2ГИС — новые клиенты для бизнеса
        </h1>
        <p
          className={
            "mobile:text-base mobile:mt-4 mt-5 text-lg max-w-[412px] leading-6"
          }
        >
          Каждый день миллионы пользователей ищут в 2ГИС лучшие места, товары
          и услуги — продавайте тем, кто готов купить.
        </p>
        <button
          className={
            "mobile:w-full mobile:mt-8 bg-gisGreen text-base text-white mt-10 w-[192px] h-[52px] rounded-xl pt-1"
          }
          onClick={() => TargetAnchor("2GIS-mainForm")}
        >
          Заказать рекламу
        </button>
        <Image
          src={"/images/mainfirstscreen-desktop.png"}
          width={1492.35}
          height={838.6}
          alt={"2ГИС реклама"}
          className={
            "mobile:hidden absolute left-[-160px] top-[-100px] max-w-none pointer-events-none"
          }
        />
      </div>
    </section>
  );
};
