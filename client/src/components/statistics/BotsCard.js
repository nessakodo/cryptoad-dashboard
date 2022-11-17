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

        <Card
        sx={ { borderRadius: 4, p: 2} }>
            <CardContent>
                <Grid 
                    minHeight= '200px'
                    maxHeight= '200px'
                    minWidth= '200px'
                    maxWidth= '200px'
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
                            sx={{mb: -10, fontSize: '13px'}}
                            
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
    );
};

export default BotsCard;