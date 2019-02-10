const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state); // fazendo uma cópia do state
      newState.counter = state.counter + 1;
      return newState;
    // comentado com a entrada do results no state, com isso é preciso fazer como acima
    // return {
    //   counter: state.counter + 1
    // };
    case "DECREMENT":
      // opção de atualização com spread

      return {
        ...state, // criado novo objeto cópia do state
        counter: state.counter - 1 // atualizando o counter do novo objeto, se não existir é incluído
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }) // concat retorna um novo array, immutabily way. se usar push vai alterar o state original, não  a cópia
      };
  }

  return state;
};

export default reducer;
