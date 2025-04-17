export interface ISteam {
  data: { RUB: number; KZT: number; UAH: number } | null;
  deposit: null | string | number;
  error: boolean;
  loading: boolean;
  success: boolean
}
