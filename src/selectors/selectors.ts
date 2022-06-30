import { AppRootStateType } from "utils/types";

export const productList = (state:AppRootStateType) => state.product.products
export const totalPrice = (state:AppRootStateType) => state.cart.totalPrice
export const itemsInCart = (state:AppRootStateType) => state.cart.items