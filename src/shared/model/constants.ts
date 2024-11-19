

export const symbols = {
    RUB: "₽",
    KZT: "₸",
    USD: "$",
  };

export const BASE_URL = "https://www.igray24back.ru"

export const enum SERVICE_URL {
  STEAM = "steam",
  ADMIN = "admin"
}

export const enum QUERY_KEYS {
  STEAM = "steam",
  ADMIN = "admin",
  GET_STEAM_ORDERS = "get_steam_orders",
  CARRENCY_RATE = "currency_rate"
}

export const navigationLinks = ["PC","Xbox","PlayStation","Nintendo","Mobile"]

export const minSums = {
  USD: 5,
  RUB: 100,
  KZT: 500,
};

export const maxSums = {
  USD: 100,
  RUB: 10000,
  KZT: 15000,
};