import React, { useEffect, Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import Portfolio from './Portfolio'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import axios from 'axios'



export default function Connect() {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  state = {
    portfolio: [],
    search_results: [],
    active_currency: null,
    amount: ''
  }

  
  
  handleChange = (e) => {
    axios.post('/search', {
      search: e.target.value
    })
    .then( (data) => {
      this.setState({
        search_results: [...data.data.currencies]
      })
    })
    .catch( (err) => console.log(err))
  }

  handleSelect = (curr, e) => {
    e.preventDefault()

    const activeCurrency = this.state.search_results.find( item => item.id == curr.id)

    this.setState({
      active_currency: activeCurrency,
      search_results: []
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let currency = this.state.active_currency
    let amount = this.state.amount

    axios.post('/calculate', {
      id: currency.id,
      amount: amount
    })
    .then( (data) => {
      this.setState({
        amount: '',
        active_currency: null,
        portfolio: [...this.state.portfolio, data.data]
      })
    })
    .catch( (err) => console.log(err))
  }

  handleAmount = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


   
    const searchOrCalculate = this.state.active_currency ?
    <Calculate
      handleChange={this.handleAmount}
      handleSubmit={this.handleSubmit}
      active_currency={this.state.active_currency}
      amount={this.state.amount}
    /> :
    <Search
      handleSelect={this.handleSelect}
      searchResults={this.state.search_results}
      handleChange={this.handleChange} />

    return(
        <Box 
        // fullWidth
        
        alignContent= 'center'
        justifyContent='center'
        alignItems='center'
        display= 'flex'
        flexDirection='column'
        
                sx={{ 
                    // backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    p: 2,
                    // mt: '50px'
                    
                }}>
                    <Stack
          justifyContent="center"
          gap={2}
          flexDirection="row"
          width={1.0}
          flexWrap="wrap"
          >
          
          <Grid 
        //   fullWidth
    
          alignContent= 'center'
          justifyContent='center'
          alignItems='center'
          display= 'flex'
          flexDirection='column'
          sx={{ 
            //   backgroundColor: theme.palette.background.default, 
              minHeight: '100%', 
              py: 0,
              mt: '100px'
              
              
          }}
      >

        <Grid item
        alignContent= 'center'
        justifyContent='center'>
    
    
          {searchOrCalculate}
     
       
          <Portfolio portfolio={this.state.portfolio}/>
          </Grid>
          </Grid>
          </Stack>
      </Box>
    )
  }


// export default Connect