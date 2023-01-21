import { IUser } from "../../models/IUser";

export enum UserActionTypes {
  GET_USERS = "@date/GET_USERS",
  SET_USER = "@date/SET_USER",
  IS_AUTH = "@date/IS_AUTH",
  USER_ERROR = "@date/USER_ERROR",
  FETCH_USER = "@date/FETCH_USER",
}

export interface UserState {
  users: any[],
  loading: boolean,
  error: null | string,
  isAuth: boolean,
  user: IUser
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
}
interface IsAuthAction {
  type: UserActionTypes.IS_AUTH;
}

export type UserAction =
  | GetUsersAction
  | UserErrorAction
  | FetchUserAction
  | IsAuthAction
  | SetUserAction;

