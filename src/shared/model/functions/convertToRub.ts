import { Currencies } from "../types/currency.interface";

export const convertFromRub = (amount: number, currency: Currencies, exchangeRates: { usdToRub: number; kztToRub: number }): string => {
    const { usdToRub, kztToRub } = exchangeRates;

    switch (currency) {
      case "USD":
        return (amount * usdToRub).toFixed(2); // Переводим рубли в доллары
      case "KZT":
        return ((100 / kztToRub ) * amount).toFixed(2); // Переводим рубли в тенге
      case "RUB":
      default:
        return amount.toFixed(1); // Если уже в рублях, возвращаем сумму
    }
  };