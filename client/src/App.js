import React, { useState, Component, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme as customTheme } from './theme';
import ColorModeContext from './components/ColorModeContext';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Trading from './pages/Trading';
import Tracking from './pages/Tracking'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import axios from 'axios';

// import axios from 'axios'

// const csrfToken = document.querySelector('[name="csrf-token"]').content
// axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken


const App = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [coins, setCoins] = useState([])
    const [membership, setMembership] = useState("")
    const [myBots, setMyBots] = useState([])
    const [bots, setBots] = useState([]);
    const [isActive, setIsActive] = useState(false)


    const [mode, setMode] = useState('dark');
    const colorMode = useMemo(
        () => ({
            // The theme mode switch will invoke this method
            toggleColorMode: () => {
                window.localStorage.setItem('themeMode', mode === 'dark' ? 'light' : 'dark');
                setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
            },
        }), 
        [mode],
    );

    useEffect(() => {
        try {
            const localTheme = window.localStorage.getItem('themeMode');
            localTheme ? setMode(localTheme) : setMode('dark');
        } catch {
            setMode('dark');
        }
    }, []);

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
                setMyBots(user.bots)
              }
            )
            if (currentUser.membership == true) {
                setMembership(true)
            } else {
                setMembership(false)
            }
            console.log(currentUser.membership)
        }
      }
    )
  }, [loggedIn]);


//  // active bots fetch
//  useEffect(() => {
//     fetch(`/users/${currentUser.id}`)
//        .then((res) => res.json())
//             .then(
//               user => {
//                 setCurrentUser(user)
//                 setMyBots(user.bots)
//               }
//             )
//             if (currentUser.membership == true) {
//                 setMembership(true)
//             } else {
//                 setMembership(false)
//             }
//             console.log(currentUser.bots)
//         }
//       }
//     )
//   }, [loggedIn]);

function onAddBots(addedBot) {
    setIsActive(true)
    (setMyBots([...myBots, addedBot]))
}



    //   function onAddBots(addedBot) {
    //     // key={myBot.id}
    //     // const add = {
    //     //   user_id: currentUser.id,
    //     //   bot_id: addedBot.id,
    //     //   added: true
    //     // }
    //     // fetch(`/users/${currentUser}`, {
    //     //   method: "POST",
    //     //   headers: { "Content-Type": "application/json" },
    //     //   body: JSON.stringify(add),
    //     // })
    //     //   .then((res) => res.json())
    //     //   .then
    //       (setMyBots([...myBots, addedBot]))
    
    //   }
  
  function onAdd() {
    const add = {
      user_id: currentUser.id,
      coin_id: coin.id,
      added: true
    }
    fetch('/added_coins', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then(setMyCoins([...coins, coin]))

  }


    
    const fetchBots = () => {
        axios.get('/bots', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setBots(response.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchBots();
    }, []);




    // const fetchMyBots = () => {
    //     axios.get(`/active_bots`, {
    //         headers: {
    //             'Accept': 'application/json',
    //         }
    //     })
    //     .then(response => {
    //         setMyBots(response.data);
    //         console.log(myBots)
    //     })
    //     .catch(error => console.log(error));
    // };

    // useEffect(() => {
    //     fetchMyBots();
    // }, []);

    
//   function onRemove(removedJob) {
//     fetch(`/remove?job=${removedJob.id}&candidate=${currentCandidate.id}`, { 
//       method: "DELETE" })
//       .then(res => {
//         if (res.ok) {
//           setMyJobs(myJobs.filter(job => job.id !== removedJob.id))
//         }
//         else {
//           console.log("error")
//         }

//       })

//   }


    return (
        <HelmetProvider>
            <Helmet 
            />
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={customTheme[mode]}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Layout
                         loggedIn={loggedIn}
                         currentUser={currentUser}
                         setLoggedIn={setLoggedIn}
                         setCurrentUser={setCurrentUser} 
                         setMembership={setMembership}
                         membership={membership} 
                         >
                            <Routes>
                                <Route exact path='/' element=
                                {<Dashboard 
                                    setMembership={setMembership}
                                    membership={membership}
                                    currentUser={currentUser}
                                    loggedIn={loggedIn}
                                    onAdd={onAdd}
                                    coins={coins}
                                    setCoins={setCoins}

                                />} />
                                <Route exact path='/login' 
                                    element={
                                    <Login 
                                    setCurrentUser={setCurrentUser}
                                    setLoggedIn={setLoggedIn}
                                    />} 
                                />

                                <Route exact path='/signup' 
                                    element=
                                    {<Signup 
                                    setCurrentUser={setCurrentUser}
                                    setLoggedIn={setLoggedIn}
                                    />} 
                                />
                                <Route exact path='/trade' 
                                    element={
                                    <Trading 
                                    currentUser={currentUser}
                                    loggedIn={loggedIn}
                                    onAdd={onAdd}
                                    coins={coins}
                                    setCoins={setCoins}
                                    bots={bots}
                                    setBots={setBots}
                                    myBots={myBots}
                                    setMyBots={setMyBots}
                                    onAddBots={onAddBots}
                                    isActive={isActive}
                                    setIsActive={setIsActive}
                                    setMembership={setMembership}
                                    membership={membership}

                                    />} 
                                />
                                 <Route exact path='/track' 
                                    element={
                                    <Tracking 
                                    currentUser={currentUser}
                                    loggedIn={loggedIn}
                                    />} 
                                />
                                <Route exact path='/profile' 
                                    element={
                                    <Profile 
                                    currentUser={currentUser}
                                    loggedIn={loggedIn}
                                    onAdd={onAdd}
                                    coins={coins}
                                    setCoins={setCoins}
                                    setMembership={setMembership}
                                    membership={membership}
                                    setCurrentUser={setCurrentUser}

                                    />} 
                                />
                                <Route exact path='/settings' 
                                    element={
                                    <Settings 
                                    setCurrentUser={setCurrentUser}
                                    currentUser={currentUser}
                                    loggedIn={loggedIn}
                                    onAdd={onAdd}
                                    coins={coins}
                                    setCoins={setCoins}
                                    setMembership={setMembership}
                                    membership={membership}

                                    />} 
                                />
                            </Routes>
                        </Layout>
                    </BrowserRouter>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </HelmetProvider>
    );
};

export default App;