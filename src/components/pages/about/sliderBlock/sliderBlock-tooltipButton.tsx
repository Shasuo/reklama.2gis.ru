interface mobileButton {
  index: number;
  mt: number;
  ml: number;
}
export const SliderBlockTooltipButton = ({
  data,
  click,
}: {
  data: mobileButton;
  click: () => void;
}) => {
  if (data.mt) {
  }
  return (
    <button
      style={{ top: `${data.mt}px`, left: `${data.ml}px` }}
      className={
        "w-8 max-w-8 min-w-8 h-8 max-h-8 min-h-8 bg-gisGreen text-white box-border pt-1 font-medium text-[12px] leading-[14px] absolute rounded-[50%]"
      }
      onClick={click}
    >
      {data.index + 1}
    </button>
  );
};
