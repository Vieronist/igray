import { FaqItemAccardion } from "@/entities/faq";

export const FaqList = () => {
  return (
    <div className="p-[30px] md:px-[40px] md:py-[50px] border-[#1F3238] border border-opacity-10 rounded-[60px] mb-5">
      <h6 className="text-[#1F3238] font-extrabold text-[32px] leading-[22px] mb-[22px] tracking-[-0.04em]">
        Частые вопросы
      </h6>
      <ul>
        <FaqItemAccardion
          title="Как скоро игра будет у меня?"
          content="тебя заскамили)))"
        />
        <FaqItemAccardion
          title="Какие есть способы оплаты??"
          content="криптой чтобы тебя на изи заскамить"
        />
        <FaqItemAccardion
          title="Можно ли вернуть игру?"
          content="нет"
        />
         <FaqItemAccardion
          title="Как связаться с поддержкой?"
          content="напиши на почту"
        />
      </ul>
    </div>
  );
};
