import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea as ChartAreaIcon } from '@fortawesome/free-solid-svg-icons';
library.add(ChartAreaIcon)

const ActiveCard = ({id, name, onAddBots, description, myBots, setMyBots, membership, loggedIn, setIsActive, isActive}) => {
    const theme = useTheme();

    
    return (
        
        <Card
        sx={ { borderRadius: 4, p: 2} }>
            <CardContent>
                <Grid 
                    minHeight= '320px'
                    maxHeight= '320px'
                    minWidth= '270px'
                    maxWidth= '270px'
                >
                    <Grid item>
                        <Typography 
                            variant='h2'
                            color={theme.palette.text.secondary} 
                            sx={{ fontSize: '21px'}}
                            mb='15px'
                            // sx={{mt: 2, mb: 4}}
                        >
                            {name}
                        </Typography>

                        <Typography 
                            variant='h6' 
                            color={theme.palette.text.primary}
                            sx={{ fontSize: '12px', mb: '20px'}}
                            gutterBottom 
                        >
                            {description}
                        </Typography>
                        
                                    
                                <Stack
                                display='flex'
                                flexDirection="row"
                                justifyContent='center'
                                // position= "absolute"
                                // bottom= '25px'
                                >
                                <Typography
                                sx={{ ml: 3}}
                                > Active
                                </Typography>
                                    
                                        <CheckCircleIcon
                                        sx={{fontSize: '25px', ml: 7}}/>
                                       
                                    
                                    
                                </Stack>
                                <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{height: 40, width: 200, fontSize: '15px', borderRadius: 4, mt: 4, mb: 4, ml:3}}
              >Customize Bot</Button>

                     
                    </Grid>
                </Grid>
                
            </CardContent> 
        </Card>   
    );
};

export default ActiveCard;