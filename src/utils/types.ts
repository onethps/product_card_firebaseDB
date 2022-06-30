import { store } from "store/store";
import { rootReducer } from "store/reducers";

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch