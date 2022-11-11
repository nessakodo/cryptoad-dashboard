import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import { alpha, useTheme } from '@mui/material/styles';


const DashboardHeader = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Grid 
                item
                alignItems='center'
                justifyContent='space-between'
                container
                spacing={3}
                xs={12}
                style={{ marginTop: '-30px' }}
            >
                <Grid item>
                    <Typography
                        color={theme.palette.text.primary}
                        variant='h2'
                        ml='5px'
                    >
                        Overview
                    </Typography>
                    <Box sx={{ pt: 2 }}>
                        <Typography
                            color={theme.palette.text.secondary}
                            variant='h5'
                            ml='5px'
                        >
                            <span>{'Today:'}</span>
                            {' '}
                            <span 
                                style={{ 
                                    color: theme.palette.mode === 'dark' ? green[400] : theme.palette.success.main, 
                                    background: theme.palette.mode === 'dark' ? alpha(green[200], 0.1) : alpha(green[200], 0.2),
                                    padding: '7px', 
                                    borderRadius: '5px', 
                                    marginLeft: '10px' 
                                }}

                                
                            >
                                {new Date().toLocaleDateString('en-US', {
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric'
                                })}
                                
                            </span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default DashboardHeader;