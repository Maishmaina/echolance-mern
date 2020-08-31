import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Home from "./components/layout/Home";
import Navigation from "./components/layout/Navigation";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import SingleJob from "./components/singleJob/SingleJob";
import Myaccount from "./components/myaccount/Myaccount";
//adm
import PrivateRoutePanel from "./components/common/PrivateRoutePanel";
import AllJobs from "./components/panel/job/AllJobs";
import AllUsers from "./components/panel/user/AllUsers";

import "./App.css";
//check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/job/:id" component={SingleJob} />
            <PrivateRoute exact path="/myaccount" component={Myaccount} />
            <PrivateRoutePanel
              exact
              path="/panel/alljobs"
              component={AllJobs}
            />
            <PrivateRoutePanel
              exact
              path="/panel/allusers"
              component={AllUsers}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
