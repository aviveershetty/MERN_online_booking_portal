import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import decode from "jwt-decode";
import { Provider } from "react-redux";

import { store } from "../store";
import { setToken, setCurrentUser, addError } from "../store/actions";

import Auth from "../components/Auth";
import Order from "../components/Order";
import Orders from "../components/Orders";
import ErrorMessage from "../components/ErrorMessage";
import CreateOrder from "../components/CreateOrder";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const TestPage = props => (
  <Provider store={store}>
    <Fragment>
      <h1>UI Test Page</h1>

      <h2>Testing Error Component: </h2>
      <ErrorMessage />
      <hr />

      <h2>Testing Auth Component: </h2>
      <Auth />
      <hr />

      <h2>Testing Create Order Component: </h2>
      <CreateOrder />
      <hr />

      <h2>Testing Orders Component: </h2>
      <Orders {...props} />
      <hr />

      <h2>Testing Order Component: </h2>
      <Order />
      <hr />
    </Fragment>
  </Provider>
);

export default withRouter(TestPage);
