import React from "react";
import { connect } from "react-redux";

const Order = ({ order }) => {
  return (
    <div>
      <h2 className="order-title">
        {order.location} {order.created}
      </h2>
      <div className="button_center">
        <b>Load: </b>
        <p>{order.quantity} kg</p>

        <b>Location: </b>
        <p> {order.location}</p>

        <b>Order date: </b>
        <p> {order.created}</p>
      </div>
    </div>
  );
};

export default connect(store => ({
  order: store.currentOrder
}))(Order);
