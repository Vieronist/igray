export interface LoadingErrorState {
  loading: boolean;
  error: boolean;
}

export type Order = {
  id: number;
  name_game: string;
  name_product: string;
  price: number;
  currency: string;
  email: string;
  otp: number | string;
  comment: string;
  date: string;
  timer?: string;
  creator?: string;
  worker?: string;
  status?: string;
};

export type OrderData = {
  order_id: number;
  login?: string;
  error_type?: number;
  file?: File | null;
};

export type price = { counter: string[]; last_update: string };
export interface orderData {
  create: {
    data: [];
  } & LoadingErrorState;
  order: {
    data: {
      orders: Order[];
    };
    accept: [];
  } & LoadingErrorState;
  price: price;
  amount: {
    notification: [];
    update_others: [
      {
        update_orders: [
          {
            new: number;
          },
          {
            work: number;
          },
        ];
        description: [{ [key: string]: boolean }];
      },
    ];
  } | null;
}
