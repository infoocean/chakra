import React from 'react';
import {
    Box,
    Container,
    Heading,
    Stack,
  } from '@chakra-ui/react';
  import Deleciesrecipy from '../../Cardcmp/Popularrecipecard';

  export default function Blogpagerecips() {
    return (
        <Container mt={6} mb={6} maxW="6xl">
            <Box>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'4xl'}>You may like these recipes to</Heading>
                </Stack>
                {/*load delious r4ecipe card cmp*/}
                <Deleciesrecipy/>
            </Box>
      </Container>
    );
  }