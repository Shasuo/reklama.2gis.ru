import { Item } from "./item";
export const AdvertisingNumbers = () => {
  return (
    <section
      className={
        "mobile:mt-16 mobile:mb-0 mobile:space-y-6 mt-14 mb-[-30px] w-full flex items-start justify-between flex-wrap"
      }
    >
      <Item
        headline={"Аудитория"}
        number={"76+"}
        unit={"млн"}
        text={"пользователей каждый месяц на всех платформах"}
        downText={"По данным ООО «ДубльГИС» на август 2024 года"}
      />

      <Item
        headline={"Бизнес"}
        number={"110"}
        unit={"тыс."}
        text={"компаний ежемесячно находит клиентов с помощью 2ГИС"}
      />

      <Item
        headline={"География"}
        number={"1400+"}
        unit={""}
        text={"городов в России, Казахстане, ОАЭ и других странах"}
      />
    </section>
  );
};
