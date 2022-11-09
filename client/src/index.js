import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};


ReactDOM.render(
  <ChakraProvider>
  <Web3ReactProvider getLibrary={getLibrary}>
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Redirect from={`/`} to='/auth/signup' />
    </Switch>
  </HashRouter>,
  </Web3ReactProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
