import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const names=['m','n','b','f']

const Prsonal = ({ names }) => {
  return (
  
    
    <Box bg="teal.500"  p={1} color="white">
      <Text fontSize="xl">کاربر گرامی خوش امدید  {names}</Text>
    </Box>

  )}
  

export default Prsonal
