import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from '@mui/material/SvgIcon';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';

import TablePaginationActions from './TablePaginationActions';
import { Typography } from '@mui/material';

const CoinMarkets = ( {loggedIn, onAdd} ) => {
    const theme = useTheme();

    const [coins, setCoins] = useState([]);
    const [coin, setCoin] = useState([])
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [toAdd, setToAdd] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const fetchCoinMarkets = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setCoins(response.data);
            console.log(coins)
        })
        .catch(error => console.log(error));
    };


    useEffect(() => {
        fetchCoinMarkets();
    }, []);



    function handleAdd() {
        coins.map()
        setCoin(coin.id)
        // onAdd(coin.id)
        setToAdd(!toAdd)
        // setHideAlert("")
        // setTimeout(function () { setHideAlert("hidden") }, 5000)
        console.log(coin.id)
    }

 

    return (
        <React.Fragment>
            <Box >
                <Box sx={{ mt: 3 }}>
                    <Card
                    sx={ { borderRadius: 4 } }
                    >
                        <CardContent >
                            <Box sx={ { borderRadius: 4, padding: 0, mt: 1, letterSpacing: 2}}>
                                <TextField

                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,

                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <SvgIcon 
                                                fontSize='medium' color='action'>
                                                    <SearchIcon />
                                                </SvgIcon>
                                            </InputAdornment>
                                        )
                                    }}
                                    placeholder='Search a cryptocurrency'
                                    variant='standard'
                                    onChange={handleChange}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <Box sx={{ pt: 3, pb: 4}} justifyContent="center"
            >
                <Card 
                sx={ { overflow: 'auto', borderRadius: 4, padding: 2 } }>
                    <Box sx={{ pb: 3 }}>
                        <Table  >
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{ fontWeight: 'bold', letterSpacing: 2}}>Image</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', letterSpacing: 2 }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', letterSpacing: 2 }}>Symbol</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', letterSpacing: 2 }}>Price</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', letterSpacing: 2 }}>24h</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', letterSpacing: 2 }}>Volume</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', letterSpacing: 2 }}>Market Cap</TableCell>
                                    {loggedIn ? <TableCell sx={{ fontWeight: 'bold', letterSpacing: 2 }}>Watchlist</TableCell> : <></>}
                                </TableRow>
                            </TableHead>
                            <TableBody
                            style={{width: "100%"}}>
                                {(rowsPerPage > 0
                                    ? filteredCoins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : filteredCoins
                                ).map(coin => (
                                    <TableRow hover key={coin.id}>
                                        
                                        <TableCell>
                                            <img 
                                                src={coin.image} 
                                                alt={coin.name} 
                                                style={{ height: '30px', width: '30px' }}
                                                
                                            />
                                        </TableCell>
                                        <TableCell sx={{letterSpacing: 1 }}>{coin.name}</TableCell>
                                        <TableCell sx={{letterSpacing: 1 }}>{coin.symbol.toUpperCase()}</TableCell>
                                        <TableCell sx={{letterSpacing: 2 }}>${coin.current_price.toFixed(2)}</TableCell>
                                        <TableCell sx={{letterSpacing: 2 }}>
                                            {coin.price_change_percentage_24h > 0 
                                                ? (
                                                    <span 
                                                        style={{ 
                                                            // fontWeight: 'bold',
                                                            color: theme.palette.mode === 'dark' 
                                                                ? theme.palette.primary.green 
                                                                : theme.palette.primary.green
                                                             
                                                        }}
                                                    >
                                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                                    </span>
                                                ) 
                                                : (
                                                    <span 
                                                        style={{ 
                                                            // fontWeight: 'bold',
                                                            color: theme.palette.mode === 'dark' 
                                                                ? theme.palette.primary.red 
                                                                : theme.palette.primary.red
                                                        }}
                                                    >
                                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                                    </span>
                                                )
                                            }
                                        </TableCell>
                                        <TableCell sx={{letterSpacing: 2 }}>${coin.total_volume.toLocaleString()}</TableCell>
                                        <TableCell sx={{letterSpacing: 2 }}>${coin.market_cap.toLocaleString()}</TableCell>
                                        <TableCell>
                                                   <Stack
                                                   display='flex'
                                                   flexDirection="row"
                                                    >
                                                {loggedIn ?
                                                    <Box>
                                                    
                                                <Typography
                                                sx={{
                                                    display: {
                                                        md: 'inline',
                                                        xs: 'inline',
                                                
                                                },

                                                }}
                                                >{toAdd ? "Added" : "Add"}</Typography>
                                                    {toAdd ? <CheckCircleIcon
                                                    sx={{
                                                        fontSize: '20px',
                                                        ml: 3
                                                        }}/>
                                                        :
                                                        <AddCircleOutlineIcon
                                                        onClick={handleAdd}
                                                        sx={{
                                                        fontSize: '20px',
                                                        ml: 3,
                                                        }}/>
                                                        }
                                                        </Box>
                                                        :
                                                        <></>
                                                        }
                                                        </Stack>
                                        </TableCell>
                                 
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination 
                        
                            rowsPerPageOptions={[]}
                            colSpan={3}
                            count={coins.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            ActionsComponent={TablePaginationActions}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        />
                    </Box>
                </Card>
            </Box>
        </React.Fragment>
    );
};

export default CoinMarkets;