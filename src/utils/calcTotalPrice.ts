import { IProduct } from "store/product/productSlice";

export const calcTotalPrice = (data:IProduct[]) => {
  return +data.reduce((acc, val) => acc += +val.price * val.count, 0).toFixed(2)
}