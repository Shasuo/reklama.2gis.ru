import { MainHeadline } from "@/components/pages/Home/components/mainHeadline";
import { Item } from "./item";
import Image from "next/image";
import { successStories } from "./dataFiles/interface";
import { Data } from "./dataFiles/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
export const SuccessStories = () => {
  const swiperRef = useRef(null);
  const navigationArrowsStyles =
    "w-14 h-14 rounded-[50%] bg-gisGreen flex justify-center items-center absolute top-[315px] z-10";
  return (
    <section
      className={"mobile:mt-16 mt-standardSectionMargin text-primary relative"}
    >
      <MainHeadline text={"Истории успеха"} />
      <div className={"mobile:hidden"}>
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={32}
          grabCursor={true}
          loop={true}
          touchEventsTarget="container"
          className={"mt-12"}
        >
          {Data.map((el: successStories, index: number) => (
            <SwiperSlide key={index}>
              <Item data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`${navigationArrowsStyles} -left-10`}
          onClick={() => {
            // @ts-expect-error: Swiper normal type-error
            swiperRef.current.swiper.slidePrev();
          }}
        >
          <Image
            src={"/images/SuccessStories-leftArrow.svg"}
            width={24}
            height={24}
            alt={"Предыдущий слайд"}
          />
        </button>
        <button
          className={`${navigationArrowsStyles} -right-10`}
          onClick={() => {
            // @ts-expect-error: Swiper normal type-error
            swiperRef.current.swiper.slideNext();
          }}
        >
          <Image
            src={"/images/SuccessStories-rightArrow.svg"}
            width={24}
            height={24}
            alt={"Следующий слайд"}
          />
        </button>
      </div>

      <div className={"mobile:block mt-8 space-y-8 hidden"}>
        {Data.map((el: successStories, index: number) => (
          <Item data={el} key={index} />
        ))}
      </div>
    </section>
  );
};
