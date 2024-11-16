import { TotalAmount } from "@/features/amount";
import { CommissionPanel } from "@/features/commission";
import { CurrencyInput } from "@/features/currency";
import { EmailInput } from "@/features/email";
import { MethodsPayment, PayButton } from "@/features/payments";
import { ProccesingPersonalDataPanel } from "@/features/proccesing-personal-data";
import { PromoInput } from "@/features/promo";
import { SteamLogin } from "@/features/steam";
import { Currencies, PaymentMethods, useCheckPromo } from "@/shared";
import { useEffect, useState } from "react";

export const Replenishment = () => {
  const {
    checkPromo,
    checkPromoIsSuccess,
    data: discountPromo,
  } = useCheckPromo();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sum, setSum] = useState<number | null>(100);
  const [currency, setCurrency] = useState<Currencies>("RUB");
  const [login, setLogin] = useState("");
  const [commission, setCommission] = useState(22);
  const [discount, setDiscount] = useState(0);
  const [paymentType, setPaymentType] = useState<PaymentMethods>("SPB");

  useEffect(() => {
    console.log(discountPromo);
    if (checkPromoIsSuccess) {
      setDiscount(discountPromo?.discount_percentage || 0);
    }
  }, [checkPromoIsSuccess, discountPromo, discountPromo?.discount_percentage]);

  const handleCheckPromo = (promoValue: string) => checkPromo(promoValue);

  const handleChangePaymentType = (paymentType: PaymentMethods) => {
    setPaymentType(paymentType);
  };

  const handleChangeCurrency = (currency: Currencies) => {
    setCurrency(currency);
    switch (currency) {
      case "RUB":
        setSum(100);
        break;
      case "KZT":
        setSum(500);
        break;
      case "USD":
        setSum(5);
        break;
  
    }
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangeSum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSum(Number(e.target.value));
  };

  useEffect(() => {
    if (currency === "RUB" && sum) {
      if (sum > 100 && sum  < 1000) {
        setCommission(22);
      } else if (sum >= 1000 && sum < 3000) {
        setCommission(20);
      } else if (sum >= 3000 && sum < 10000) {
        setCommission(18);
      }
    } else if (currency === "KZT" && sum) {
      if (sum > 500 && sum < 5000) {
        setCommission(22);
      } else if (sum >= 5000 && sum < 15000) {
        setCommission(20);
      } else if (sum >= 15000 && sum < 505617) {
        setCommission(18);
      }
    }
  }, [sum, currency]);

  return (
    <section className="bg-[#ffffff] rounded-[60px] px-[10px] py-[50px] mb-[35px] md:w-[540px] md:mx-auto 2xl:px-[50px]">
      <h3 className="font-extrabold text-[22px] mb-[20px] text-gray-800">
        Быстрое пополнение
      </h3>
      <CurrencyInput
        onChangeCurrency={handleChangeCurrency}
        onChangeSum={handleChangeSum}
        currency={currency}
        sum={sum}
      />
      <div className="flex flex-col sm:flex-row gap-[15px] mb-5">
        <SteamLogin login={login} onChange={handleChangeLogin} />
        <TotalAmount commission={commission} currency={currency} sum={sum} />
      </div>
      <CommissionPanel currency={currency} />
      <PromoInput discount={discount} checkPromo={handleCheckPromo} />

      <EmailInput />
      <MethodsPayment
        currentPaymentType={paymentType}
        onChange={handleChangePaymentType}
      />
      <PayButton
        discount={discount}
        currency={currency}
        totalAmount={sum}
        commission={commission}
        login={login}
        method={paymentType}
      />
      <ProccesingPersonalDataPanel />
    </section>
  );
};
