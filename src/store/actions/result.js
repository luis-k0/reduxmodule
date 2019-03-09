import * as actionTypes from "./actionTypes";

// INÍCIO - storeResult alterado usando Redux Thunk para executar de forma síncrona
export const saveResult = res => {
  // exemplo de como o action creator pode ser usado
  //   const updatedRes = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

// setTimemout é executado de forma síncrono usando Redux Thunk
// sem Redux Thunk não funcionaria
export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};
// FIM  -

export const deleteResult = resId => {
  // setTimeout(() => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resId
  };
  // }, 2000);
};
