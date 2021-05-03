import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button
} from '@chakra-ui/core';

import { ColorModeSwitcher } from '../ColorModeSwitcher';
import PasswordInput from '../components/PasswordInput'

function LoginForm() {
  return (
    <Flex
      w="full"
      h="full"
      align="center"
      justify="center"
      direction="column"
      p="12"
    >
    <ColorModeSwitcher/>
      <Flex
        p="4"
        align="center"
        justify="center"
        boxShadow="xl"
        borderRadius="xl"
        direction="column"
      >

        <Heading>LOGIN FORM</Heading>

          <FormControl>
            <FormLabel>Email</FormLabel>
              <InputGroup p="3">
                <Input type="mail" placeholder="email@dominio.com"/>
              </InputGroup>
          </FormControl>

          <FormLabel>Password</FormLabel>
          <PasswordInput />

          <Button tupe="submit">
            Sign in
          </Button>


      </Flex>
    </Flex>
  );
}

export default LoginForm;
