import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Spacer from '../components/Spacer';
import WelcomeCard from '../components/WelcomeCard'
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const Profile = ( {loggedIn, onAdd, setCoins, coins, currentUser, membership, setMembership}) => {


    const theme = useTheme();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    const password = currentUser.password

    function handleSubmit(e) {
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                setCurrentUser(data)
                // setShowEdit(false)
                // form.reset()
            });
    }

    return (
        <React.Fragment>
            <Box 
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 8,
                    mt: '-700px'
                }}
            >
                <Container maxWidth={true}>
                  
                    <Grid fullWidth>
                        <WelcomeCard
                        currentUser={currentUser}
                        loggedIn={loggedIn}
                        setMembership={setMembership}
                        membership={membership}
                        />
                    </Grid>

                    <Spacer sx={{m: 5}}/>

                    <Container maxWidth={true}>

                    <Grid container spacing={3}>

                        <Grid item lg={4} sm={12} xl={4} xs={12}>
                        <Stack width='100' display='flex' flexDirection='row'>
                            <FormLabel sx={{mt: '15px', mr: '15px'}}>
                                Name: 
                            </FormLabel>
                        </Stack>
                            
                        </Grid>

                        <Grid item lg={4} sm={12} xl={4} xs={12}>

                        <Stack width='100' display='flex' flexDirection='row'>
                            <FormLabel sx={{mt: '15px', mr: '15px'}}>
                                Email: 
                            </FormLabel>
                        </Stack>

                        </Grid>

                   
                    <Grid item lg={4} sm={12} xl={4} xs={12}>
                        <Stack width='100' display='flex' flexDirection='row'>
                            <FormLabel sx={{mt: '15px', mr: '15px'}}>
                                Password: 
                            </FormLabel>
                            <TextField
                                // value={currentUser.password}
                                value= {password}
                                // type= "password"
                                variant="outlined"
                                type={showPassword ? "text" : {password}} // <-- This is where the magic happens
                                //   onChange={someChangeHandler}
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
                        </Stack>
                    </Grid>
                   


             

                </Grid>
    
                    <Grid 
                fullWidth
               
                alignContent= 'center'
                justifyContent='center'
                alignItems='center'
                display= 'flex'
                flexDirection='column'
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 6,
                }}
                >

        


                    <Grid item
                    alignContent= 'center'
                    justifyContent='center'
                    >
                            <Button
                                alignContent= 'center'
                                justifyContent='center'
                                color='primary'
                                variant='outlined'
                                href='/settings'
                                sx={{height: 50, width: 250, fontSize: '15px'}}
                                > Edit User Profile
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                </Container>

            </Box>
        </React.Fragment>


    );
};

export default Profile;