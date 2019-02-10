import React from "react";
import ReactDOM from "react-dom";
// combineReducers para juntar os reducers counter e result
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import reducer from "./store/reducer";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

// combinando os reducers em 1
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// criando o store do redux
// const store = createStore(reducer); // criando store para o reducer único
const store = createStore(rootReducer); // criando o store para o reducer combinado

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
