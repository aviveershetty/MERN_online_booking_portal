import { SET_ORDERS, SET_CURRENT_ORDER } from "../actionTypes";

export const orders = (state = [], action) => {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

export const currentOrder = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_ORDER:
      return action.order;
    default:
      return state;
  }
};
