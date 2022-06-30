import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "utils/getCartFromLS";
import { IProduct } from "store/product/productSlice";
import { calcTotalPrice } from "utils/calcTotalPrice";


export type initCartType = {
  items: IProduct[],
  totalPrice: number
}

const initialState:initCartType = getCartFromLS()

export const cartSlice = createSlice({
  name: 'cartS',
  initialState: initialState,
  reducers: {
    plusItemAC(state, action: PayloadAction<IProduct>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items)
      localStorage.setItem("products", JSON.stringify(state.items));
    },
    minusItemAC(state, action: PayloadAction<IProduct>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      const findInx = state.items.findIndex(obj => obj.id === action.payload.id)
      if (findItem) {
        findItem.count--;
        if (findItem.count < 0) {
          state.items.splice(findInx, 1)
        }
      }

      state.totalPrice = calcTotalPrice(state.items)
      localStorage.setItem("products", JSON.stringify(state.items));


    }
  },
})



export const cartReducer = cartSlice.reducer
export const {plusItemAC, minusItemAC} = cartSlice.actions