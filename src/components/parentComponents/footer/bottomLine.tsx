import Image from "next/image";

export const BottomLine = () => {
  return (
    <section className={"mobile:py-6 bg-[#F4F4F4] py-8 text-[#696969]"}>
      <main
        className={
          "mobile:text-sm mobile:block text-base leading-6 font-normal flex justify-between items-start"
        }
      >
        <div className={"font-medium order-1"}>
          <span>Если появятся вопросы</span>
          <div
            className={
              "mobile:space-x-0 mobile:space-y-2 mobile:block flex mt-[6px] items-center space-x-3 text-[#A5A5A5]"
            }
          >
            <a className={"flex items-center"} href={"tel:88002003600"}>
              <Image
                src={"/images/footer-phone-icon.png"}
                width={24}
                height={24}
                alt={"Телефон"}
                className={"mr-1"}
              />
              8 800 200 36 00
            </a>
            <a className={"flex items-center"} href={"mailto:reklama@2gis.ru"}>
              <Image
                src={"/images/footer-mail-icon.png"}
                width={24}
                height={24}
                alt={"Email"}
                className={"mr-1"}
              />
              Отправьте письмо
            </a>
          </div>
        </div>
        <span className={"mobile:mt-5 mobile:block order-0"}>
          1999-2024 © 2ГИС. Все права защищены.
        </span>
      </main>
    </section>
  );
};
