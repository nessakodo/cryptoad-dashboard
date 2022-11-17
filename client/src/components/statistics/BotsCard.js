import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const BotsCard = ({name, description, active, loggedIn, currentUser, myBots, setMyBots, onAddBots}) => {
    const theme = useTheme();

    

    // function handleSetActive() {
    //     // coins.map()
    //     // setCoin(coin.id)
    //     // onAdd(coin.id)
    //     // setToAdd(!toAdd)
    //     // setHideAlert("")
    //     // setTimeout(function () { setHideAlert("hidden") }, 5000)
    //     // console.log(coin.id)
    // }


    const [isActive, setIsActive] = useState(false)
 

    return (

        <Card
        sx={ { borderRadius: 4, p: 2} }>
            <CardContent>
                <Grid 
                    minHeight= '270px'
                    maxHeight= '270px'
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
                            sx={{ fontSize: '12px'}}
                            gutterBottom 
                        >
                            {description}
                        </Typography>
                        
                            {loggedIn ?
                                    
                                <Stack
                                display='flex'
                                flexDirection="row"
                                justifyContent='center'
                                position= "absolute"
                                bottom= '275px'
                                >
                                <Typography
                                sx={{ ml: 3}}
                                >{isActive ? "Active" : "Not Active"}
                                </Typography>
                                    {isActive ? 
                                        <CheckCircleIcon
                                        sx={{fontSize: '25px', ml: 7}}/>
                                        :
                                        <AddCircleOutlineIcon
                                        onClick={onAddBots}
                                        sx={{ fontSize: '25px', ml: 7}}/>
                                    }
                                </Stack>

                                :
                                <></>
                            }   

                    </Grid>
                </Grid>
            </CardContent> 
        </Card>   
    );
};

export default BotsCard;