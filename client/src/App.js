import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  // const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [visible, setVisible] = useState(false)
  // const [profileCard, setProfileCard] = useState(true)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

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
                // setMyJobs(candidate.jobs)
                // fetchProfPhoto(candidate.id)
              }
            )
        }
      }
      )
  }, [loggedIn]);

  return (
<BrowserRouter>
  <NavBar
      loggedIn={loggedIn}
      currentUser={currentUser}
      setLoggedIn={setLoggedIn}
      setCurrentUser={setCurrentUser}
      // setProfileCard={setProfileCard}
      visible={visible}
      setVisible={setVisible}
      // profPhoto={profPhoto}
        />
  <div className="app">
    <Switch>
      <Route exact path="/">
       <Home />
      </Route>

      
      <Route path="/signup">
        <Signup
          setCurrentUser={setCurrentUser}
          setLoggedIn={setLoggedIn}
        />
      </Route>
      <Route exact path="/login">
            <Login
              setCurrentUser={setCurrentUser}
              setLoggedIn={setLoggedIn}
              visible={visible}
              setVisible={setVisible} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {currentUser &&
            <Route exact path="/profile">
              <Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                // setProfileCard={setProfileCard}
                // profPhoto={profPhoto}
             />
            </Route>
          }
    </Switch>
  </div>
</BrowserRouter>
    

  );
}

export default App;