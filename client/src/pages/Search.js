import React from 'react'
import SearchResult from './SearchResult'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const Search = (props) => {
  const results = props.searchResults.map( curr => {
    return (
      <SearchResult 
        key={curr.id} 
        currency={curr} 
        handleSelect={props.handleSelect.bind(null, curr)} 
      />
    )
  })

  return(
    <Grid
    
    alignContent= 'center'
    justifyContent='center'
    alignItems='center'
    display= 'flex'
    flexDirection='column'>
      <h1>Cryptocurrency Portfolio Calculator</h1>
      <form>
        <Grid item 
         alignContent= 'center'
         justifyContent='center'
         alignItems='center'
         display= 'flex'
         flexDirection='column'>
          <FormLabel>Search for a Currency:</FormLabel><br/>
          <TextField onChange={props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Litecoin, Ethereum..." value={props.name} className="field"/>
        </Grid>
        <div className="currency-list">
          {results}
        </div>
      </form>
    </Grid>
  )
}

export default Search