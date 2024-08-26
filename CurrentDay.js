import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CurrentDay = () => {
  const days = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
  const today = new Date().getDay();

  return (
    <Box p={1} shadow="md" borderWidth="1px">
      <Text fontSize='md'>امروز {days[today]} است</Text>
    </Box>
  );
};

export default CurrentDay;
