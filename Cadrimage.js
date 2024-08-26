import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import logo from '../images/download.png'
const  Cadrimage= () => {
  return (
    <Box boxSize="sm">
      <Image  

       src={logo} alt='' width='50px'   height='50px'  />
    </Box>
  );
};

export default Cadrimage;
