import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import { getCurrentOrder } from "../store/actions";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import TestPage from "../pages/TestPage";
import OrderPage from "../pages/OrderPage";
import CreateOrderPage from "../pages/CreateOrderPage";

const RouteViews = ({ auth, getCurrentOrder }) => (
  <main>
    <Switch>
      <Route exact path="/" render={props => <HomePage {...props} />} />
      <Route
        exact
        path="/login"
        render={() => (
          <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
        )}
      />
      <Route
        exact
        path="/register"
        render={() => (
          <AuthPage
            authType="register"
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      />
      <Route
        exact
        path="/order/new"
        render={() => (
          <CreateOrderPage isAuthenticated={auth.isAuthenticated} />
        )}
      />
      <Route
        exact
        path="/order/:id"
        render={props => (
          <OrderPage getOrder={id => getCurrentOrder(id)} {...props} />
        )}
      />
      <Route exact path="/test" render={() => <TestPage />} />
    </Switch>
  </main>
);

export default withRouter(
  connect(
    store => ({ auth: store.auth }),
    { getCurrentOrder }
  )(RouteViews)
);
