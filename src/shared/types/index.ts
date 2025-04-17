export interface ICreateOrderValues {
  comment: string;
  email: string;
  name_game: string;
  name_product: string;
  otp: string | number;
  worker: string;
  timer?: string;
  files?: File[];
  payment_info: [number | string, string][];
}