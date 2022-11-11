import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
// import './index.css';

import SignUp from "./SignUp";
import SignIn from "./SignIn";


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
    <BrowserRouter>
        <Switch>
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
        </Switch>
    </BrowserRouter>
    )
}