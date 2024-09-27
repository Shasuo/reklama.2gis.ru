import Image from "next/image";
import { successStories, numberItems } from "./dataFiles/interface";
export const Item = ({ data }: { data: successStories }) => {
  return (
    <a
      href={data.link}
      className={
        "mobile:min-w-[unset] bg-white rounded-[20px] p-4 max-w-[368px] w-full box-border text-primary block min-w-[368px] select-none relative"
      }
    >
      <div
        className={
          "mobile:flex hidden absolute right-4 top-4 w-10 h-10 rounded-[12px] items-center justify-center bg-[#EDEDED]"
        }
      >
        <Image
          src={"/images/arrowGreen.svg"}
          width={24}
          height={24}
          alt={"Читать кейс"}
        />
      </div>
      <div className={"mobile:ml-1 mobile:mt-3 ml-4 mt-4"}>
        <div
          className={
            "mobile:text-sm mobile:leading-5 text-base leading-6 opacity-60 font-normal"
          }
        >
          {data.subtitle}
        </div>
        <h3
          className={
            "mobile:text-xl mobile:leading-[28px] mt-1 text-[30px] font-medium leading-[38px]"
          }
        >
          {data.tittle}
        </h3>
        <div className={"mobile:space-y-3 mobile:mt-4 mt-6 space-y-2"}>
          {data.numbers.map((el: numberItems, index: number) => (
            <div
              className={"mobile:min-h-[unset] flex items-center min-h-[84px]"}
              key={index}
            >
              <div className={"mobile:w-[104px] font-medium w-[128px]"}>
                <span
                  className={
                    "mobile:leading-6 mobile:text-menuXl opacity-65 text-xl leading-8"
                  }
                >
                  {el.leftArea.pretext}
                </span>
                <span
                  className={
                    "mobile:text-2xl mobile:leading-10 block text-gisGreen text-3xl leading-[52px]"
                  }
                >
                  {el.leftArea.number}
                </span>
              </div>
              <p
                className={"font-normal text-sm leading-[18px] ml-5"}
                dangerouslySetInnerHTML={{ __html: el.rightArea }}
              ></p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          "mobile:min-h-[unset] mobile:py-3 max-w-[336px] w-full rounded-[18px] bg-[#F4F4F4] box-border py-4 px-3 mt-4 min-h-[192px]"
        }
      >
        <div className={"flex items-center"}>
          <Image
            src={`/images/${data.textCard.image}`}
            width={"50"}
            height={"50"}
            alt={data.textCard.name}
            className={"mobile:h-10 mobile:w-10 max-h-[50px]"}
          />
          <div className={"mobile:ml-2 ml-3 text-sm"}>
            <h5 className={"leading-4 font-medium"}>{data.textCard.name},</h5>
            <span
              className={"block mt-1 font-normal leading-[18px] opacity-65"}
            >
              {data.textCard.subtitle}
            </span>
          </div>
        </div>
        <p
          className={
            "mobile:mx-1 mobile:text-base mobile:leading-5 mobile:mit-3 mt-[14px] font-medium text-[18px] leading-6"
          }
        >
          {data.textCard.text}
        </p>
      </div>
      <button
        className={
          "mobile:hidden h-12 mt-3 pt-1 bg-[#F4F4F4] w-full rounded-[12px] flex items-center justify-center"
        }
      >
        <span className={"font-medium text-base leading-6"}>Читать кейс</span>

        <Image
          src={"/images/arrowGreen.svg"}
          width={24}
          height={24}
          alt={"Читать кейс"}
          className={"ml-1 mt-[-2px]"}
        />
      </button>
    </a>
  );
};
