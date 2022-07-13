import React from 'react';
import {
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Box,
  InputRightElement,Button, InputGroup,Input
} from '@chakra-ui/react';
import { Inboxemail } from './Homepagecmp/Banner2';
import Blogrecipelistcmp from './Blogpagecmp/Blogreciplist';
import Deleciesrecipy from '../Cardcmp/Popularrecipecard';

export default function Blogpage() {
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
                  Blog & Article
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                  Never miss a meeting. Never be late for one too. Keep track of your
                  meetings and receive smart reminders in appropriate times. Read your
                  smart “Daily Agenda” every morning.
                </Text>
            </Stack>
            <Stack align={'center'}>
              <InputGroup w={{ base: '100px', sm: '400px', md: "700px" }}> 
              <Input
                type={'text'}
                placeholder={'search article, news or recipe...'}
                size='lg'
                color={useColorModeValue('gray.800', 'gray.200')}
                bg={useColorModeValue('gray.100', 'gray.600')}
                rounded={'full'}
                p={9} my={1} 
              />
              <InputRightElement width={'10rem'} pt={10}>
              <Button px={10}
                py={7}
                fontSize={'sm'}
                rounded={'full'}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'} _hover={{ bg: 'red.500' }}>
                Search
              </Button>
              </InputRightElement>
              </InputGroup>
            </Stack>
          </Container>
          {/* blog recipe list  cmp */}
          <Blogrecipelistcmp/>
          {/* contact banner component  */}
          <Inboxemail/>
          {/*checkout our delious recipe cmp*/}
          <Container mt={6} mb={6} maxW="6xl">
            <Box>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'4xl'}>Check out the deliceous recipe</Heading>
                </Stack>
                {/*render delious card cmp*/}
                <Deleciesrecipy/>
            </Box>
          </Container>
        </>
  ) ;
}