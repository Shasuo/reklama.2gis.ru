import Image from "next/image";
export const FirstScreen = () => {
  return (
    <section className={"mobile:-mt-2 mt-[104px] overflow-hidden w-full"}>
      <div
        className={
          "dangerMobile:max-w-10-px-borders mobile:max-w-mobileWidth font-medium text-primary max-w-desktopWidth w-full mx-auto relative"
        }
      >
        <div className={"mobile:block hidden"}>
          <Image
            src={"/images/aboutPage-firstScreen-mobile.png"}
            alt={"Маршруты и поиск мест"}
            width={610}
            height={361}
            className={"min-w-[610px] h-[361px] ml-[-140px]"}
          />
          <p
            className={"text-[30px] leading-[38px] mt-6"}
            style={{ letterSpacing: "-0.01em" }}
          >
            2ГИС — это карта, маршруты и поиск мест в городе, которые помогают
            решать бизнес-задачи с помощью разных рекламных инструментов
          </p>
        </div>

        <div className={"mobile:hidden"}>
          <h1 className={" text-4xl leading-[64px] max-w-[867px]"}>
            2ГИС — это карта, маршруты и поиск мест в городе
          </h1>
          <Image
            width={1440}
            height={599}
            src={"/images/aboutPage-firstScreen-desktop.png"}
            alt={"Маршруты и поиск мест"}
            className={"min-w-[1440px] w-[1440px] h-[599px] mt-20 -ml-[155px]"}
          />
          <p
            style={{ letterSpacing: "-0.01em" }}
            className={"mt-[75px] text-3xl leading-[52px] max-w-[1100px]"}
          >
            2ГИС помогает решать актуальные бизнес-задачи с помощью разных
            рекламных инструментов
          </p>
        </div>
      </div>
    </section>
  );
};
