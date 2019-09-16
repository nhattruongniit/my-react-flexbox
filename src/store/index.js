import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import rootReducer from "./root.reducers";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
