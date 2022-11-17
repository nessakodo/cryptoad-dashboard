import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ActiveCard from './ActiveCard';
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

const ActiveList = ({loggedIn, currentUser, handleIsActive, isActive, setIsActive, bots, setBots, myBots, setMyBots, onAddBots, setMembership, membership}) => {

    const theme = useTheme();
    

return (


    <React.Fragment>

        {myBots.map((myBot) =>
            <ActiveCard
                loggedIn={loggedIn}
                currentUser={currentUser}
                handleIsActive={handleIsActive}
                isActive={isActive}
                setIsActive={setIsActive}
                key={myBot.id}
                name={myBot.name}
                description={myBot.description}
                myBots={myBots}
                setMyBots={setMyBots}
                onAddBots={onAddBots}
                setMembership={setMembership}
                membership={membership}
            />
        )}
                    
    </React.Fragment>

);
};

export default ActiveList;