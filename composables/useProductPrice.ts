import { getMaxPrice } from "@/utils/index";

export const useProductPrice = () =>
  useState<number[]>("product-price", () => [0, getMaxPrice()]);
