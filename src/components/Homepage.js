import React, { useState, useEffect } from 'react';
import {
  Heading,
  Flex,
  Text
} from '@chakra-ui/react';

const date = new Date();

export function Homepage() {
  const [dataTime, setDateTime] = useState({
    ore: date.getHours(),
    minuti: date.getMinutes(),
    secondi: date.getSeconds()
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      var ora = date.getHours();
      var minuto = date.getMinutes();
      var secondo = date.getSeconds();
      if(ora < 10) { ora = '0' + ora; }
      if(minuto < 10) { minuto = '0' + minuto; }
      if(secondo < 10) { secondo = '0' + secondo; }
      setDateTime({
        ore: ora,
        minuti: minuto,
        secondi: secondo
      });
    }, 1000); //ogni secondo
    return () => clearInterval(timer);
  }, []);

  return (
    <Flex
      p="4"
      align="center"
      justify="center"
      boxShadow="xl"
      borderRadius="xl"
      direction="column"
    >
      <Heading mb="1">Ora corrente</Heading>
      <Text>Sono le ore: {dataTime.ore}:{dataTime.minuti}:{dataTime.secondi}</Text>
    </Flex>
  );
}
