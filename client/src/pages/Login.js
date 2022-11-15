import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


export default function SignInSide( {setCurrentUser, setLoggedIn} ) {

	const history = useNavigate();
	const theme = useTheme();

	const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

	const { email, password } = formData;

	  
function handleChange(e) {
	const { name, value } = e.target;
	setFormData({ ...formData, [name]: value });
}

function handleSubmit(e) {
	e.preventDefault();
	fetch('/login', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	}).then((res) => {
		if (res.ok) {
			res.json().then((formData) => {
				setCurrentUser(formData);
				setLoggedIn(formData)
				// home page pushed after login
				history('/')
			});
		} else {
			res.json().then((data) => {
				setErrors(data);
			});
		}
	});
}

function signUpClick() {
	history("/signup")
}

  return (
        
   
        <Card  
		sx={{position: 'relative'}}>

          <Grid 
            sx={{
              my: 14,
              mx: 4,
			  
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
			<Typography 
				variant='h3' 
				sx={{
					fontSize: '30px',
					mt: -2,
					mb: 2,
					display: {
						md: 'inline',
						xs: 'inline',
					},
					}}
				>
				Welcome Back!
			</Typography>
			
			{errors.length > 0 ?
					<></>
					:
					<Typography 
					variant='h6' 
						sx={{
						fontSize: '15px',
						mt: 1,
						mb: 2,
						display: {
							md: 'inline',
							xs: 'inline',
						},
				}}>{errors.error}</Typography>
				}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<FormLabel component="legend">Email</FormLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
				value={email}
				onChange={handleChange}
                autoFocus
              />
			  <FormLabel component="legend">Password</FormLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
				value={password}
				onChange={handleChange}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 5 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
				<Button>
					Forgot Password?
				 </Button>
                </Grid>
				<Grid>
				{/* <FormLabel component="legend">Don't have an account?</FormLabel> */}
                <Grid item>
                 <Button
				 onClick={signUpClick}>
					Sign Up
				 </Button>
                </Grid>
				</Grid>
              </Grid>
            </Box>
          </Grid>
        </Card>
  );
}