import React from 'react';
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
                            variant='h2' 
                            fontSize='29px'
                            gutterBottom 
                            color={theme.palette.text.primary}
                            sx={{mb: 1}}
                        >
                           {currentUser.name}
                        </Typography>
                        <Typography 
                            variant='h6'
                            fontSize='18px'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                        Glad to see you again!
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
                            variant='h3'
                            fontSize='13px'
                            color={theme.palette.text.secondary} 
                        > Membership Status: PRO Membership
                    </Typography>
                    </Grid>
                    :
                    <Grid item>
                    <Typography 
                            variant='h3'
                            fontSize='13px'
                            color={theme.palette.text.secondary} 
                        > Membership Status: No Current Membership
                    </Typography>
                    </Grid>
                }

                        <Spacer sx={{m: 2}}/>
                    <Button
                        alignContent= 'center'
                        justifyContent='center'
                        color='primary'
                        variant='outlined'
                        href='/settings'
                        sx={{height: 40, width: 200, fontSize: '13px', borderRadius: 4 }}
                        > Manage Membership
                    </Button>
                  
    
            </CardContent>
        </Card>
    );
};

export default TradesCard;