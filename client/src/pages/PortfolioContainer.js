import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import Portfolio from './Portfolio'
import { Grid } from '@mui/material'

import axios from 'axios'

class PortfolioContainer extends Component {
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

  render(){
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

      <Grid
      alignContent= 'center'
      justifyContent='center'
      alignItems='center'
      display= 'flex'
      flexDirection='column'
      >
          {searchOrCalculate}

          <Grid item>
          <Portfolio portfolio={this.state.portfolio}/>
          </Grid>
      </Grid>
    )
  }
}

export default PortfolioContainer