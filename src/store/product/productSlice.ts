import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "api/firebase-config";


export type IProduct = {
  name: string
  adds: string
  price: string
  photo: string
  id:string
  count:number

}

type initProductType = {
  products: IProduct[],
  cartCount: number | null,
  cartTotalPrice: number | null,
}

const initialState: initProductType = {
  products: [],
  cartCount: null,
  cartTotalPrice: null,
}

export const slice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setProductsTC.fulfilled, (state, action) => {
        console.log('reducer')
        if (action.payload) {
          state.products = action.payload.products
        }

      })
  }
})



export const setProductsTC = createAsyncThunk('product/set-products', async (param, thunkAPI) => {
  console.log('thunk')
  const productsCollectionRef = collection(db, 'products')
  try {
    const data = await getDocs(productsCollectionRef)
    console.log('await data')
    const getProductsFromDb:IProduct[] = data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
    return {products: getProductsFromDb }
  } catch (e) {
    console.log(e)
  }

})


export const productReducer = slice.reducer