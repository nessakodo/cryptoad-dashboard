import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import DashboardHeader from '../components/DashboardHeader';
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


const Connect = ( {loggedIn, onAdd, setCoins, coins, currentUser}) => {
    const theme = useTheme();
    
    return (
        <React.Fragment>
            <Box 
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 15,
                    // mt: '-700px'
                }}
            >
                <Container maxWidth={true}>
                    <Grid container spacing={3}>
                        <DashboardHeader />

                    <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <Categories />
                    </Grid>

                    <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <Exchanges />
                    </Grid>

                    <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <AssetPlatforms />
                    </Grid>

                    <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <MarketIndexes />
                    </Grid>

                    <Grid item lg={12} sm={12} xl={12} xs={12} maxWidth={true}>
                        <CoinMarkets 
                        onAdd={onAdd}
                        loggedIn={loggedIn}
                        coins={coins}
                        setCoins={setCoins}/>
                    </Grid>

                    <Grid item xs={12}>
                        <BarChart />
                    </Grid>
                        
                    <Grid item md={4} xs={12}>
                        <PieChart />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <PolarAreaChart />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <DoughnutChart />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <AreaChart />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <LineChart />
                    </Grid>    
                </Grid>
            </Container>
        </Box>
    </React.Fragment>
    );
};

export default Connect;