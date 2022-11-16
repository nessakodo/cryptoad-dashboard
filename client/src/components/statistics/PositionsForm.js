import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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

<FormLabel component="legend">Name</FormLabel>
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
<FormLabel component="legend">Email</FormLabel>
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
  <FormLabel component="legend">Password</FormLabel>
  <TextField
  fullWidth
  margin="normal"
    // margin="normal"
    // required
    // fullWidth
    // name="password"
    // value={password}
    // onChange={handleChange}
    // type="password"
    // id="password"
    // autoComplete="current-password"
  />
  </Box>

                    </Grid>
                {/* </Grid> */}
            </CardContent>
        </Card>
    );
};

export default PositionsForm;