import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getOrders, getUserOrders, getCurrentOrder } from "../store/actions";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    const { getOrders } = this.props;
    getOrders();
  }

  handleSelect(id) {
    const { history } = this.props;
    history.push(`/order/${id}`);
  }

  render() {
    const { auth, getOrders, getUserOrders } = this.props;
    const orders = this.props.orders.map(order => (
      <li onClick={() => this.handleSelect(order._id)} key={order._id}>
        {order.location} {order.created}
      </li>
    ));

    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div>
            <button onClick={getOrders}>All Orders</button>
            <button onClick={getUserOrders}>My Orders</button>
          </div>
        )}
        <ul>{orders}</ul>
      </Fragment>
    );
  }
}

export default connect(
  store => ({
    auth: store.auth,
    orders: store.orders
  }),
  { getOrders, getUserOrders, getCurrentOrder }
)(Orders);
