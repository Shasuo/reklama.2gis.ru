import { SliderItemTextBlock } from "@/components/pages/about/sliderBlock/sliderBlock-item-textBlock";

export interface sliderBlockItem {
  image: string;
  mobileImage: string;
  textMt: number;
  subImageText: string;
  desktopImgW: number;
  desktopImgH: number;
  blockMt?: number;
  data: SliderItemTextBlock[];
}

export interface sliderBlock {
  title: string;
  subtitleText: string;
  subtitleMaxWidth: number;
  items: sliderBlockItem[];
}

export const FirstBlock: sliderBlock = {
  title: "Геоконтекстная реклама",
  subtitleText:
    "Пользователи видят такую рекламу в результатах поиска по рубрикам и организациям. Она учитывает их интерес к определённым товарам и услугам в конкретном месте.",
  subtitleMaxWidth: 579,
  items: [
    {
      image: "aboutPage-sliderBlock-1-1.png",
      mobileImage: "aboutPage-sliderBlock-1-1-mobile.png",
      textMt: 58.14,
      subImageText: "Отображение в поисковой выдаче",
      desktopImgW: 598.53,
      desktopImgH: 579.87,
      data: [
        {
          title: "Поднятие в списке",
          text: "Компания с кнопкой и рекламным объявлением отображается выше в результатах поисковой выдачи, чем компании-нерекламодатели.",
          textMax: 290,
          mobileMl: 145,
          mobileMt: 90,
        },
        {
          title: "Логотип",
          text: "Логотип привлекает внимание к компании в поисковой выдаче.",
          textMax: 290,
          mobileMl: 220,
          mobileMt: 140,
        },
        {
          title: "Рекламное сообщение",
          text: "Короткое рекламное объявление в поисковой выдаче рассказывает о главном преимуществе, акции или спецпредложении.",
          textMax: 290,
          mobileMl: 200,
          mobileMt: 210,
        },
        {
          title: "Кнопка",
          text: "Кнопка действия призывает пользователя сразу перейти на сайт, позвонить или скачать приложение.",
          textMax: 290,
          mobileMl: 140,
          mobileMt: 210,
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-1-2.png",
      mobileImage: "aboutPage-sliderBlock-1-2-mobile.png",
      textMt: 128,
      subImageText: "Отображение на карте",
      desktopImgW: 587.5,
      desktopImgH: 579.87,
      data: [
        {
          title: "Логотип",
          text: "Привлекает больше внимания, чем пин на карте. Клик на логотип ведёт пользователя в карточку компании.",
          textMax: 282,
          mobileMl: 87,
          mobileMt: 155,
        },
        {
          title: "Рекламное объявление",
          text: "Рассказывает потенциальным клиентам о ваших уникальных преимуществах, сезонных предложениях или скидках и формирует интерес к компании.",
          textMax: 282,
          mobileMl: 217,
          mobileMt: 205,
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-1-3.png",
      mobileImage: "aboutPage-sliderBlock-1-3-mobile.png",
      textMt: -20,
      blockMt: 20,
      subImageText: "Отображение карточки",
      desktopImgW: 589,
      desktopImgH: 579.87,
      data: [
        {
          title: "Логотип в карточке компании",
          text: "Новые клиенты запоминают вашу компанию, а дополнительное оформление карточки подчёркивает ваш фирменный стиль.",
          textMax: 284,
          mobileMl: 57,
          mobileMt: 25,
        },
        {
          title: "Проморолик или фото в шапке",
          text: "Ещё один красивый способ рассказать о себе или сезонном предложении. Меняйте оформление, когда хочется.",
          textMax: 296,
          mobileMl: 228,
          mobileMt: 85,
        },
        {
          title: "Рекламное объявление",
          text: "Коротко расскажите клиентам о главном преимуществе или уникальном предложении.",
          textMax: 282,
          mobileMl: 180,
          mobileMt: 157,
        },
        {
          title: "Блок со скидками",
          text: "Все любят выгоду — расскажите о своих акциях пользователям 2ГИС.",
          textMax: 291,
          mobileMl: 100,
          mobileMt: 287,
          image: {
            src: "aboutPage-sliderBlock-1-3-textBlockImage-4.png",
            width: 191,
            height: 174,
          },
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-1-4.png",
      mobileImage: "aboutPage-sliderBlock-1-4-mobile.png",
      textMt: 235,
      subImageText: "Вкладка «Цены» в карточке",
      desktopImgW: 584,
      desktopImgH: 579.87,
      data: [
        {
          title: "Витрина",
          text: "Покажите ваше меню, товары или услуги — опубликуйте прайс-лист с описаниями и фото. Кнопка действия мотивирует сделать заказ.",
          textMax: 294,
          mobileMl: 175,
          mobileMt: 100,
        },
      ],
    },
  ],
};

export const SecondBlock: sliderBlock = {
  title: "Медийная реклама",
  subtitleText:
    "Баннеры, видеоролики и другие медийные форматы в 2ГИС делают ваш бизнес заметнее на фоне других и обеспечивают максимальный охват.",
  subtitleMaxWidth: 594,
  items: [
    {
      image: "aboutPage-sliderBlock-2-1.png",
      mobileImage: "aboutPage-sliderBlock-2-1-mobile.png",
      textMt: 220.14,
      subImageText: "",
      desktopImgW: 297.03,
      desktopImgH: 523.87,
      data: [
        {
          title: "Логотип на дашборде",
          text: "Ваш логотип на главном экране поиска даёт широкий охват в онлайн-и мобильной версиях 2ГИС.",
          textMax: 300,
          mobileMl: 185,
          mobileMt: 270,
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-2-2.png",
      mobileImage: "aboutPage-sliderBlock-2-2-mobile.png",
      textMt: 164.14,
      subImageText: "",
      desktopImgW: 298.03,
      desktopImgH: 523.87,
      data: [
        {
          title: "Баннер на дашборде в мобильной версии",
          text: "Дашборд и ваш баннер на нём — первое, что видят пользователи в мобильном приложении 2ГИС. Баннер привлекает максимально широкую аудиторию.",
          textMax: 286,
          titleMax: 277,
          mobileMl: 210,
          mobileMt: 265,
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-2-3.png",
      mobileImage: "aboutPage-sliderBlock-2-3-mobile.png",
      textMt: 152.14,
      subImageText: "",
      desktopImgW: 297.03,
      desktopImgH: 523.87,
      data: [
        {
          title: "Логотип на карте",
          text: "Пользователи видят ваш логотип и рекламное предложение на карте и запоминают ваш бренд.",
          textMax: 286,
          mobileMl: 107,
          mobileMt: 165,
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-2-4.png",
      mobileImage: "aboutPage-sliderBlock-2-4-mobile.png",
      textMt: 232.14,
      subImageText: "",
      desktopImgW: 302.91,
      desktopImgH: 523.87,
      data: [
        {
          title: "Сторис компании",
          text: "Рекламодатель может размещать в сторис самые интересные и свежие предложения в популярном формате. Материалы обновляются в Личном кабинете так часто, как необходимо.",
          textMax: 320,
          mobileMl: 200,
          mobileMt: 335,
        },
      ],
    },
  ],
};

export const ThirdBlock: sliderBlock = {
  title: "Реклама в навигаторе",
  subtitleText:
    "Пользователи видят её, когда двигаются по маршруту — пешком, на самокате, велосипеде или на автомобиле.",
  subtitleMaxWidth: 579,
  items: [
    {
      image: "aboutPage-sliderBlock-3-1.png",
      mobileImage: "aboutPage-sliderBlock-3-1-mobile.png",
      textMt: 50.14,
      subImageText: "",
      desktopImgW: 300.53,
      desktopImgH: 523.87,
      data: [
        {
          title: "Билборд в навигаторе",
          text: "Большой рекламный щит на маршруте привлекает внимание пользователей навигатора. С ним ваш бренд увидят и запомнят. Клик на билборд открывает баннер с вашим рекламным предложением.",
          textMax: 295,
          image: {
            src: "aboutPage-sliderBlock-3-1-textBlockImage-1.png",
            width: 294,
            height: 220,
          },
          mobileMl: 175,
          mobileMt: 210,
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-3-2.png",
      mobileImage: "aboutPage-sliderBlock-3-2-mobile.png",
      textMt: 50.14,
      subImageText: "",
      desktopImgW: 297.03,
      desktopImgH: 523.87,
      data: [
        {
          title: "Логотип на карте в навигаторе",
          text: "Пользователи видят ваш логотип в навигаторе, когда находятся рядом с вами. А при клике на него получат больше информации или перестроят маршрут, чтобы сразу заехать к вам.",
          textMax: 286,
          image: {
            src: "aboutPage-sliderBlock-3-2-textBlockImage-1.png",
            width: 294,
            height: 268,
          },
          mobileMl: 185,
          mobileMt: 230,
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-3-3.png",
      mobileImage: "aboutPage-sliderBlock-3-3-mobile.png",
      textMt: 175.14,
      subImageText: "",
      desktopImgW: 303.53,
      desktopImgH: 523.87,
      data: [
        {
          title: "Баннер при остановке",
          text: "Пользователи навигатора видят баннер, когда стоят на светофоре или в пробке без движения более 7 секунд.",
          textMax: 286,
          mobileMl: 210,
          mobileMt: 360,
        },
      ],
    },
    {
      image: "aboutPage-sliderBlock-3-4.png",
      mobileImage: "aboutPage-sliderBlock-3-4-mobile.png",
      textMt: 30.14,
      subImageText: "",
      desktopImgW: 299.53,
      desktopImgH: 523.87,
      data: [
        {
          title: "Билборд на экране построения маршрута",
          text: "Пользователи видят билборд на экране построения маршрута в мобильном приложении 2ГИС, когда строят маршрут для поездки на автомобиле, велосипеде, самокате, такси, а также на общественном транспорте или пешком.",
          textMax: 290,
          titleMax: 258,
          mobileMl: 150,
          mobileMt: 130,
          image: {
            src: "aboutPage-sliderBlock-3-4-textBlockImage-1.png",
            width: 294,
            height: 220,
          },
        },
      ],
    },
  ],
};
