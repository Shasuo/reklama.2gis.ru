import { footerContentBlock_data } from "@/components/parentComponents/footer/footerData";
import { FooterLink } from "@/components/parentComponents/footer/link";

export const DefaultOutput = ({
  data,
}: {
  data: footerContentBlock_data[];
}) => {
  return (
    <>
      {data.map((el: footerContentBlock_data, index: number) => (
        <FooterLink key={index} text={el.name} href={el.link} mt={el.mt} />
      ))}
    </>
  );
};
