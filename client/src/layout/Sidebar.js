import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
library.add(faCoins)

import CustomButton from '../components/CustomButton';
import toad from "../assets/toad.png"

const Sidebar = ({ open, onClose }) => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Drawer
                anchor='left'
                onClose={() => onClose()}
                open={open}
                variant='temporary'
                sx={{
                        color: "#000000",
                        width: '100%',
                        minWidth: '30px',
                        minHeight: '30px'
                    ,
                }}
            >
                <br></br>
                <Box sx={{ height: '100%', padding: 1 }}>
                    <Box width={1} paddingX={5.5} paddingY={0}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <IconButton size='large' disabled>
                            <Avatar
                                alt="toad"
                                src={toad}
                                style={{ height: '90px', width: '90px' }}
                            >
                            </Avatar>
                            </IconButton>
                            </Link>
                            </Box>
                            <Box pb={2}>
                                <Typography 
                                    variant='h3' 
                                    component='div' 
                                    color={theme.palette.text.primary}
                                    fontWeight='bold'
                                    textDecoration='none'
                                    flexGrow={1}
                                    ml="30px"

                                >
                                    CRYPTOAD
                                </Typography>
                    </Box>
                    <Box paddingX={2} paddingY={2}>
                        <Box paddingY={1}>
                            <CustomButton 
                                href='/'
                                icon={<DashboardIcon />}
                                text='DASHBOARD'
                            />
                        </Box>
                        <Box paddingY={1}>
                            <CustomButton 
                                href='#'
                                icon={<HelpIcon />}
                                text='ABOUT'
                            />
                        </Box>
                        <Box paddingY={1}>
                            <CustomButton 
                                href='#'
                                icon={<EmailIcon />}
                                text='CONTACT'
                            />
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </React.Fragment>
    );
};

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
};

export default Sidebar;