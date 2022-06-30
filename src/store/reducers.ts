import { combineReducers } from "redux";
import { productReducer } from "store/product/productSlice";
import { cartReducer } from "store/cart/cartSlice";

export const rootReducer = combineReducers({
  product:productReducer,
  cart:cartReducer,

})