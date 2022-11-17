import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import UserIcon from '@mui/icons-material/Person';
import { alpha, useTheme } from '@mui/material/styles';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoins)

import ColorModeContext from '../components/ColorModeContext';
import CustomButton from '../components/CustomButton';


import toad from "../assets/toad.png"
import cryptoad from "../assets/cryptoad.png"

const Header = ({ onSideBarOpen, loggedIn, setCurrentUser, currentUser, setLoggedIn, membership, setMembership }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const anchorRef = useRef(null);
    const colorMode = useContext(ColorModeContext);

    let history = useNavigate();

      
    function toLogin() {
        history('/login');
        location.reload();
    }
    
    function toProfile() {
        history('/profile');
        location.reload();
    }

    function toSettings() {
        history('/settings');
        location.reload();
    }
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function onSignOut() {
        fetch('/logout', { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                    setLoggedIn(false);
                    <Navigate to="/"/>;
                }
            })
        location.reload();
    }

  
    return (
        <React.Fragment>
            <AppBar
                elevation={12}
                sx={{
                    top: 0,
                    border: 0,
                    padding: 0.5,
                    backgroundColor: theme.palette.mode === 'dark' 
                    ? theme.palette.background.default 
                    : theme.palette.background.default,
                    color: theme.palette.text.secondary
                }}
            >
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Box
                        display='flex'
                        flexDirection="column"
                        alignItems="center"
                        justifyContent='center'
                    >
                        <Box >
                            {/* <IconButton size='large' disabled>
                                <Avatar
                                    alt="toad"
                                    src={toad}
                                    style={{ height: '60px', width: '60px' }}
                                >
                                </Avatar>
                            </IconButton> */}
                        </Box>
                        <Box
                            mt= '10px'
                            mb= '0px'
                        >
                            <Typography 
                                variant='h1' 
                                component='div' 
                                sx={{
                                    flexGrow: 1,
                                    fontWeight: 'bold',
                                    fontSize: '38px',
                                    display: {
                                        md: 'inline',
                                        xs: 'inline',
                                    
                                    },
                                    }}
                                >
                                CRYPTOAD
                            </Typography>
                        </Box>
                    </Box>
                </Link>

                <Toolbar sx={{ minHeight: 20 }}>
                    <Box 
                        alignItems='center'
                        sx={{ display: { md: 'block', lg: 'none' } }}
                    >
                        <Button
                            color='inherit'
                            variant='outlined'
                            onClick={() => onSidebarOpen()}
                            aria-label='Menu'
                            sx={{
                                borderRadius: 2,
                                minWidth: '20px',  
                                minHeight: '20px', 
                                color: theme.palette.text.secondary,
                                borderColor: 'transparent',
                            }}
                        >
                            <MenuIcon fontSize='medium' />
                        </Button>
                    </Box>
                
                    <Box sx={{ flexGrow: 1}} 
                    />

                    <Stack
                        justifyContent="center"
                        gap={2}
                        flexDirection="row"
                        width={1.0}
                        flexWrap="wrap"
                        ml="140px"
                        maxHeight=''
                        sx={{
                            display: { lg: 'flex', md: 'none', xs: 'none'}
                        }}
                    >
                        <CustomButton 
                            href='/connect'
                            // icon={<HelpIcon />}
                            text='CONNECT'
                        />
                            <CustomButton 
                            href='/'
                            // icon={<DashboardIcon />}
                            text='DASHBOARD'
                        />
                        <CustomButton 
                            href='/trades'
                            // icon={<EmailIcon />}
                            text='TRADES'
                        />
                    </Stack>
                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 22, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' }
                        }}
                    />
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            aria-label='Theme Mode'
                            color={theme.palette.mode === 'dark' ? 'default' : 'inherit' }
                        >
                            {theme.palette.mode === 'dark' 
                                ? (
                                    <LightModeIcon fontSize='small' />
                                ) 
                                : (
                                    <DarkModeIcon fontSize='small' />
                                )
                            }
                        </IconButton>
                    </Box>
                
                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 22, 
                            mx: 2,
                            display: { lg: 'flex' } 
                        }} 
                    />
                    <Box sx={{ display: { lg: 'flex' } }}>
                        <Box
                            component={ButtonBase}
                            onClick={handleOpen}
                            ref={anchorRef}
                            sx={{
                                alignItems: 'center',
                                display: 'flex'
                            }}
                        >
                            <Tooltip title='User Account'>
                                <Avatar 
                                    sx={{ 
                                        height: 22, 
                                        width: 22, 
                                        backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : theme.palette.text.secondary
                                    }} 
                                />
                            </Tooltip>
                        </Box>
                        <Popover
                            anchorEl={anchorRef.current}
                            anchorOrigin={{
                                horizontal: 'center',
                                vertical: 'bottom'
                            }}
                            onClose={handleClose}
                            open={open}
                            PaperProps={{
                                sx: { width: 240 }
                            }}
                        >
            <Box sx={{ p: 2 }}>
                <Typography
                    color={theme.palette.text.primary}
                    variant='subtitle2'
                >
                    {loggedIn ? `${currentUser.name}` : "Guest"}
                </Typography>

                { membership ? 
                <Typography
                    color={theme.palette.text.secondary}
                    variant='subtitle2'
                >
                    Your plan: PRO
                </Typography>
                :
                <Typography
                color={theme.palette.text.secondary}
                variant='subtitle2'
            >
                Your plan: Free
            </Typography>
                
                }
            </Box>
            <Divider />
            <Box sx={{ mt: 2 }}>
                <MenuItem
                    component={Link}
                    to='#'
                >
                    <ListItemIcon>
                        <UserIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText
                        onClick={toProfile}
                        primary={(
                            <Typography
                                color={theme.palette.text.primary}
                                variant='subtitle2'
                            >
                                Profile
                            </Typography>
                        )}
                    />
                </MenuItem>
                <MenuItem
                    component={Link}
                    to='#'
                >
                    <ListItemIcon>
                        <SettingsIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText
                        onClick={toSettings}
                        primary={(
                            <Typography
                                color={theme.palette.text.primary}
                                variant='subtitle2'
                            >
                                Settings
                            </Typography>
                        )}
                    />
                </MenuItem>
                </Box>
                <Box sx={{ p: 2 }}>
                {loggedIn ?
					 <Button
                     onClick={onSignOut}
                     color='primary'
                     fullWidth
                     variant='outlined'
                     href='/'
                 > Log Out
                </Button>
					:
                    <Button
                    onClick={toLogin}
                    color='primary'
                    fullWidth
                    variant='outlined'
                    href='/login'
                > Log In
                </Button>
				}
                </Box>
                        </Popover>
                    </Box>
                    {theme.palette.mode === 'dark' && <Divider />}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

Header.propTypes = {
    onSidebarOpen: PropTypes.func,
};

export default Header;