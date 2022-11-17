import React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
import Spacer from '../Spacer';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PositionsForm = ({ text, value, color, icon }) => {
    const theme = useTheme();

    return (
        <Card
        sx={ { borderRadius: 4 } }
        >
            <CardContent>
                {/* <Grid 
                    container 
                    spacing={3} 
                    sx={{ justifyContent: 'space-between' }}
                    
                > */}
                
                    <Grid item>
                                                
<Box component="form" noValidate  sx={{ m: 2 }}>


<Grid  alignContent='center' justifyContent= 'center' fullWidth >
  
<Grid  gap={3} sx={{ p: 1.8}}>
<Typography
variant='h8'>Position Tracking Form</Typography>

<Spacer sx={{m: 3}}/>

<FormLabel component="legend">Currency Name</FormLabel>
  <TextField
    margin="normal"
    required
    fullWidth
    id="name"
    name="name"
    autoComplete="name"
    // value={name}
    // onChange={handleChange}
    autoFocus
  />
    <Spacer sx={{m: 1}}/>

    </Grid>
    </Grid>
<Grid  alignContent='center' justifyContent= 'center' fullWidth 
                     sx={{  display: 'flex', flexDirection: 'row' }}>
                        <Grid  gap={3}
                        sx={{  display: 'flex', flexDirection: 'row', wrap: 'wrap'}}>

                          <Stack  >

<FormLabel component="legend">Price At Entry</FormLabel>
  <TextField
  fullWidth
  margin="normal"
    // margin="normal"
    // required
    // fullWidth
    // id="email"
    // name="email"
    // autoComplete="email"
    // value={email}
    // onChange={handleChange}
    // autoFocus
  />
  </Stack>
  <Stack>
    <FormLabel component="legend">Quantity Bought</FormLabel>
  <TextField
    margin="normal"
    required
    fullWidth
    id="name"
    name="name"
    autoComplete="name"
    // value={name}
    // onChange={handleChange}
    autoFocus
  />
</Stack>
  </Grid>
  </Grid>

  <Spacer sx={{m: 1}}/>
  <Grid  alignContent='center' justifyContent= 'center' fullWidth 
                     sx={{  display: 'flex', flexDirection: 'row' }}>
                        <Grid  gap={3}
                        sx={{  display: 'flex', flexDirection: 'row', wrap: 'wrap'}}>

                          <Stack  >

<FormLabel component="legend">Price At Exit</FormLabel>
  <TextField
  fullWidth
  margin="normal"
    // margin="normal"
    // required
    // fullWidth
    // id="email"
    // name="email"
    // autoComplete="email"
    // value={email}
    // onChange={handleChange}
    // autoFocus
  />
  </Stack>
  <Stack>
    <FormLabel component="legend">Quantity Sold</FormLabel>
  <TextField
    margin="normal"
    required
    fullWidth
    id="name"
    name="name"
    autoComplete="name"
    // value={name}
    // onChange={handleChange}
    autoFocus
  />
</Stack>
  </Grid>
  </Grid>

  <Spacer sx={{m: 1}}/>
  </Box>

                    </Grid>
                {/* </Grid> */}
            </CardContent>
        </Card>
    );
};

export default PositionsForm;