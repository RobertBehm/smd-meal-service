export const getAllCustomersReducer = (state = { customers: [] }, action) => {
  switch (action.type) {
    case "GET_CUSTOMERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_CUSTOMERS_SUCCESS":
      return {
        loading: false,
        customers: action.payload,
      };
    case "GET_CUSTOMERS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_CUSTOMER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_CUSTOMER_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
