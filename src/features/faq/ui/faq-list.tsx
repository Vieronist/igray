import { FaqItemAccardion } from "@/entities/faq";
import { useState } from "react";

export const FaqList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      title: "Что делать если пришла сумма меньше?",
      content: "Максимально допустимая погрешность 3%",
    },
    {
      title: "Как вернуть Деньги?",
      content:
        "Возврат невозможен по причине невозможности возврата денежных средств платёжной системой.",
    },
    {
      title: "Какие страны можно пополнить?",
      content:
        "Пополнение возможно для аккаунтов России, Казахстана, Беларуси. \n\nПополнение аккаунтов в регионах Крым, ЛНР и ДНР невозможно.",
    },
    {
      title: "Что такое логин?",
      content:
        "Это то, что вы вводите при авторизации, у каждого пользователя он уникальный, а никнейм вы можете менять по своему усмотрению.",
    },
    {
      title: "Что делать если не пришли деньги?",
      content:
        "Если Вам не поступили средства на баланс в течение часа, Свяжитесь с Нами!",
    },
    {
      title: "Что делать если Аккаунт новый?",
      content:
        "При первом пополнении аккаунта Steam, валюта аккаунта может смениться на одну из списка ($, ₸, € и другие).",
    },
  ];

  return (
    <div className="p-[30px] md:px-[40px] md:py-[50px] border-[#1F3238] border border-opacity-10 rounded-[60px] mb-5 ">
      <h6 className="text-[#1F3238] font-extrabold text-[32px] leading-[22px] mb-[22px] tracking-[-0.04em]">
        Частые вопросы
      </h6>
      <ul className="">
      <FaqItemAccardion 
        paddingBottom="pb-7" 
         title="Как Скоро происходит пополнение?"  
         content="В течении 2х минут с Момента Оплаты" 
isActive={activeIndex === 100}
            onClick={() => toggleIndex(100)}
 />
        {faqs.map((faq, index) => (
          <FaqItemAccardion
            key={index}
            title={faq.title}
            content={faq.content}
            isActive={activeIndex === index}
            onClick={() => toggleIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
};