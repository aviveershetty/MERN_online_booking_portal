import React from "react";
import { Redirect } from "react-router-dom";

import CreateOrder from "../components/CreateOrder";
import ErrorMessage from "../components/ErrorMessage";

const CreateOrderPage = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <div>
      <ErrorMessage />
      <CreateOrder />
    </div>
  );
};

export default CreateOrderPage;
