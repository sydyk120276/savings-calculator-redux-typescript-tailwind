import { IUser } from "../../models/IUser";

export enum UserActionTypes {
  GET_USERS = "@date/GET_USERS",
  SET_USER = "@date/SET_USER",
  IS_AUTH = "@date/IS_AUTH",
  USER_ERROR = "@date/USER_ERROR",
  FETCH_USER = "@date/FETCH_USER",
  FORM_MODALKA = "@date/FORM_MODALKA",
  ADD_BASKET_BUTTON = "@date/ADD_BASKET_BUTTON",
  GO_TO_PAGE_REGISTRATION = "@date/GO_TO_PAGE_REGISTRATION",
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
  isAuth: boolean;
  user: IUser;
  activeModalka: boolean;
  isBasketButton: boolean;
  isActiveRegistration: boolean;
}

interface GetUsersAction {
  type: UserActionTypes.GET_USERS,
  payload: any[]
}
interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: IUser;
}
interface UserErrorAction {
  type: UserActionTypes.USER_ERROR,
  payload: string
}
interface FetchUserAction {
  type: UserActionTypes.FETCH_USER;
  payload: boolean
}
interface IsAuthAction {
  type: UserActionTypes.IS_AUTH;
  payload: boolean
}
interface FormModalkaAction {
  type: UserActionTypes.FORM_MODALKA;
  payload: boolean;
}
interface AddBasketAction {
  type: UserActionTypes.ADD_BASKET_BUTTON;
  payload: boolean;
}
interface GoToRegistrationAction {
  type: UserActionTypes.GO_TO_PAGE_REGISTRATION;
  payload: boolean;
}

export type UserAction =
  | GetUsersAction
  | UserErrorAction
  | FetchUserAction
  | IsAuthAction
  | SetUserAction
  | FormModalkaAction
  | AddBasketAction
  | GoToRegistrationAction;

