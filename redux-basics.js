const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer - inicializando state com o initialState
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }

  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription - must be after Store and before Dispatching Action
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

//Dispatching Action
store.dispatch({ type: "INC_COUNTER" }); // type in uppercase is a convention
store.dispatch({ type: "ADD_COUNTER", value: 10 }); // type in uppercase is a convention
console.log(store.getState());
