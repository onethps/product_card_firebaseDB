import { useDispatch } from "react-redux";
import { AppDispatchType } from "utils/types";


export const useAppDispatch = () => useDispatch<AppDispatchType>()

// export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
//   const dispatch = useAppDispatch()
//
//   const boundActions = useMemo(() => {
//     return bindActionCreators(actions, dispatch)
//   }, [])
//
//   return boundActions
// }
