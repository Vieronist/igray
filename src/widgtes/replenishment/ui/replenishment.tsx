import { TotalAmount } from "@/features/amount";
import { CommissionPanel } from "@/features/commission";
import { CurrencyInput } from "@/features/currency";
import { EmailInput } from "@/features/email";
import { MethodsPayment, PayButton } from "@/features/payments";
import { ProccesingPersonalDataPanel } from "@/features/proccesing-personal-data";
import { PromoInput } from "@/features/promo";
import { SteamLogin } from "@/features/steam";
import {
  Currencies,
  PaymentMethods,
  useCheckPromo,
  useGetCurrencyRate,
} from "@/shared";
import { useEffect, useState } from "react";

export const Replenishment = () => {
  const {
    checkPromo,
    checkPromoIsSuccess,
    data: discountPromo,
  } = useCheckPromo();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sum, setSum] = useState<string>("100");
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

  const { currencyData, currencyIsLoading } = useGetCurrencyRate(currency);

  const handleCheckPromo = (promoValue: string) => checkPromo(promoValue);

  const handleChangePaymentType = (paymentType: PaymentMethods) => {
    setPaymentType(paymentType);
  };

  const handleChangeCurrency = (currency: Currencies) => {
    setCurrency(currency);
    switch (currency) {
      case "RUB":
        setSum("100");
        break;
      case "KZT":
        setSum("500");
        break;
      case "USD":
        setSum("5");
        break;
    }
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangeSum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, ""); //

    setSum(rawValue);
  };

  useEffect(() => {
    if (Number(sum) > 10000) setSum("10000");
  }, [sum]);

  useEffect(() => {
    const numericSum = Number(sum); // Преобразуем sum в число

    if (currency === "RUB" && numericSum) {
      if (numericSum > 100 && numericSum < 1000) {
        setCommission(22);
      } else if (numericSum >= 1000 && numericSum < 3000) {
        setCommission(20);
      } else if (numericSum >= 3000 && numericSum < 10000) {
        setCommission(18);
      }
    } else if (currency === "KZT" && numericSum) {
      if (numericSum > 500 && numericSum < 5000) {
        setCommission(22);
      } else if (numericSum >= 5000 && numericSum < 15000) {
        setCommission(20);
      } else if (numericSum >= 15000 && numericSum < 505617) {
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
      <div className="flex flex-col sm:flex-row gap-[5px] mb-5">
        <SteamLogin login={login} onChange={handleChangeLogin} />
        <TotalAmount
          currencyRate={currencyData?.data}
          currencyIsLoading={currencyIsLoading}
          commission={commission}
          currency={currency}
          sum={sum}
        />
      </div>
      <CommissionPanel currency={currency} />
      <PromoInput discount={discount} checkPromo={handleCheckPromo} />

      <EmailInput />
      <MethodsPayment
        currentPaymentType={paymentType}
        onChange={handleChangePaymentType}
      />
      <PayButton
        currencyRate={currencyData?.data}
        currencyIsLoading={currencyIsLoading}
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
