import React, { useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  theme,
  FormLabel,
  FormControl,
  CircularProgress,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
// import PasswordInput from './components/PasswordInput'
import { userLogin } from './utils/mockApi';
import { ErrorMessage } from './components/ErrorMessage';
import { Homepage } from './components/Homepage';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    setIsLoading(true);

    try {
      userLogin({ email, password });
      setIsLoggedIn(true);
      setIsLoading(false);
      setShowPassword(false);
    } catch (error) {
      setError('Username o password non corretti!');
      setIsLoading(false);
      setEmail('');
      setPassword('');
      setShowPassword(false);
    }
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <ChakraProvider theme={theme}>

    <Flex
      w="full"
      h="full"
      align="center"
      justify="center"
      direction="column"
      p="12"
    >
    <ColorModeSwitcher/>

    {isLoggedIn ? (
      <Homepage />
    ) : (
      <>
      <Flex
        p="4"
        align="center"
        justify="center"
        boxShadow="xl"
        borderRadius="xl"
        direction="column"
      >

        <Heading>login form</Heading>
        <form onSubmit={handleSubmit}>
          { error && <ErrorMessage message={error} /> }
          <FormControl isRequired>
            <FormLabel pl="4">Email</FormLabel>
              <InputGroup pt="0" pl="3" pr="3" pb="3">
                <Input
                  type="email"
                  placeholder="email@dominio.com"
                  onChange={event => setEmail(event.currentTarget.value)}
                />
              </InputGroup>
          </FormControl>

          <FormControl isRequired>
          <FormLabel pt="3" pl="4">Password</FormLabel>
            <InputGroup size="md" pt="0" pl="3" pr="3" pb="3">
              <Input
                pr="3.3rem"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                onChange={event => setPassword(event.currentTarget.value)}
              />
              <InputRightElement width="4.3rem" height="2.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handlePasswordVisibility}
                  >
                  {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Flex
            p="3"
            justify="right"
          >
            <Button type="submit">
            {isLoading ? (
              <CircularProgress
                isIndeterminate
                size="24px"
                color="teal"
              />
            ) : ('Sign in')
            }
            </Button>
          </Flex>

        </form>

      </Flex>
      </>
    )}
    </Flex>

  </ChakraProvider>
  );
}

export default App;
