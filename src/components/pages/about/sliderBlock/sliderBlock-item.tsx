import Image from "next/image";
import { SliderItemTextBlock } from "./sliderBlock-item-textBlock";
import { sliderBlockItem } from "@/components/pages/about/data/sliderBlocks";
import styles from "./sliderBlock-item.module.css";
import { SliderBlockItemMobile } from "./sliderBlock-item-mobile";

export const SliderBlockItem = ({ data }: { data: sliderBlockItem }) => {
  const desktopImgW = data.desktopImgW;
  const desktopImgH = data.desktopImgH;

  return (
    <div
      className={`${styles.item} mobile:block flex items-start justify-center`}
      style={data.blockMt ? { marginTop: `${data.blockMt}px` } : {}}
    >
      <SliderBlockItemMobile data={data} />
      <div className={"mobile:hidden"}>
        <Image
          src={`/images/${data.image}`}
          alt={"Макет приложения"}
          width={desktopImgW}
          height={desktopImgH}
          style={{
            maxWidth: `${desktopImgW}px`,
            maxHeight: `${desktopImgH}px`,
            height: `${desktopImgH}px`,
            width: `${desktopImgW}px`,
            minWidth: `${desktopImgW}px`,
            minHeight: `${desktopImgH}px`,
          }}
        />
        <p className={"mt-8 font-medium text-base leading-6 text-center"}>
          {data.subImageText}
        </p>
      </div>

      <div
        style={{ marginTop: `${data.textMt}px` }}
        className={"space-y-6 mobile:hidden"}
      >
        {data.data.map((el: SliderItemTextBlock, index: number) => (
          <SliderItemTextBlock key={index} index={index} data={el} />
        ))}
      </div>
    </div>
  );
};
