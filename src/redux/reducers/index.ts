import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";

import { useReducer } from "./useReducer";

export const rootReducer = combineReducers({
  user: useReducer,
});

export type RootState = ReturnType<typeof rootReducer>
