export interface IOrderItem {
  email: string;
  login: string;
  amount: number;
  amount_usd: number;
  date: string;
}


export interface IOrdersResponse {
    items: IOrderItem[],
    currentPage: number,
    countPages: number
}

export interface IGetOrdersQueryParams {
  page: number;
  limit: number;
 }