import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NoSsr from '@mui/material/NoSsr';
import Zoom from '@mui/material/Zoom';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children, loggedIn, setCurrentUser, currentUser, setLoggedIn, membership, setMembership}) => {
    const theme = useTheme();
    const isLg = useMediaQuery(
        theme.breakpoints.up('lg'),
        { defaultMatches: true }
    );

    const [openSidebar, setOpenSidebar] = useState(false);
    
    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };
    
    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };
    
    const open = isLg ? false : openSidebar;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
      });
    
    const scrollTo = (id) => {
        setTimeout(() => {
            const element = document.querySelector(`#${id}`);
            if (!element) {
                return;
            }
            window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
        });
    };

    return (
        <Box 
            id='page-top'
            sx={{
                backgroundColor: theme.palette.background.default,
                height: '100%',
                // paddingTop: '90px'
            }}
        >
            <Header 
            onSidebarOpen={handleSidebarOpen} 
            loggedIn={loggedIn}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setLoggedIn={setLoggedIn}
            setMembership={setMembership}
            membership={membership}
            />
            <Sidebar 
                onClose={handleSidebarClose}
                open={open}
            />
            <Box>
                {children}
            </Box>
            <Footer />
            <NoSsr>
                <Zoom in={trigger}>
                    <Box
                        onClick={() => scrollTo('page-top')}
                        role='presentation'
                        sx={{ position: 'fixed', bottom: 24, right: 20 }}
                    >
                        <Fab 
                            size='small' 
                            aria-label='scroll back to top'
                            sx={{
                                    backgroundColor: 'transparent',
                                    color: '#D946EF',
                                    border: '2px solid' + '#D946EF',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#D946EF',
                                    border: '2px solid' + '#D946EF',
                                },
                            }}
                        >
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </Box>
                </Zoom>
            </NoSsr>
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;