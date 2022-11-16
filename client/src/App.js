import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme as customTheme } from './theme';
import ColorModeContext from './components/ColorModeContext';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [coins, setCoins] = useState([])
    const [myJobs, setMyJobs] = useState([])


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
                // setMyWatchlist(candidate.jobs)
                // fetchProfPhoto(candidate.id)
              }
            )
        }
      }
      )
  }, [loggedIn]);


  
  function onAdd(addedCoin) {
    const add = {
      user_id: currentUser.id,
      coin_id: addedCoin.id,
      added: true
    }
    fetch('/added_coins', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then(setMyCoins([...myCoins, addedCoin]))

  }

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
                         >
                            <Routes>
                                <Route exact path='/' element=
                                {<Dashboard 
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
                            </Routes>
                        </Layout>
                    </BrowserRouter>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </HelmetProvider>
    );
};

export default App;