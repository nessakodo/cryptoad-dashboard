import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import DashboardHeader from '../components/DashboardHeader';

import WelcomeCard from '../components/WelcomeCard';
import CoinsCard from '../components/statistics/BotsCard';
import PositionsCard from '../components/statistics/PositionsCard';
import BotsCard from '../components/statistics/BotsCard';
import TradesCard from '../components/statistics/TradesCard';
import PositionsHeader from '../components/TradingHeader';
import PositionsForm from '../components/statistics/PositionsForm';
import WalletStatus from '../components/statistics/WalletStatus';
import TextField from '@mui/material/TextField';
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


const Settings = ( {onAdd, setCoins, coins, currentUser, loggedIn}) => {
    const theme = useTheme();


    
    return (
        <React.Fragment>
         
            <Box 
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 8
                }}
            >
                
                <Container maxWidth={true} >
                     
                        <PositionsHeader 
                        currentUser={currentUser}
                        loggedIn={loggedIn}
                        />
                        <Spacer
                        sx={{m: 3}}/>
                        <Grid container spacing={3}>
                           
                            <Grid item lg={6} sm={6} xl={6} xs={12}>
                                <BotsCard />
                            </Grid>
                            <Grid item lg={6} sm={6} xl={6} xs={12}>
                                <CoinsCard />
                            </Grid>
                         
                        </Grid>
                        <Spacer
                        sx={{m: 6}}/>
                        <WelcomeCard
                        currentUser={currentUser}
                        loggedIn={loggedIn}
                        />

                    <Spacer
                        sx={{m: 6}}/>
            <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
          
                                <TradesCard />
                            </Grid>
                            </Grid>
                            <Spacer
                        sx={{m: 3}}/>
                        <Grid container spacing={3}>
                            <Grid item lg={3} sm={6} xl={3} xs={12}>
                                <PositionsCard />
                            </Grid>
                            </Grid>
                            <Spacer
                        sx={{m: 6}}/>


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
            <Spacer sx={{ pt: 7 }} />

          
         
        </React.Fragment>
    );
};

export default Settings;