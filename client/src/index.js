import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import HomeLayout from "layouts/Home.js";


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/home`} component={HomeLayout} />
      <Redirect from={`/`} to='/auth/signup' />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
