import { NormalItem } from "./normal-item";
import { customInfoInterface, normalBlock } from "../dataFiles/interface";
import { MainHeadline } from "../components/public";
export const CustomInfoBlock = ({ data }: { data: customInfoInterface }) => {
  return (
    <section className="mobile:mt-16 mt-standardSectionMargin text-primary">
      <MainHeadline text={data.mainHeadline} />
      <div
        className={
          "mobile:mt-2 mt-4 flex items-start justify-between flex-wrap"
        }
      >
        {data.data.map((el: normalBlock, index: number) => (
          <NormalItem
            key={index}
            img={el.img}
            headline={el.headline}
            text={el.text}
          />
        ))}
      </div>
    </section>
  );
};
