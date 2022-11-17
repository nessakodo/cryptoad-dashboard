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
import FormLabel from '@mui/material/FormLabel';


const Profile = ( {loggedIn, onAdd, setCoins, coins, setCurrentUser, currentUser, membership, setMembership}) => {


    const theme = useTheme();

    const [edit, setEdit] = useState(false);
    const [isEditing, setIsEditing]  = useState(false);
    const [checked, setChecked] = useState(true)
    const [formData, setFormData] = useState({})

      function handleCheckbox(e) {
        setFormData({ ...formData, [e.target.name]: e.target.checked })
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
  
function handleChange(e) {
	const { name, value } = e.target;
	setFormData({ ...formData, [name]: value });
}

    // function handleCheckbox(e) {
    //     setFormData({ ...formData, [e.target.name]: e.target.checked })
    // }

    // function handleChecked() {
    //     setChecked(!checked)
    // }


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

    function onEdit() {
        setEdit(!edit)
        setIsEditing(!isEditing)
        form.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <React.Fragment>
            <Box 
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 20,
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
                    py: 2,
                }}
                >

        


                    <Grid item
                    alignContent= 'center'
                    justifyContent='center'
                    >

                    {edit && loggedIn ? 
                        <></>

                            :

                            
                            <Button
                        
                                onClick={onEdit}
                                alignContent= 'center'
                                justifyContent='center'
                                color='primary'
                                variant='outlined'
                                sx={{mt: '80px', height: 60, width: 280, fontSize: '18px', borderRadius: 4  }}
                                > Edit User Profile
                            </Button>

                    }
                        </Grid>
                    </Grid>
                </Container>



                <Container maxWidth={true}>
{isEditing ? 
               
          
<Grid    fullWidth
        container spacing= {6}
               alignContent= 'center'
               justifyContent='center'
               alignItems='center'
               display= 'flex'
               flexDirection='row'>

    <Grid item lg={3} sm={12} xl={3} xs={12}>
    <Stack width='70' display='flex' flexDirection='row'>
        
        <FormLabel sx={{mt: '15px', mr: '25px'}}>
            Name: 
        </FormLabel>
        <TextField
         onSubmit={handleSubmit}
         sx={{minWidth: 245, maxWidth: 245}}
         onChange={handleChange}
         placeholder= {currentUser.name}
        //  value= {currentUser.name}
         type= "name"
         name="name"
         id="name"
         variant="outlined"
         >
        </TextField>
    </Stack>
        
    </Grid>

    <Grid item lg={3} sm={12} xl={3} xs={12}>

    <Stack width='70' display='flex' flexDirection='row' >
        <FormLabel sx={{mt: '15px', mr: '25px'}}>
            Email: 
        </FormLabel>
        <TextField
         onSubmit={handleSubmit}
         sx={{minWidth: 245, maxWidth: 245}}
         onChange={handleChange}
         placeholder= {currentUser.email}
        //  value= currentUser.email
         type= "email"
         name="email"
         id="email"
         variant="outlined"
         >
        </TextField>
    </Stack>

    </Grid>


<Grid item lg={3.3} sm={12} xl={3.3} xs={12}>
    <Stack width='70' display='flex' flexDirection='row'>
      
        <FormLabel sx={{mt: '15px', mr: '25px'}}>
            Password: 
        </FormLabel>
        <Box sx={{minWidth: 245, maxWidth: 245}}>
        <TextField
           onSubmit={handleSubmit}
           sx={{minWidth: 245, maxWidth: 245}}
        //    onChange={handleInputChange}
            // value={currentUser.password}
            placeholder= "New Password"
            margin="normal"
            name="password"
            // value={password}
            onChange={handleChange}
    type={showPassword ? "text" : "password"} 
            id="password"
             // <-- This is where the magic happens
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
           </Box>
        
    </Stack>
    
</Grid>
<Container maxWidth={true}>

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
fullWidth
                    alignContent= 'center'
                    justifyContent='center'
                    >


                            <Button
                                onClick={handleSubmit}
                                alignContent= 'center'
                                justifyContent='center'
                                color='primary'
                                variant='outlined'
                                sx={{height: 60, width: 280, fontSize: '18px', borderRadius: 4 }}
                                > Submit Changes
                            </Button>
</Grid>
</Grid>

</Container>
</Grid>

: 
<>
</>


        }
    
                </Container>
                

            </Box>
        </React.Fragment>


    );
};

export default Profile;