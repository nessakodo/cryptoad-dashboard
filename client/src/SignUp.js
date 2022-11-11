import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";


import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/themeAuth.js";


// Assets
import signInImage from "assets/img/signInImage.png";

// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

// Routes

function SignUp( currentUser, setCurrentUser, setLoggedIn, LoggedIn ) {

  const history = useHistory();
  const titleColor = "white";
  const textColor = "gray.400";
  const errorColor = "red.300";


  // Sign in click
  function onClick() {
    history.push('/signin')
  }

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
                // home page pushed after login
                // history.push('/dashboard');
            });
            } else {
                res.json().then((data) => {
                    setErrors(Object.entries(data.errors));
                    console.log(errors)
                });
            }
        });
    }


  return (
    <ChakraProvider theme={theme} resetCss={false} w='100%'>
    <Flex position='relative'>
      <Flex
        minH='100vh'
        h={{ base: "120vh", lg: "fit-content" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: "100px", md: "0px" }}
        flexDirection='column'
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px='50px'
          maxH='2xl'
          >
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
            mb={{ base: "60px", lg: "95px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Welcome!
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Create an account to start trading
            </Text>
            {errors.length == 0 ?
            <Text
            mb='36px'
            ms='4px'
            color={textColor}
            fontWeight='bold'
            fontSize='14px'>
                <></>
            </Text>
            :
            <Text
            mb='36px'
            ms='4px'
            color={errorColor}
            fontWeight='bold'
            fontSize='14px'>
                This email has already been taken
            </Text>
            }
            <FormControl isRequired>
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Name
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  name='name'
                  value={name}
                  onChange={handleChange}
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  placeholder='Your name'
                />
              </GradientBorder>
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Email
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  required={true}
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder='Your email adress'
                />
              </GradientBorder>
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Password
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  type="password"
                  name="password"
                  required={true}
                  value={password}
                  onChange={handleChange}
                  placeholder='Your password'
                />
              </GradientBorder>
            </FormControl>
            <FormControl display='flex' alignItems='center'>
              <DarkMode>
                <Switch id='remember-login' colorScheme='brand' me='10px' />
              </DarkMode>
              <FormLabel
                htmlFor='remember-login'
                mb='0'
                ms='1'
                fontWeight='normal'
                color='white'>
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              variant='brand'
              fontSize='15px'
              type='submit'
              w='100%'
              maxW='350px'
              h='45'
              mb='20px'
              mt='20px'
              onClick={handleSubmit}
              >
              SIGN UP
            </Button>

            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Already have an account?
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold' onClick={onClick}>
                  Sign In
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='80px'>
          <AuthFooter />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX='hidden'
          h='100%'
          maxW={{ md: "50vw", lg: "50vw" }}
          minH='100vh'
          w='960px'
          position='absolute'
          left='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            position='absolute'>
            <Text
              textAlign='center'
              color='white'
              letterSpacing='8px'
              fontSize='15px'
              fontWeight='500'>
              STRATEGY SIMPLIFIED
            </Text>
            <Text
              textAlign='center'
              color='transparent'
              letterSpacing='8px'
              fontSize='56px'
              fontWeight='bold'
              bgClip='text !important'
              bg='linear-gradient(45.56deg, #FFFFFF 85.99%, #21242F 102.65%)'>
              CRYPTOAD
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
    </ChakraProvider>
  );
}

export default SignUp;
