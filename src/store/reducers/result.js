import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.INCREMENT:
    //   const newState = Object.assign({}, state); // fazendo uma cópia do state
    //   newState.counter = state.counter + 1;
    //   return newState;
    // // comentado com a entrada do results no state, com isso é preciso fazer como acima
    // // return {
    // //   counter: state.counter + 1
    // // };
    // case actionTypes.DECREMENT:
    //   // opção de atualização com spread

    //   return {
    //     ...state, // criado novo objeto cópia do state
    //     counter: state.counter - 1 // atualizando o counter do novo objeto, se não existir é incluído
    //   };
    // case actionTypes.ADD:
    //   return {
    //     ...state,
    //     counter: state.counter + action.value
    //   };
    // case actionTypes.SUBTRACT:
    //   return {
    //     ...state,
    //     counter: state.counter - action.value
    //   };
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    // comentado pois passou a ser feito pelo updateObject acima
    // return {
    //     ...state,
    //     // results: state.results.concat({ id: new Date(), value: state.counter }) // concat retorna um novo array, immutabily way. se usar push vai alterar o state original, não  a cópia
    //     results: state.results.concat({ id: new Date(), value: action.result }) // concat retorna um novo array, immutabily way. se usar push vai alterar o state original, não  a cópia
    //   };
    case actionTypes.DELETE_RESULT:
      // um forma de excluir uma posição do array immutabily way
      // const id = 2; // id q a ser excluído, só um exemplo
      // const newArray = [...state.results]; // criando uma cópia do results
      // newArray.splice(id, 1); // excluindo a posição do array

      // outra forma de excluir usando filter
      // filter retorna um novo array, immutabily way
      // comentado pois passou para o deleteResult
      // const updatedArray = state.results.filter(
      //   result => result.id !== action.resultElId
      // );

      // comentado pois passou para o deleteResult
      // return updateObject(state, { results: updatedArray });
      // comentado pois passou a ser feito pelo updateObject acima
      // return {
      //     ...state,
      //     results: updatedArray
      //   };
      return deleteResult(state, action);
  }

  return state;
};

export default reducer;
