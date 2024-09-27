import { SliderBlockItem } from "./sliderBlock-item";
import {
  sliderBlock,
  sliderBlockItem,
} from "@/components/pages/about/data/sliderBlocks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { TargetAnchor } from "@/components/scripts/target-anchor";

export const SliderBlock = ({ data }: { data: sliderBlock }) => {
  const swiperRef = useRef(null);
  const navigationArrowsStyles = "mobile:top-[262px] absolute top-[274px] z-10";
  return (
    <section
      className={
        "mobile:py-10 mobile:px-5 mobile:mt-16 mt-standardSectionMargin box-border w-full bg-white rounded-[28px] pt-10 px-12 pb-[120px] text-primary aboutSliderBlock"
      }
    >
      <h3
        className={
          "mobile:text-[30px] mobile:leading-[38px] text-3xl font-medium leading-[52px]"
        }
      >
        {data.title}
      </h3>
      <p
        className={
          "mobile:leading-5 mobile:text-sm mobile:mt-3 mt-2 font-normal text-base leading-6"
        }
        style={{ maxWidth: `${data.subtitleMaxWidth}px` }}
      >
        {data.subtitleText}
      </p>
      <div className={"mobile:mt-10 mobile:mx-0 mx-[72px] mt-12 relative"}>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {data.items.map((el: sliderBlockItem, index: number) => (
            <SwiperSlide key={index}>
              <SliderBlockItem data={el} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`mobile:-left-3 ${navigationArrowsStyles} left-[-72px]`}
          onClick={() => {
            // @ts-expect-error: Swiper normal type-error
            swiperRef.current.swiper.slidePrev();
          }}
        >
          <Image
            src={"/images/aboutPage-slider-arrow-left.svg"}
            width={16}
            height={32.59}
            alt={"Предыдущий слайд"}
          />
        </button>
        <button
          className={`mobile:-right-3 ${navigationArrowsStyles} right-[-72px]`}
          onClick={() => {
            // @ts-expect-error: Swiper normal type-error
            swiperRef.current.swiper.slideNext();
          }}
        >
          <Image
            src={"/images/aboutPage-slider-arrow-right.svg"}
            width={16}
            height={32.59}
            alt={"Следующий слайд"}
          />
        </button>
      </div>
      <button
        className={
          "mobile:mt-9 h-14 pt-1 w-[256px] rounded-[12px] text-white font-medium text-base leading-6 bg-gisGreen mx-auto block mt-[-130px] z-10 relative"
        }
        onClick={() => TargetAnchor("2GIS-mainForm")}
      >
        Заказать рекламу
      </button>
    </section>
  );
};
