import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BotsCard = ({name, description, active}) => {
    const theme = useTheme();

    return (

        <Grid size xs={12}>
        <Card>
            <CardContent>
                <Grid 
                fullWidth
                    minHeight= '400px'
                    maxHeight= '400px'
                    alignContent= 'center'
                    justifyContent='center'
                    display= 'flex'
                    flexDirection='row'
                    // container 
                    spacing={6} 
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography 
                            variant='h2'
                            color={theme.palette.text.secondary} 
                            gutterBottom 

                            // sx={{mt: 2, mb: 4}}
                        >
                            {name}
                        </Typography>
                        <Typography 
                            variant='h6' 
                            color={theme.palette.text.primary}
                            sx={{mb: -1}}
                        >
                            {description}
                        </Typography>
                        <Typography 
                            variant='h6' 
                            color={theme.palette.text.primary}
                            sx={{mb: -1}}
                        >
                            {active}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
    );
};

export default BotsCard;