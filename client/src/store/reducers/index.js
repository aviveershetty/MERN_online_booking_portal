import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import { orders, currentOrder } from "./orders";

export default combineReducers({
  auth,
  error,
  orders,
  currentOrder
});
