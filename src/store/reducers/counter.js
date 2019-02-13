import * as actionTypes from "../actions/actionTypes";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state); // fazendo uma cópia do state
      newState.counter = state.counter + 1;
      return newState;
    // comentado com a entrada do results no state, com isso é preciso fazer como acima
    // return {
    //   counter: state.counter + 1
    // };
    case actionTypes.DECREMENT:
      // opção de atualização com spread

      return {
        ...state, // criado novo objeto cópia do state
        counter: state.counter - 1 // atualizando o counter do novo objeto, se não existir é incluído
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    // case actionTypes.STORE_RESULT:
    //   return {
    //     ...state,
    //     results: state.results.concat({ id: new Date(), value: state.counter }) // concat retorna um novo array, immutabily way. se usar push vai alterar o state original, não  a cópia
    //   };
    // case actionTypes.DELETE_RESULT:
    //   // um forma de excluir uma posição do array immutabily way
    //   // const id = 2; // id q a ser excluído, só um exemplo
    //   // const newArray = [...state.results]; // criando uma cópia do results
    //   // newArray.splice(id, 1); // excluindo a posição do array

    //   // outra forma de excluir usando filter
    //   // filter retorna um novo array, immutabily way
    //   const updatedArray = state.results.filter(
    //     result => result.id !== action.resultElId
    //   );

    //   return {
    //     ...state,
    //     results: updatedArray
    //   };
  }

  return state;
};

export default reducer;
