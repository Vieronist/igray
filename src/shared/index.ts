export { Container } from "./ui/container";

export { SliderButton } from "./ui/slider-button";

export type { Currencies } from "./model/types/currency.interface";

export {
  symbols,
  SERVICE_URL,
  QUERY_KEYS,
  minSums,
  maxSums,
} from "./model/constants";

export type {
  ICheckPromo,
  IPayment,
  IPaymentResponse,
  IPromoResponse,
} from "./model/types/steam.interface";

export { usePayment, useCheckPromo } from "./api/queries/steam.queries";

export type { PaymentMethods } from "./model/types/payment.interface";

export type {
  AdminLogin,
  AdminloginResponse,
} from "./model/types/admin.interface";

export { navigationLinks } from "./model/constants";

export { useLoginAdmin } from "./api/queries/admin.queries";

export { AlertModal } from "./ui/alert-modal";

export type {
  IGetOrdersQueryParams,
  IOrdersResponse,
  IOrderItem,
} from "./model/types/orders.interface";

export { useGetOrders } from "./api/queries/orders.queries";

export { useGetCurrencyRate } from "./api/queries/currency.queries";

export { convertFromRub } from "./model/functions/convertToRub";

export type { IPaymentInputs } from "./model/types/payment.interface";

export { extractNumber } from "./model/functions/extractSum";

export { countTotalAmoutWithCommission } from "./model/functions/countCommision";

export { useServiceStore } from "./model/store/service.store";
