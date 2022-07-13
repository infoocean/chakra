import React from 'react';
import {
  Container,
  Stack,
  Box,
  Heading,

} from '@chakra-ui/react';
import Deleciesrecipy from '../../Cardcmp/Popularrecipecard';

export default function Contactdelious() {
  return (
    <Container mt={6} mb={6} maxW="6xl">
      <Box>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'4xl'}>Check out the deliceous recipe</Heading>
          </Stack>
          {/*render delious card cmp*/}
          <Deleciesrecipy/>
      </Box>
    </Container>
  );
}     