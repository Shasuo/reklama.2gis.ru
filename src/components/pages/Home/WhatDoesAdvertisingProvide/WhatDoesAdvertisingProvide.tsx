import { Item } from "./item";
import { MainHeadline } from "@/components/pages/Home/components/mainHeadline";
export const WhatDoesAdvertisingProvide = () => {
  return (
    <section
      className={
        "mobile:mt-16 mt-standardSectionMargin text-primary relative overflow-hidden w-full"
      }
    >
      <div
        className={"mobile:ml-mobileHiddenBorders max-w-desktopWidth mx-auto"}
      >
        <MainHeadline text={"Что даёт реклама в 2ГИС?"} />
      </div>

      <div
        className={
          "dangerMobile:ml-[10px] mobile:mt-8 mobile:pb-2 mt-12 overflow-auto w-full max-w-desktopWidth mx-auto"
        }
      >
        <div
          className={
            "dangerMobile:ml-0 mobile:min-w-[1180px] mobile:ml-mobileHiddenBorders flex items-start space-x-8 w-full min-w-desktopWidth"
          }
        >
          <Item
            image={"2GIS-relkama-1.png"}
            headline={"Приводит клиентов"}
            text={
              "Пользователи уже знают, какие товары и услуги им нужны, и ищут в 2ГИС, где их купить."
            }
          />
          <Item
            image={"2GIS-relkama-2.png"}
            headline={"Помогает повысить охваты"}
            text={
              "Яркие форматы выделяют компанию на фоне конкурентов и привлекают внимание миллионов пользователей."
            }
          />
          <Item
            image={"2GIS-relkama-3.png"}
            headline={"Формирует потребность"}
            text={
              "Реклама повышает узнаваемость бренда и побуждает аудиторию к импульсным покупкам."
            }
          />
          <Item
            image={"2GIS-relkama-4.png"}
            headline={"Стимулирует продажи"}
            text={
              "Кнопки действия в карточке мотивируют пользователей сделать заказ, позвонить или зайти на сайт."
            }
          />
        </div>
      </div>
    </section>
  );
};
