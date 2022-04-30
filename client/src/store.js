import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllMealsReducer,
  addMealReducer,
  getMealByIdReducer,
  editMealReducer,
} from "./reducers/mealReducers";
import { cartReducer } from "./reducers/cartReducer";
import {
  loginUserReducer,
  registerUserReducer,
  getAllUsersReducer,
} from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
} from "./reducers/orderReducer";
import {
  getAllCustomersReducer,
  addCustomerReducer,
} from "./reducers/customerReducer";
import { deliveryReducer } from "./reducers/deliveryReducer";

const finalReducer = combineReducers({
  getAllMealsReducer: getAllMealsReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addMealReducer: addMealReducer,
  getMealByIdReducer: getMealByIdReducer,
  editMealReducer: editMealReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
  getAllCustomersReducer: getAllCustomersReducer,
  addCustomerReducer: addCustomerReducer,
  deliveryReducer: deliveryReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const delivery = localStorage.getItem("delivery")
  ? JSON.parse(localStorage.getItem("delivery"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
  delivery: {
    deliveryReducer: delivery,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
