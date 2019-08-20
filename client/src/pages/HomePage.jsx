import React from "react";

import ErrorMessage from "../components/ErrorMessage";
import Orders from "../components/Orders";

const HomePage = props => (
  <div>
    <ErrorMessage />
    <Orders {...props} />
  </div>
);

export default HomePage;
