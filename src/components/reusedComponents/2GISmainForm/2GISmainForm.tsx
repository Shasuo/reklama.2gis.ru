import { Input } from "./input";
export const GISmainForm = () => {
  return (
    <form
      id={"2GIS-mainForm"}
      className={
        "mobile:px-5 mobile:pt-10 mobile:pb-[26px] mobile:mt-16 mt-standardSectionMargin text-white bg-gisGreen rounded-[28px] py-[60px] px-12 w-full box-border"
      }
    >
      <h2
        className={
          "mobile:text-[30px] mobile:leading-[38px] font-medium text-3xl leading-[52px] max-w-[712px]"
        }
      >
        Оставьте заявку — узнайте больше о рекламе в 2ГИС
      </h2>
      <p
        className={
          "mobile:mt-[18px] mobile:text-sm mobile:leading-5 mt-5 font-normal text-lg leading-[27px]"
        }
      >
        Экономьте время и повышайте потенциал вашего бизнеса.
      </p>
      <div className={"mobile:mt-6 mobile:block mt-10 flex items-start"}>
        <div className={"space-y-4 max-w-[400px] w-full"}>
          <Input type={"text"} placeholder={"Имя"} />
          <Input type={"email"} placeholder={"Эл. почта"} />
          <Input type={"text"} placeholder={"Город"} />
        </div>

        <div
          className={
            "mobile:mt-4 mobile:ml-0 ml-8 space-y-4 max-w-[400px] w-full"
          }
        >
          <Input type={"text"} placeholder={"Компания"} />
          <Input type={"tel"} placeholder={"Телефон"} />
        </div>
      </div>
      <div className={"mobile:mt-12 mobile:block flex items-center mt-[46px]"}>
        <button
          type={"submit"}
          className={
            "mobile:bg-[#35B439] mobile:text-white mobile:h-14 mobile:w-full text-base box-border w-[216px] h-14 pt-1 font-medium text-primary bg-white rounded-[12px]"
          }
        >
          Отправить форму
        </button>
        <p
          className={
            "mobile:hidden text-white opacity-65 text-[12px] leading-[14px] font-normal max-w-[477px] ml-8 block"
          }
        >
          Нажимая на кнопку «Отправить», вы принимаете условия{" "}
          <a
            href="https://law.2gis.ru/licensing-agreement/"
            target={"_blank"}
            className={"underline"}
          >
            Лицензионного соглашения
          </a>
          . Условия и цели обработки персональных данных определены в {" "}
          <a
            href="https://law.2gis.ru/privacy/"
            target={"_blank"}
            className={"underline"}
          >
            Политике конфиденциальности
          </a>
          .{" "}
          <a
            href="https://law.2gis.ru/personal-data-dublgis/"
            target={"_blank"}
            className={"underline"}
          >
            Политика обработки персональных данных.
          </a>
        </p>
      </div>
    </form>
  );
};
