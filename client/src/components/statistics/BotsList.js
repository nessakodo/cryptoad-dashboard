import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BotsCard from './BotsCard';
import Spacer from '../Spacer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';

import { useTheme } from '@mui/material/styles';


// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea as ChartAreaIcon } from '@fortawesome/free-solid-svg-icons';
library.add(ChartAreaIcon)

const BotsList = () => {

    const theme = useTheme();
    const [details, setDetails] = useState([])
    const [bots, setBots] = useState([]);

    
    const fetchBots = () => {
        axios.get('/bots', {
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


    <React.Fragment>

        {bots.map((bot) =>
            <BotsCard
                key={bot.id}
                name={bot.name}
                description={bot.description}
            />
        )}
                    
    </React.Fragment>

);
};

export default BotsList;