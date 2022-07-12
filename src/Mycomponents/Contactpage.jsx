import React from 'react';
import {
  Container,
  Heading,
  Stack,
  Box,
  Text,
  Spacer,
  Flex,
  Avatar,
  useColorModeValue,
  Center,
  InputRightElement,Button, InputGroup,Input
} from '@chakra-ui/react';
import { Inboxemail } from './Homepagecmp/Banner2';
import Contactdelious from './Contactcmp/Deliousrecip';

export default function Contactpage() {
  return (
    <>
     <Container mt={6} mb={6} maxW="6xl">
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 5, md: 10 }}
                py={{ base: 10, md: 10}}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}>
                 Contact Us
                </Heading>
            </Stack>
          </Container>
          {/*recipe comp*/}
          <Contactdelious/>
          {/* contact banner component  */}
          <Inboxemail/>
      </>
  );
}