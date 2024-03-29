import React, { useEffect } from 'react';
import WelcomeCard from '../components/WelcomeCard';
import PositionsCard from '../components/statistics/PositionsCard';
import BotsList from '../components/statistics/BotsList';
import ActiveList from '../components/statistics/ActiveList';
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


const Trading = ( {loggedIn, onAdd, setCoins, coins, myBots, setMyBots, currentUser, handleIsActive, isActive, setIsActive, bots, setBots, onAddBots, membership, setMembership}) => {
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
                py: 18,
                // mt: '-700px'
            }}
            >
                <Container maxWidth={true}>
                                    
                            <TradingHeader 
                            currentUser={currentUser}
                            loggedIn={loggedIn}
                            />

                

                    <Spacer sx={{m: 3}}/>

                    <Typography
                    variant='h8'>Cryptoad Trading Bots</Typography>
                       <Spacer sx={{m: 4}}/>
                    <Grid  alignContent='center' justifyContent= 'center' 
                     sx={{  display: 'flex', flexDirection: 'row' }}>
                        <Grid item lg={4} sm={12} xl={4} xs={12}  gap={3}
                        sx={{  display: 'flex', flexDirection: 'row', wrap: 'wrap'}}>
                            <BotsList 
                            loggedIn={loggedIn}
                            currentUser={currentUser}
                            handleIsActive={handleIsActive}
                            isActive={isActive}
                            setIsActive={setIsActive}
                            bots={bots}
                            setBots={setBots}
                            myBots={myBots}
                            setMyBots={setMyBots}
                            onAddBots={onAddBots}
                            setMembership={setMembership}
                            membership={membership}

                            />
                        </Grid>

                    </Grid>
                        
                    <Spacer sx={{m: 6}}/>

                    <Typography
                    
                    variant='h8'>Your Active Bots</Typography>
                    <Grid  alignContent='center' justifyContent= 'center' 
                     sx={{  display: 'flex', flexDirection: 'row' }}>
                        <Grid item lg={3} sm={12} xl={3} xs={12}  gap={3}  alignContent='center' justifyContent= 'center'
                        sx={{  display: 'flex', flexDirection: 'row', wrap: 'nowrap', p: '20px'}}>
                            <ActiveList 
                            loggedIn={loggedIn}
                            currentUser={currentUser}
                            handleIsActive={handleIsActive}
                            isActive={isActive}
                            setIsActive={setIsActive}
                            setBots={setBots}  
                            bots={bots}
                            myBots={myBots}
                            setMyBots={setMyBots}
                            membership={membership}
                            />
                        </Grid>

                    </Grid>

                    <Spacer sx={{m: 3}}/>

                  

                    <Spacer sx={{m: 6}}/>


        

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
                // minHeight= '400px'
                // maxHeight= '400px'
                alignContent= 'center'
                justifyContent='center'
                alignItems='center'
                display= 'flex'
                flexDirection='column'
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 22,
                    // mt: '-700px'
                }}
                >

                    <Button
                        variant='outlined'
                        href='/login'
                        sx={{height: 80, width: 300, fontSize: '28px', borderRadius: 4, letterSpacing: '3px'}}>
                            Log In
                        </Button>

                        <Spacer sx={{m: 3}}/>

                    <Grid item
                    alignContent= 'center'
                    justifyContent='center'
                    >
                         <Typography
                        sx={{fontSize: '22px', letterSpacing: '2px'}}
                        gutterBottom 
                        >Please log in to access these features.
                        </Typography>

                        </Grid>

                        <Spacer sx={{m: 1}}/>

                        <Grid item
                    alignContent= 'center'
                    justifyContent='center'
                    >
                        <Typography
                        variant='h8'
                        gutterBottom 
                        sx={{fontSize: '35px'}}
                        >Please log in to access these features.
                        </Typography>

                    </Grid>
            
            

                    <Grid item
                    alignContent= 'center'
                    justifyContent='center'
                    >
                        
                </Grid>
            </Grid>
        </Stack>
        }
     </React.Fragment>
    );
};

export default Trading;