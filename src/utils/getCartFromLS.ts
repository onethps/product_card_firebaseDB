import { calcTotalPrice } from "utils/calcTotalPrice";
import { IProduct } from "store/product/productSlice";


export const getCartFromLS = () => {
  const data = localStorage.getItem('products')
  const items = data ? JSON.parse(data) : []
  const totalPrice = calcTotalPrice(items)

  return {
    items: items as IProduct[],
    totalPrice
  }
}