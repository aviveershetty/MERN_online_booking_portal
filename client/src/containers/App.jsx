import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { setToken, setCurrentUser, addError } from "../store/actions";
import decode from "jwt-decode";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () => (
  <Provider store={store}>
    <div>App works</div>
  </Provider>
);
export default App;
