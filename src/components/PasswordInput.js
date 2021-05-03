import React from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl>
    <FormLabel pt="3" pl="4">Password</FormLabel>
      <InputGroup size="md" p="3">
        <FormControl isRequired>
        <Input
          pr="3.3rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          // onChange={event => setPassword(event.currentTarget.value)}
        />
        </FormControl>
        <InputRightElement width="4.3rem" height="4rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <ViewOffIcon/> : <ViewIcon/>}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default PasswordInput;
