export const MainHeadline = ({ text }: { text: string }) => {
  return (
    <h2
      className={
        "mobile:text-[30px] mobile:leading-[38px] leading-[52px] text-3xl font-medium"
      }
    >
      {text}
    </h2>
  );
};
