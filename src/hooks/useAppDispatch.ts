import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from '../redux/reducers/useReducer'

export const useAppDispatch = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UserActionCreators, dispatch);
}