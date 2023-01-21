// import { createBrowserHistory } from "history";
// import { createStore, applyMiddleware, compose } from "redux";
// import { routerMiddleware } from "connected-react-router";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// import rootReducer from "./reducers";

// export const history = createBrowserHistory();

// const preloadedState = {};

// const middleware = [routerMiddleware(history), thunk];

// const composedEnhancers = applyMiddleware(...middleware);

// const store = createStore(
//   rootReducer(history),
//   preloadedState,
//   composedEnhancers
// );

// export default store;


import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));