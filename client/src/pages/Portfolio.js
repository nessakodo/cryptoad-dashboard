import { Box } from '@mui/material'
import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'
import Typography from '@mui/material/Typography';

class Portfolio extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const portfolioItems = this.props.portfolio.map( (item, index) => <PortfolioItem key={index} item={item}/>)
    const total = this.props.portfolio.reduce( (total, curr) => total + curr.value, 0)
    const formatted_total = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    return (

   
          <Box 
        fullWidth
        
        alignContent= 'center'
        justifyContent='center'
        alignItems='center'
        display= 'flex'
        flexDirection='column'
        >
                    
        <div className="portfolio-value">
            <br></br>
          <Box className="portfolio-value--header">Your Total Portfolio Value Is:</Box>
          <Typography variant='h2'
          >${formatted_total}</Typography>
        </div>
        <Box  alignContent= 'center'
        justifyContent='center'
        alignItems='center'>
          {portfolioItems}
        </Box>
      </Box>
    )
  }
}

export default Portfolio