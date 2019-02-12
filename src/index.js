import React from "react";
import ReactDOM from "react-dom";
// combineReducers para juntar os reducers counter e result
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import reducer from "./store/reducer";  // comentado pq os reducers foram separados abaixo
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

// combinando os reducers em 1
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

// usado pelo redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// criando o store do redux
// const store = createStore(reducer); // criando store para o reducer único
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
); // criando o store para o reducer combinado

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
