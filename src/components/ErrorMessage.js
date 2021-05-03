import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertDescription,

} from '@chakra-ui/react';

export function ErrorMessage({message}) {
  return (
      <Alert mb="1rem"
        status="error"
        borderRadius={4}
      >
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
  )
}
