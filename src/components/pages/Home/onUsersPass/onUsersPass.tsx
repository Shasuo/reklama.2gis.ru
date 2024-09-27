import Image from "next/image";
import { TargetAnchor } from "@/components/scripts/target-anchor";
export const OnUsersPass = () => {
  return (
    <section className={"flex items-start justify-between flex-wrap"}>
      <div
        className={
          "mobile:mt-6 mobile:min-h-[unset] mobile:px-1 mobile:pt-1 box-border pt-2 pb-7 px-2 rounded-[20px] max-w-[768px] w-full bg-white mt-8 min-h-[468px]"
        }
      >
        <Image
          src={`/images/onUsersPass.png`}
          width={752}
          height={290}
          alt={"Реклама на пути пользователя"}
          className={"mobile:hidden"}
        />
        <Image
          src={`/images/onUsersPass-mobile.png`}
          width={336}
          height={228}
          alt={"Реклама на пути пользователя"}
          className={"mobile:block hidden"}
        />
        <div className={"mobile:px-4 box-border px-5 mt-5"}>
          <h3
            className={
              "mobile:leading-6 mobile:text-menuXl font-medium text-xl leading-[32px]"
            }
          >
            Реклама на пути пользователя
          </h3>
          <p
            className={
              "mobile:leading-5 mobile:text-sm mobile:mt-2 mt-3 font-normal text-base leading-6 max-w-[576px]"
            }
          >
            Компания заметна для всех, кто строит маршруты на авто или пешком.
            Пользователи могут посмотреть ближайший филиал, заехать по пути,
            заказать звонок или перейти на сайт.
          </p>
        </div>
      </div>
      <div
        className={
          "mobile:p-5 mobile:mt-6 mobile:min-h-[unset] bg-gisGreen box-border max-w-[368px] p-8 font-medium mt-8 min-h-[468px] max-h-[468px] rounded-[20px] relative"
        }
      >
        <h3
          className={
            "tracking-tight mobile:text-xl mobile:leading-7 text-[30px] text-white leading-[38px]"
          }
        >
          Напишите нам — ответим на вопросы и расскажем, как всё устроено.
        </h3>
        <button
          className={
            "mobile:mt-14 bg-white w-full rounded-[12px] text-base py-4 box-border mt-[196px]"
          }
          onClick={() => TargetAnchor("2GIS-mainForm")}
        >
          Узнать больше
        </button>
      </div>
    </section>
  );
};
