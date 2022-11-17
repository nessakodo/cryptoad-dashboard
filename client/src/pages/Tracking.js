import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import PositionsForm from '../components/statistics/PositionsForm';
import WalletStatus from '../components/statistics/WalletStatus';
import TrackingHeader from '../components/TrackingHeader';
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


const Tracking = ( {loggedIn, onAdd, setCoins, coins, currentUser}) => {
    const theme = useTheme();

    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    
    return (
        <React.Fragment>
            <Box 
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 18,
                    // mt: '-700px'
                }}
            >
                <Container maxWidth={true}>
                    <Grid container spacing={6}>
                        <TrackingHeader />

              
{/* 
                    <Grid item lg={12} sm={12} xl={12} xs={12} maxWidth={true}>
                        <CoinMarkets 
                        onAdd={onAdd}
                        loggedIn={loggedIn}
                        coins={coins}
                        setCoins={setCoins}/>
                    </Grid> */}

                 

                        <Grid item lg={6} sm={12} xl={6} xs={12}>
                            <PositionsForm/>
                        </Grid>

                        <Grid item lg={6} sm={12} xl={6} xs={12}>
                            <WalletStatus/>
                    
                </Grid>
                </Grid>
                
            </Container>
        </Box>
    </React.Fragment>
    );
};

export default Tracking;