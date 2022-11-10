import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import './index.css';

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import SignUp from "views/Pages/SignUp";
import SignIn from "views/Pages/SignIn";
import Dashboard from "views/Dashboard/Dashboard";


export default function App() {

const [loggedIn, setLoggedIn] = useState(false)
const [currentUser, setCurrentUser] = useState({})
const history = useHistory();

  // log in fetch
  useEffect(() => {
    fetch(`/logged_in`)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true)
          res.json()
            .then(
              user => {
                setCurrentUser(user)
                // history.push('/admin/dashboard');
                // setMyJobs(User.jobs)
                // fetchProfPhoto(User.id)
              }
            )
        }
      }
    )
  }, [loggedIn]);

return (
    <HashRouter>
        <Switch>
        <Redirect from={`/`} to='/auth/signup' />
        <Route path={`/signup`}>
        <SignUp
          setCurrentUser={setCurrentUser}
          setLoggedIn={setLoggedIn}
        />
        </Route>
        <Route  path={`/signin`}>
            <SignIn
              setCurrentUser={setCurrentUser}
              setLoggedIn={setLoggedIn}
            />
        </Route>
        <Route  path={`/auth`}>
            <AuthLayout 
            loggedIn={loggedIn}
            currentUser={currentUser}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
            />
        </Route>

        <Route path={`/admin`}>
            <AdminLayout 
            loggedIn={loggedIn}
            currentUser={currentUser}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
            />
        </Route>
        </Switch>
    </HashRouter>
    )
}