import { Dispatch } from 'redux';
import axios from 'axios'

import { UserActionTypes, UserState, UserAction } from '../types/date'
import { IUser } from '../../models/IUser';
import AuthService from '../../services/AuthService';
import { AuthResponse } from '../../models/response/AuthResponse';
import { API_URL } from '../../http/index'
import UserService from '../../services/UserService';

const initialState: UserState = {
  users: [],
  error: null,
  loading: false,
  isAuth: false,
  user: {} as IUser,
  activeModalka: false,
  isBasketButton: false,
  isActiveRegistration: false,
};


export const useReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case UserActionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    }
    case UserActionTypes.USER_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case UserActionTypes.FETCH_USER: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case UserActionTypes.IS_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case UserActionTypes.FORM_MODALKA: {
      return {
        ...state,
        activeModalka: action.payload,
      };
    }
    case UserActionTypes.ADD_BASKET_BUTTON: {
      return {
        ...state,
        isBasketButton: action.payload,
      };
    }
    case UserActionTypes.GO_TO_PAGE_REGISTRATION: {
      return {
        ...state,
        isActiveRegistration: action.payload,
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
    alert(e.response?.data?.message);
  }
  }
}

export function registration(userName: string, email: string, password: string) {
  return async (dispatch: Dispatch<UserAction>) => {
  try {
   const response = await AuthService.registration(userName, email, password)
     console.log(response)
   localStorage.setItem('token', response.data.accessToken)
   dispatch({ type: UserActionTypes.SET_USER, payload: response.data.user})
  } catch (e: any) {

    alert(e.response?.data?.message);
  }
  }
}

export function logout() {
  return async (dispatch: Dispatch<UserAction>) => {
  try {
   const response = await AuthService.logout()
   localStorage.removeItem('token')
   dispatch({ type: UserActionTypes.SET_USER, payload: {} as IUser})
   dispatch({ type: UserActionTypes.IS_AUTH, payload: false });
  } catch (e: any) {
    alert(e.response?.data?.message);
  }
  }
}

export function checkAuth() {
   return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.FETCH_USER, payload: true });
  try {
    const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem("token", response.data.accessToken);
    dispatch({
      type: UserActionTypes.SET_USER,
      payload: response.data.user,
    });
  } catch (e: any) {
    alert(e.response?.data?.message);
  } finally {
    dispatch({ type: UserActionTypes.FETCH_USER, payload: false });
  }
   }
}

  export function getUsers() {
    return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await UserService.fetchUsers()
      console.log('response', response)
          dispatch({
            type: UserActionTypes.GET_USERS,
            payload: response.data,
          });
    } catch (e) {
      console.log(e);
    }
    }
  }

  export function setActiveModalka(bool: boolean) {
    return (dispatch: Dispatch<UserAction>) => {
      dispatch({
        type: UserActionTypes.FORM_MODALKA,
        payload: bool,
      });
    }
  };

  export function setBasketButton(bool: boolean) {
    return (dispatch: Dispatch<UserAction>) => {
      dispatch({
        type: UserActionTypes.ADD_BASKET_BUTTON,
        payload: bool,
      });
    };
  };

  export function setActiveRegistration(bool: boolean) {
    return (dispatch: Dispatch<UserAction>) => {
      dispatch({
        type: UserActionTypes.GO_TO_PAGE_REGISTRATION,
        payload: bool,
      });
    };
  };
