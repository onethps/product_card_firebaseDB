import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "store/reducers";
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})


// @ts-ignore
window.store = store
