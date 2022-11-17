import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import DashboardHeader from '../components/DashboardHeader';

import WelcomeCard from '../components/WelcomeCard';
import CoinsCard from '../components/statistics/CoinsCard';
import PositionsCard from '../components/statistics/PositionsCard';
import BotsList from '../components/statistics/BotsList';
import TradesCard from '../components/statistics/TradesCard';
import PositionsHeader from '../components/PositionsHeader';
import PositionsForm from '../components/statistics/PositionsForm';
import WalletStatus from '../components/statistics/WalletStatus';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TradesCount from "../components/statistics/TradesCard";
import Categories from '../components/statistics/Categories';
import Exchanges from '../components/statistics/Exchanges';
import AssetPlatforms from '../components/statistics/AssetPlatforms';
import MarketIndexes from '../components/statistics/MarketIndexes';
import CoinMarkets from '../components/tables/CoinMarkets';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart'
import DoughnutChart from '../components/charts/DoughnutChart';
import PolarAreaChart from '../components/charts/PolarAreaChart';
import LineChart from '../components/charts/LineChart';
import AreaChart from '../components/charts/AreaChart';
import Spacer from '../components/Spacer';
import { Typography } from '@mui/material';


const Trades = ( {onAdd, setCoins, coins, currentUser, loggedIn}) => {
    const theme = useTheme();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: '180px', left: 0, behavior: 'smooth'});
      }, []);
    
    return (
    
        <React.Fragment>
           { loggedIn? 
 
            <Container maxWidth={true}>
                                
                        <PositionsHeader 
                        currentUser={currentUser}
                        loggedIn={loggedIn}
                        />

                <Spacer sx={{m: 6}}/>

                        <WelcomeCard
                        currentUser={currentUser}
                        loggedIn={loggedIn}
                        />

                <Spacer sx={{m: 3}}/>

                <Grid fullWidth alignContent='center' justifyContent='center'>
                    <Grid item lg={3} sm={6} xl={3} xs={12}  gap={3}
                    sx={{  display: 'flex', flexDirection: 'row' }}>
                        <BotsList />
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