import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Spacer from '../components/Spacer';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TradesCard = ({ text, value, color, icon, currentUser, loggedIn, membership, setMembership}) => {
    const theme = useTheme();

    let history = useNavigate();

      
    function toLogin() {
        history('/login');
        location.reload();
    }

    return (

        
        <Card
        sx={ { borderRadius: 4, p: 2 } }
       
        >
            <CardContent>
                <Grid 
                    container 
                    spacing={3} 
                    sx={{ justifyContent: 'space-between' }}
                    
                >
                    <Grid item>
                        <Typography 
                            variant='h6'
                            fontSize='18px'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                            Welcome Back,
                        </Typography>
                        <Typography 
                            variant='h8' 
                            fontSize='35px'
                            gutterBottom 
                            color={theme.palette.text.primary}
                            sx={{mb: 3}}
                        >
                         {loggedIn ? currentUser.name : "Guest"}
                        </Typography>
                        <Spacer sx={{m: 1}}/>
                        <Typography 
                            variant='h6'
                            fontSize='18px'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                         {loggedIn ? "Glad to see you again!" : "Glad to have you here!"}
                        </Typography>

                        </Grid>
                    </Grid>

                    <Spacer sx={{m: 3}}/>
                     
                   
                    {/* <Grid item> */}
                        {/* <Avatar
                            sx={{
                                backgroundColor: color,
                                height: 56,
                                width: 56,
                            }}
                        > */}
                            {/* <FontAwesomeIcon 
                                icon={icon} 
                                size='lg' 
                                color={theme.palette.common.white}
                            /> */}
                        {/* </Avatar> */}
                    {/* </Grid> */}

                    
                {membership ? 
                    <Grid item>
                    <Typography 
                    sx={{letterSpacing: '1.5px'}}
                            variant='h8'
                            fontSize='16px'
                            color={theme.palette.text.secondary} 
                        > Membership Status: PRO Membership
                    </Typography>
                    </Grid>
                    :
                    <Grid item>
                    <Typography 
                    sx={{letterSpacing: '1.5px'}}
                            variant='h8'
                            fontSize='16px'
                            color={theme.palette.text.secondary} 
                        > Membership Status: No Current Membership
                    </Typography>
                    </Grid>
                }

                    <Spacer sx={{m: 2}}/>

                    {loggedIn ?

                    <Button
                        alignContent= 'center'
                        justifyContent='center'
                        color='primary'
                        variant='outlined'
                        href='/settings'
                        sx={{height: 60, width: 280, fontSize: '13px', borderRadius: 4, letterSpacing: '2px' }}
                        >  Manage Membership
                    </Button>

                    :

                    <Button
                        alignContent= 'center'
                        justifyContent='center'
                        color='primary'
                        variant='outlined'
                        href='/login'
                        sx={{height: 60, width: 280, fontSize: '18px', borderRadius: 4, letterSpacing: '3px' }}
                        >  Log In
                    </Button>}
                  
    
            </CardContent>
        </Card>
    );
};

export default TradesCard;