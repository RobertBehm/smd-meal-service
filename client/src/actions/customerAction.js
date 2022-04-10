import axios from "axios";
export const getAllCustomers = () => async (dispatch) => {
  dispatch({ type: "GET_CUSTOMERS_REQUEST" });

  try {
    const response = await axios.get("/api/customers/getallcustomers");
    console.log(response);
    dispatch({ type: "GET_CUSTOMERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_CUSTOMERS_FAILED", payload: error });
  }
};

export const addCustomer = (customer) => async (dispatch) => {
  dispatch({ type: "ADD_CUSTOMER_REQUEST" });

  try {
    const response = await axios.post("/api/customers/addcustomer", {
      customer,
    });
    console.log(response);
    dispatch({ type: "ADD_CUSTOMER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_CUSTOMER_FAILED", payload: error });
  }
};
