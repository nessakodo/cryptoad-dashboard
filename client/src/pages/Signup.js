import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

	const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;


function handleChange(e) {
	const { name, value } = e.target;
	setFormData({ ...formData, [name]: value });
}

function handleSubmit(e) {
  e.preventDefault();
  fetch('/signup', {
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
              history('/')

          });
      } else {
          res.json().then((data) => {
              setErrors(Object.entries(data.errors));
              console.log(errors)
          });
      }
  });
}

function loginClick() {
	history("/login")
}


function guestClick() {
	history("/")
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
					mb: 3,
					display: {
						md: 'inline',
						xs: 'inline',
					},
					}}
				>
				Welcome!
			</Typography>
<Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
{errors ? errors.map(e => 
<Typography
variant='h6' 
sx={{
  fontSize: '15px',
  mt: -2,
  mb: 2,
  display: {
    md: 'inline',
    xs: 'inline',
  },
  }}
  >
<Typography
  variant='h6' 
  sx={{
    fontSize: '15px',
    mt: -2,
    mb: 2,
    display: {
      md: 'inline',
      xs: 'inline',
    },
    }}
  >
  <br></br>
          {e[0] + ': '}</Typography> {e[1]}</Typography>) : null}
</Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

            <FormLabel component="legend">Name</FormLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                name="name"
                autoComplete="name"
				value={name}
				onChange={handleChange}
                autoFocus
              />
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
        type={showPassword ? "text" : "password"} 
                id="password"
                autoComplete="current-password"
                InputProps={{ // <-- This is where the toggle button is added.
                  endAdornment: (
                  <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  </InputAdornment>
                  )
              }}
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
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button onClick={guestClick}>
                    Continue As Guest
                  </Button>
                </Grid>
				<Grid>
                <Grid item>
                  <Button
                  onClick={loginClick}>
                    Log In
                  </Button>
                </Grid>
				</Grid>
              </Grid>
            </Box>
          </Grid>
        </Card>
  );
}