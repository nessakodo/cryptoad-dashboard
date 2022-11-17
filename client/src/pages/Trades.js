import React, { useEffect } from 'react';
import WelcomeCard from '../components/WelcomeCard';
import PositionsCard from '../components/statistics/PositionsCard';
import BotsList from '../components/statistics/BotsList';
import TradesCard from '../components/statistics/TradesCard';
import TradingHeader from '../components/TradingHeader';
import PositionsForm from '../components/statistics/PositionsForm';
import WalletStatus from '../components/statistics/WalletStatus';
import Stack from '@mui/material/Stack';
import Spacer from '../components/Spacer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';


const Trades = ( {loggedIn, onAdd, setCoins, coins, currentUser, handleIsActive, isActive, setActive}) => {
    const theme = useTheme();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    

   
    return (
        <React.Fragment>
        { loggedIn? 

            <Box 
            sx={{ 
                backgroundColor: theme.palette.background.default, 
                minHeight: '100%', 
                py: 8,
                mt: '-700px'
            }}
            >
                <Container maxWidth={true}>
                                    
                            <TradingHeader 
                            currentUser={currentUser}
                            loggedIn={loggedIn}
                            />

                

                    <Spacer sx={{m: 3}}/>

                    <Grid fullWidth alignContent='center' justifyContent='center'>
                        <Grid item lg={3} sm={12} xl={3} xs={24}  gap={3}
                        sx={{  display: 'flex', flexDirection: 'row' }}>
                            <BotsList 
                            loggedIn={loggedIn}
                            currentUser={currentUser}
                            handleIsActive={handleIsActive}
                            isActive={isActive}
                            setActive={setActive}
                            />
                        </Grid>

                    </Grid>
                        
                    <Spacer sx={{m: 6}}/>

                    <Grid container spacing={3}>

                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <TradesCard />
                        </Grid>

                    </Grid>

                    <Spacer sx={{m: 3}}/>

                    <Grid container spacing={3}>

                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <PositionsCard />
                        </Grid>

                    </Grid>

                    <Spacer sx={{m: 6}}/>


                    <Grid container spacing={3}>

                        <Grid item lg={6} sm={12} xl={6} xs={12}>
                            <PositionsForm/>
                        </Grid>

                        <Grid item lg={6} sm={12} xl={6} xs={12}>
                            <WalletStatus/>
                        </Grid>

                    </Grid>

                </Container>
            </Box>

       : 
       
            <Stack
            justifyContent="center"
            gap={2}
            flexDirection="column"
            width={1.0}
            flexWrap="wrap"
            >
                
                <Grid 
                fullWidth
                minHeight= '400px'
                maxHeight= '400px'
                alignContent= 'center'
                justifyContent='center'
                alignItems='center'
                display= 'flex'
                flexDirection='column'
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 8,
                    mt: '-700px'
                }}
                >

                    <Grid item
                    alignContent= 'center'
                    justifyContent='center'
                    >
                        <Typography
                        variant='h2'
                        gutterBottom 
                        >Please log in to access these features.
                        </Typography>

                    </Grid>
            
                
                <Spacer sx={{m: 3}}/>

                    <Grid item
                    alignContent= 'center'
                    justifyContent='center'
                    >
                        <Button
                            alignContent= 'center'
                            justifyContent='center'
                            color='primary'
                            variant='outlined'
                            href='/login'
                            sx={{height: 60, width: 150, fontSize: '20px'}}
                            > Log In
                        </Button>
                </Grid>
            </Grid>
        </Stack>
        }
     </React.Fragment>
    );
};

export default Trades;