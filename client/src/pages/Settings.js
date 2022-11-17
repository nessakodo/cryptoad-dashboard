import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Spacer from '../components/Spacer';
import CardHeader from '@mui/material/CardHeader'
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormLabel from '@mui/material/FormLabel';


const Settings = ( {loggedIn, onAdd, setCoins, coins, setCurrentUser, currentUser, membership, setMembership}) => {


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
  

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    }

    function handleCheckbox(e) {
        setFormData({ ...formData, [e.target.name]: e.target.checked })
    }

    function handleChecked() {
        setChecked(!checked)
    }


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
                    py: 8,
                    mt: '-720px'
                }}
            >
                <Container maxWidth={true}>

                <Stack maxWidth={true} >

                    <Grid fullWidth
                    sx={{padding: 2}}
                        
                        container spacing={6}
                        alignContent= 'center'
                        justifyContent='center'
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                    >
                        <Grid item lg={6} sm={12} xl={6} xs={12}>
                          
                        <Card
                        
        sx={ { borderRadius: 4, height: '444px', p: '30px'} }
        >
            <CardContent>
                <Grid 
                    container 
                    spacing={3} 
                    sx={{ justifyContent: 'space-between' }}
                    
                >
                    <Grid item>
                        <Typography 
                            variant='h6'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                            CRYPTOAD
                        </Typography>
                        <Spacer sx={{m: 3}}/>
                        <Typography 
                            variant='h2' 
                            color={theme.palette.text.primary}
                        >
                            Free Plan
                        </Typography>
                        <Spacer sx={{m: 3}}/>
                        <Typography 
                            variant='h6'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                            The Free plan allows you to browse live data for thousands of currencies and add them to a watchlist so that you can keep up to date with their currrent changes. You can also Utilize the position tracking features to keep track of your positions.
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Stack maxWidth={true} display="flex" flexDirection="row"  sx={{gap: 5}}>
                        <Avatar
                            sx={{
                                // backgroundColor: color,
                                height: 122,
                                width: 122,
                            }}
                        >
                            {/* <FontAwesomeIcon 
                                icon={icon} 
                                size='lg' 
                                color={theme.palette.common.white}
                            /> */}
                        </Avatar>
                        { membership ?
                        <Button
                        variant='outlined'
                        sx={{mt: '20px',height: 80, width: 300, fontSize: '28px', borderRadius: 4 }}>
                            Downgrade
                        </Button> 
                        :
                        <Button
                        variant='outlined'
                        sx={{mt: '20px',height: 80, width: 300, fontSize: '28px', borderRadius: 4, color: theme.palette.success.dark, borderColor: theme.palette.success.dark}}>
                            Active
                        </Button>
                        }
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

                        </Grid>

                        <Grid item lg={6} sm={12} xl={6} xs={12}>
                          
                        <Card
        sx={ { borderRadius: 4, height: '444px', p: '30px'} }
        >
            <CardContent>
                <Grid 
                    container 
                    spacing={3} 
                    sx={{ justifyContent: 'space-between' }}
                    
                >
                    <Grid item>
                        <Typography 
                            variant='h6'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                            CRYPTOAD
                        </Typography>
                        <Spacer sx={{m: 3}}/>
                        <Typography 
                            variant='h2' 
                            color={theme.palette.text.primary}
                        >
                            PRO Plan
                        </Typography>
                        <Spacer sx={{m: 3}}/>
                        <Typography 
                            variant='h6'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                            The PRO Plan offers you access to trading bots which you can customize the parameters of, all while building a record log of the gains and losses of both your active and closed positions. Try the CRYPTOAD PRO Plan free for one month by clicking below.
                        </Typography>
                    </Grid>

                    
                    <Grid item>
                    <Stack maxWidth={true} display="flex" flexDirection="row"  sx={{gap: 5}}>
                        <Avatar
                            sx={{
                                // backgroundColor: color,
                                height: 122,
                                width: 122,
                            }}
                        >
                            {/* <FontAwesomeIcon 
                                icon={icon} 
                                size='lg' 
                                color={theme.palette.common.white}
                            /> */}
                        </Avatar>
                        { membership ?
                        <Button
                        variant='outlined'
                        sx={{mt: '20px',height: 80, width: 300, fontSize: '28px', borderRadius: 4, color: theme.palette.success.dark, borderColor: theme.palette.success.dark }}>
                            Active
                        </Button> 
                        :
                        <Button
                        variant='outlined'
                        sx={{mt: '20px',height: 80, width: 300, fontSize: '28px', borderRadius: 4 }}>
                            Upgrade
                        </Button>
                        }
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

                            
                        </Grid>



                    </Grid>
                    </Stack>
                </Container>
                <Spacer sx={{m: 10}}/>
                <Container maxWidth={true}>

<Stack maxWidth={true} >
<Grid fullWidth
                        container spacing={3}
                        alignContent= 'center'
                        justifyContent='center'
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                    >
<Typography>Your Current Plan: </Typography>
</Grid>
<Spacer sx={{m: 2}}/>

<Grid 
                        container spacing={3}
                        alignContent= 'center'
                        justifyContent='center'
                        alignItems='center'
                      
                    >
<Typography
variant='h8'
sx={{fontSize: '45px'}}
>{membership ? "PRO Plan" : "Free Plan"} </Typography>
</Grid>
    </Stack>
    </Container>
   
            </Box>
        </React.Fragment>
        

)
}
export default Settings;