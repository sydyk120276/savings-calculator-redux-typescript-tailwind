import { Dispatch } from 'redux';
import axios from 'axios'

import { UserActionTypes, UserState, UserAction } from '../types/date'
import { IUser } from '../../models/IUser';
import AuthService from '../../services/AuthService';

const initialState: UserState = {
  users: [],
  error: null,
  loading: false,
  isAuth: false,
  user: {} as IUser
};


export const useReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    }
    case UserActionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload,
        isAuth: true
      };
    }
    case UserActionTypes.USER_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    case UserActionTypes.FETCH_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.IS_AUTH: {
      return {
        ...state,
        isAuth: false
      };
    }
    default:
      return state;
  }
};

// export const fetchUsers = () => {
//   return async (dispatch: Dispatch<UserAction>) => {
//     try {
//       dispatch({ type: UserActionTypes.FETCH_USER });
//        const response = await axios(
//          "https://jsonplaceholder.typicode.com/users"
//        );
//        dispatch({ type: UserActionTypes.GET_USERS, payload: response.data })
//     } catch (e) {
//       dispatch({
//         type: UserActionTypes.USER_ERROR,
//         payload: 'Произошла ошибка при загрузке'
//       })
//     }
//   };
// }

export function login(userName: string, email: string, password: string) {
  return async (dispatch: Dispatch<UserAction>) => {
  try {
   const response = await AuthService.login(userName, email, password)
     console.log(response)
   localStorage.setItem('token', response.data.accessToken)
   dispatch({ type: UserActionTypes.SET_USER, payload: response.data.user})
  } catch (e: any) {
    console.log(e.response?.data?.message);
  }
  }
}

export function registration(userName: string, email: string, password: string) {
  return async (dispatch: Dispatch<UserAction>) => {
  try {
   const response = await AuthService.registration(userName, email, password)
     console.log(response.data)
   localStorage.setItem('token', response.data.accessToken)
   dispatch({ type: UserActionTypes.SET_USER, payload: response.data.user})
  } catch (e: any) {

    console.log(e.response?.data?.message);
  }
  }
}

export function logout() {
  return async (dispatch: Dispatch<UserAction>) => {
  try {
   const response = await AuthService.logout()
   localStorage.removeItem('token')
   dispatch({ type: UserActionTypes.SET_USER, payload: {} as IUser})
  } catch (e: any) {
    console.log(e.response?.data?.message)
  }
  }
}
