import API from "../../services/api";
import { SET_ORDERS, SET_CURRENT_ORDER } from "../actionTypes";
import { addError, removeError } from "./error";

export const setOrders = orders => ({
  type: SET_ORDERS,
  orders
});

export const setCurrentOrder = order => ({
  type: SET_CURRENT_ORDER,
  order
});

export const getOrders = () => {
  return async dispatch => {
    try {
      const orders = await API.call("get", `orders`);
      dispatch(setOrders(orders));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

export const getUserOrders = () => {
  return async dispatch => {
    try {
      const orders = await API.call("get", "orders/user");
      dispatch(setOrders(orders));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

export const createOrder = data => {
  return async dispatch => {
    try {
      const order = await API.call("post", "orders", data);
      dispatch(setCurrentOrder(order));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

export const getCurrentOrder = path => {
  return async dispatch => {
    try {
      const order = await API.call("get", `orders/${path}`);
      dispatch(setCurrentOrder(order));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};
