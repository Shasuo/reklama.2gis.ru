import { useEffect, useRef, useState } from "react";

export const SliderBlockTooltip = ({
  mt,
  content,
  title,
  active,
  click,
}: {
  mt: number;
  content: string;
  title: string;
  active?: boolean;
  click: () => void;
}) => {
  const tooltipRef = useRef<HTMLParagraphElement | null>(null);
  const [trueMt, setTrueMt] = useState(0);

  useEffect(() => {
    if (tooltipRef.current) {
      if ("offsetHeight" in tooltipRef.current) {
        const tooltipHeight = tooltipRef.current.offsetHeight;
        const calculatedMt = mt - tooltipHeight - 8;
        setTrueMt(calculatedMt > 0 ? calculatedMt : 0);
      }
    }
  }, [mt, content]);
  if (active) {
    return (
      <>
        <p
          ref={tooltipRef}
          className={
            "hover:cursor-pointer absolute w-full bg-white rounded-[12px] px-4 py-3 shadow text-sm leading-5 max-w-10-px-borders z-20 font-normal"
          }
          style={{
            top: `${trueMt}px`,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onClick={click}
        >
          <span className={"font-medium text-base mb-1 block"}>{title}</span>
          {content}
        </p>
        <div
          className={"z-0 absolute w-full h-full top-0 left-0"}
          onClick={click}
        ></div>
      </>
    );
  } else return null;
};
