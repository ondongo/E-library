import React from 'react'

import { Button, Flex, Box } from '@chakra-ui/react';

function FooterComponent() {
  return (
    <Box
      position="fixed"
      left="0"
      bottom="0"
      width="full"
      boxShadow="0 -2px 10px 0 rgba(0, 0, 0, 0.1)" // Adjust the values to match the shadow you desire
   
    >
      <Flex
        justify="space-between"
        align="center"
        p="4"
        bg="white"
        maxW="container.xl"
        m="auto"
      >
        <Button variant="ghost" colorScheme="gray">
          Réinitialiser
        </Button>
        <Button colorScheme="blue">
          Appliquer
        </Button>
      </Flex>
    </Box>
  );
}

export default FooterComponent;
