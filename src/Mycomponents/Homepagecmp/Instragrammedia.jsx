import React from 'react';
import { useState } from 'react';
import {
  Text,
  Container,
  useColorModeValue,
  Avatar,
  Heading,
  Stack,
  Image,
  SimpleGrid,
  Button,
  Flex,
  Spacer,
  Box,
  Center,
} from '@chakra-ui/react';

const IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4ompJ3n-M2UQZv4jerf8FwgoPXfMetcM0Q&usqp=CAU';

export default function Instragramsection() {
  return (
    <Container mt={20} mb={6} maxW="6xl" bgGradient="linear(to-b, white.0, blue.100)" > 
      <Stack
        textAlign={'center'}
        align={'center'}
       
        py={{ base: 10, md:45}}
      >
        <Heading
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          fontWeight={800}
        >
          Check out @foodieland on instragram
        </Heading>
        <Text color={'gray.500'} maxW={'2xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times.
        </Text>
      </Stack>
      <Box p={5}>
        <SimpleGrid  columns={[2, null, 4]} spacing="20px">
          <Box bg={useColorModeValue('white', 'gray.900')}>
            <Flex p={2}>
              <Box>
                <Stack direction={'row'} spacing={2} align={'center'}>
                  <Avatar
                    w={10}
                    h={10}
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                  />
                  <Stack direction={'column'} fontSize={'sm'}>
                    <Text fontWeight={700}> Foodieland </Text>
                    <Text className='location'>Tokyo, Japan</Text>
                  </Stack>
                </Stack>
              </Box>
              <Spacer />
              <Box>
                <Stack direction={'column'} fontSize={'sm'}>
                  <Text fontWeight={700}><i class="fa-solid  fa-ellipsis-vertical"></i></Text>
                </Stack>
              </Box>
            </Flex>
            <Box
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
            >
              <Box bg={useColorModeValue('white', 'gray.900')} layout={'fill'} p={2} pos={'relative'}>
                <Image src={IMAGE} layout={'fill'} />
              </Box>
              <Stack p={2}>
                <Flex>
                  <Box>
                    <Stack direction={'row'} spacing={2} align={'center'}>
                      <Text fontWeight={700}><i class="fa-solid fa-heart"></i></Text>
                      <Text fontWeight={700}><i class="fa-solid fa-comment"></i></Text>
                      <Text fontWeight={700}><i class="fa-solid fa-paper-plane"></i></Text>
                    </Stack>
                  </Box>
                  <Spacer />
                  <Box>
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                      <Text fontWeight={700}><i class="fa-solid fa-bookmark"></i></Text>
                    </Stack>
                  </Box>
                </Flex>
              </Stack>
              <Stack p={1.5}>
                <Text fontSize={'sm'} as="span">
                  {' '}
                  <Avatar
                    w={5}
                    h={5}
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                  />
                {''} Liked By <b>Shub_sirts</b> and  <b>445</b>
                </Text>
              </Stack>
              <Stack pl={2} pr={1} direction={'row'} spacing={4} align={'center'}>
                <Text  fontSize={12}>
                  <b>Foodieland.</b> Never miss meet. Never be late for one too. A Keep
                  track.{' '}
                </Text>
              </Stack>
              <Stack  p={2} direction={'row'} spacing={2} align={'center'}>
                <Text fontSize={12} fontWeight={100}>September 10</Text>
              </Stack>
            </Box>
          </Box>
        </SimpleGrid>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 5, md: 6 }}
          py={{ base: 10, md: 15 }}
        >
          <Heading
            fontSize={{ base: '2xl', sm: '3xl', md: '6xl' }}
            fontWeight={700}
          >
            <Button bg="#1b1d1f" _hover={{ bg: 'red.500'}} color="white">View For Instragram {'    '} <Text> 
                <b><i class="fa-brands fa-instagram"></i></b></Text> 
             </Button>
          </Heading>
        </Stack>
      </Box>
    </Container>
  );
}
