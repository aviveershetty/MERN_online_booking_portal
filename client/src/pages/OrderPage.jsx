import React from "react";

import Order from "../components/Order";
import ErrorMessage from "../components/ErrorMessage";

const OrderPage = ({ match, getOrder }) => {
  getOrder(match.params.id);

  return (
    <div>
      <ErrorMessage />
      <Order />
    </div>
  );
};

export default OrderPage;
