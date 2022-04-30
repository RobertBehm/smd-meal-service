export const deliveryReducer = (state = {}, action) => {
  switch (action.type) {
    case "TRUE_DELIVERY":
      return {
        ...state,
        delivery: true,
      };

    case "FALSE_DELIVERY":
      return {
        ...state,
        delivery: false,
      };

    default:
      return state;
  }
};
