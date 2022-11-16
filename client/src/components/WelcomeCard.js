import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TradesCard = ({ text, value, color, icon, currentUser, loggedIn }) => {
    const theme = useTheme();

    return (
        <Card
        sx={ { borderRadius: 4 } }
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
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                            Welcome Back,
                        </Typography>
                        <Typography 
                            variant='h2' 
                            // fontSize='45px'
                            gutterBottom 
                            color={theme.palette.text.primary}
                            sx={{mb: 2}}
                        >
                           {currentUser.name}
                        </Typography>
                        <Typography 
                            variant='h6'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                        Glad to see you again!
                        </Typography>
                    </Grid>
                    <Grid item>
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
                    </Grid>
                    <Grid item>
                        Yo
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TradesCard;