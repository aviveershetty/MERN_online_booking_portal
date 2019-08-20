import React from "react";
import { connect } from "react-redux";

const Order = ({ order }) => {
  return (
    <div>
      <h3>{order.quantity}</h3>
      <h3>{order.location}</h3>
      <h3>{order.created}</h3>
    </div>
  );
};

export default connect(store => ({
  order: store.currentOrder
}))(Order);
