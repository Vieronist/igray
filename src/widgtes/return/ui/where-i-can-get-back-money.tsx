export const WhereICanGetBackMoney = () => {
  return (
    <div className="border-b border-gray-300 py-[40px] mb-[43px]">
      <h3 className="text-[28px] mb-[11px] md:mb-[22px]">
        Куда можно <br className="sm:hidden" /> вернуть деньги?
      </h3>
      <ol className="list-decimal space-y-4">
        <li className="flex gap-4">
          <span className="w-8 text-right text-gray-800">1.</span>
          <span>
          Подарочкая карта, которую далее можно будет потратить в нашем магазине
          </span>
        </li>
        <li className="flex gap-4">
          <span className="w-8 text-right">2.</span>
          <span>
          Webmoney
          </span>
        </li>
        <li className="flex gap-4">
          <span className="w-8 text-right">3.</span>
          <span>
          Счет мобильного телефона (+7......)
          </span>
        </li>
        <li className="flex gap-4">
          <span className="w-8 text-right">4.</span>
          <span>
          STEAM-кошелёк
          </span>
        </li>
      </ol>
    </div>
  );
};
