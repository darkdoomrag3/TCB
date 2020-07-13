import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import { configureFakeBackend } from './helpers/fake-backend'
import "assets/css/material-dashboard-react.css?v=1.9.0";
import { LoginPage } from 'loginPage/LoginPage';
import { HomePage } from 'HomePage/HomePage';
import { PrivateRoute } from './private-route';
import { Role } from './helpers/role'
import { App } from 'app';

const hist = createBrowserHistory();
configureFakeBackend();


ReactDOM.render(
  <App />
  ,
  document.getElementById("root")
);
