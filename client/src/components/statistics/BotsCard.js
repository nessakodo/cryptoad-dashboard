import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

import CustomCard from '../CustomCard';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea as ChartAreaIcon } from '@fortawesome/free-solid-svg-icons';
library.add(ChartAreaIcon)

const BotsCard = () => {
    const theme = useTheme();

    const [bots, setBots] = useState([]);

    const fetchBots = () => {
        axios.get('https://api.coingecko.com/api/v3/exchanges', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setBots(response.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchBots();
    }, []);
    
    return (
        <CustomCard 
            text='EXCHANGES'
            // value={exchanges.length}
            color={theme.palette.success.dark}
            // icon={ChartAreaIcon}
        />
    );
};

export default BotsCard;