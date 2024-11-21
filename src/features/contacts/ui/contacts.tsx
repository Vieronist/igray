import { ContactItem } from "@/entities/contacts";
import { FC } from "react";

interface IProps {
  title: string;
  phone: string;
  schedule: string;
  email: string;
  svgs: string[];
}

export const Contacts: FC<IProps> = ({
  title,
  phone,
  schedule,
  email,
  svgs,
}) => {
  return (
    <article className="bg-white rounded-[50px] p-[30px] h-[320px]">
      <h6 className="text-[#4FCA9C] mb-[24px]">{title}</h6>
      <p className="text-[32px] leading-[35px]">{phone}</p>
      <p className="text-[#ADADB8] mb-[21px] text-[12px]">{schedule}</p>
      <p className="mb-[42px]">{email}</p>
      <ul className="flex gap-[10px]">
        {svgs.map((svg, idx) => (
          <ContactItem key={idx} path={svg} />
        ))}
      </ul>
    </article>
  );
};
