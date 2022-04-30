export const trueDelivery = () => async (dispatch) => {
  dispatch({ type: "TRUE_DELIVERY" });
};

export const falseDelivery = () => async (dispatch) => {
  dispatch({ type: "FALSE_DELIVERY" });
};
