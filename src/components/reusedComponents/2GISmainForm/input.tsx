export const Input = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={
        "focus:outline-none text-base leading-6 font-normal text-white box-border bg-[#35B439] w-full h-14 pl-3 rounded-[12px] mainFormInput"
      }
    />
  );
};
