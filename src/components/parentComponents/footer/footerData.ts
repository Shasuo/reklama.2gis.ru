export interface footerContentBlock_data {
  link?: string;
  name: string;
  mt?: boolean;
  noBlank?: boolean;
}
export interface footerContentBlock {
  blockName: string;
  data: footerContentBlock_data[];
}
export const AdvertisingOn2GISMaps: footerContentBlock = {
  blockName: "Реклама на картах 2ГИС",
  data: [
    { link: "https://reklama.2gis.ru/add-info", name: "Добавить фирму в 2ГИС" },
    { link: "https://account.2gis.com", name: "Войти в личный кабинет" },
    { link: "https://stories.2gis.ru/glossary", name: "Рекламные позиции" },
    {
      link: "https://reklama.2gis.ru/update-info",
      name: "Обновить информацию<br/>об организации в 2ГИС",
    },
    { link: "/about", name: "Узнать больше о рекламе", noBlank: true },
    { link: "/price", name: "Прайс-лист", noBlank: true },
    { link: "https://stories.2gis.ru", name: "Истории успеха" },
  ],
};

export const OtherProducts: footerContentBlock = {
  blockName: "Другие продукты",
  data: [
    { name: "Для бизнеса" },
    { link: "https://dev.2gis.ru/data", name: "Базы данных" },
    { link: "https://dev.2gis.ru/api", name: "API и SDK" },
    { link: "https://dev.2gis.ru/vectormaps", name: "Векторные карты" },
    { link: "https://dev.2gis.ru/pro", name: "2ГИС Про" },
    { link: "https://dev.2gis.ru/telemarketing", name: "Телемаркетинг" },
    { link: "https://dev.2gis.ru/onpremise", name: "On-Premise" },
    { link: "https://dev.2gis.ru/onpremise", name: "Печать карт" },
    { link: "https://partners.otello.2gis.ru", name: "Подключиться к Отелло" },
  ],
};

export const ForUsers: footerContentBlock_data[] = [
  { name: "Для пользователя" },
  { link: "https://2gis.ru/", name: "Сервис 2ГИС" },
  { link: "https://otello.ru/", name: "Сервис бронирования Отелло" },
];

export const Company: footerContentBlock = {
  blockName: "Компания",
  data: [
    { link: "https://info.2gis.ru/novosibirsk/company/history", name: "О нас" },
    {
      link: "https://techno.2gis.ru/",
      name: "Техно 2ГИС",
    },
    {
      link: "https://job.2gis.ru/",
      name: "Работа в 2ГИС",
    },
    {
      link: "https://info.2gis.ru/novosibirsk/company/franchise",
      name: "Купить франшизу",
    },
    {
      link: "https://info.2gis.ru/novosibirsk/company/contacts",
      name: "Контакты",
    },
    {
      name: "Контакты",
      mt: true,
    },
    {
      link: "https://info.2gis.ru/moscow/company/media",
      name: "Пресс-центр",
    },
    {
      link: "https://dostavili.2gis.ru/",
      name: "Доставили",
    },
    {
      link: "https://info.2gis.ru/novosibirsk/company/news",
      name: "Новости",
    },
  ],
};

export const TermsOfUse: footerContentBlock = {
  blockName: "Условия использования",
  data: [
    {
      link: "https://law.2gis.ru/",
      name: "Правовая информация",
    },
    {
      link: "https://law.2gis.ru/about-2gis",
      name: "Лицензионное соглашение",
    },
    {
      link: "https://law.2gis.ru/privacy",
      name: "Политика конфиденциальности",
    },
  ],
};
