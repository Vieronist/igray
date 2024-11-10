export interface ICheckPromo {
    promo: string
}

export interface IPromoResponse {
    discount_percentage: number
}


export interface IPayment {
  login: string; // email which user used to login in steam
  currency: "KZT" | "RUB";
  payment_type: "SPB" | "CARD" | "USDT";
  amount: number; // before commission
  amout_after: number; // after commission
}

export interface IPaymentResponse {
    link: string
}