import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box
                backgroundColor={theme.palette.background.default}
                paddingTop={1}
                paddingBottom={1}
                // sticky footer - see four values below
                position='fixed'
                bottom='0'
                left='0'
                width='100%'
            >
                {/* <Divider /> */}
                <Box
                    backgroundColor={theme.palette.background.default}
                    position='relative'
                    sx={ { pl: 2 } }
                    padding={theme.spacing(0.25)}
                >
                    <Grid container spacing={0}>
                        <Hidden mdDown>
                            <Grid container item xs={12} md={4}>
                                <List
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: 0
                                    }}
                                >
                                    <ListItemButton component='a' href='#'>
                                        <ListItemText 
                                            primary={
                                                <Typography 
                                                    variant='body2'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    Github
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                    <ListItemButton component='a' href='#'>
                                        <ListItemText 
                                            primary={
                                                <Typography 
                                                    variant='body2'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    Portfolio
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                    <ListItemButton component='a' href='#'>
                                        <ListItemText 
                                            primary={
                                                <Typography 
                                                    variant='body2'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    Blog
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </List>
                            </Grid>
                        </Hidden>
                        <Grid container item xs={12} md={4} justifyContent='center'
                        sx={ { pr: 4 } }>
                            <List>
                                <ListItemButton>
                                    <ListItemText 
                                        primary={
                                            <Typography 
                                                variant='body2'
                                                color={theme.palette.text.secondary}
                                            >
                                                NESSA KODO
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </List>
                        </Grid>

                        <Grid container item xs={12} md={4} justifyContent='center'>
                            <List
                            sx={ { pl: 15 } }>
                                <ListItemButton>
                                    <ListItemText 
                                        primary={
                                            <Typography 
                                                variant='body2'
                                                color={theme.palette.text.secondary}
                                            >
                                                Data provided by
                                                {' '}
                                                <Link 
                                                    href='https://www.coingecko.com/'
                                                    alt='CoinGecko'
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    color={theme.palette.text.secondary}
                                                >
                                                    CoinGecko
                                                </Link>.
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Footer;