import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Image,
  Text,
  Grid,
  Spacer,
  Heading,
  HStack,
  Avatar,
  Button,
  SimpleGrid,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react';
const imgpath = "http://95.111.202.157:8001";

import posterimg from '../../Assets/Images/poster1.jpeg';

export default function Blogrecipelistcmp() {
  return (
    
    <Container  mt={6} mb={6} maxW="6xl">
      <Stack w="full"
        py={{ base: 10, md: 10 }}
        direction={{ base: 'column', md: 'row' }}>
        <Box flex={1} spacing={{ base: 5, md: 10 }} maxW="4xl">
        <Flex
          flex={1}
          >
          <Box
            width={750}
            overflow={'hidden'}
           >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Stack pt={12}>
                    <Flex>
                        <Box 
                            rounded="lg"
                            position="relative"
                            role={'group'}
                            w={300}
                            h="180px"
                            bgGradient="linear(to-b, white.0, #ceeaed)" 
                            boxShadow={'1xl'}
                            pos={'relative'}
                            zIndex={1}
                            >
                            <Box  
                            rounded={'lg'}
                            pos={'relative'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                
                                filter: 'blur(15px)',
                                zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                    filter: 'blur(20px)',
                                    },
                                }} bg={'gray.100'}> 
                                <Image borderRadius='10%'  h="180px" objectFit={'cover'} w='full' src={posterimg} layout={'fill'} />
                            </Box>
                        </Box>
                        <Box p='3' pl={5}>
                            <Stack>
                                <Heading mb={2}
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: '1xl', sm: '2xl', lg: 'xl' }}
                                >
                                Chicken meatballs with creame cheese..
                                </Heading>
                                <Text  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et ea rebum.
                                </Text>
                            </Stack>
                            <Stack mt={4}>
                                <Flex>
                                <Stack direction={'row'} spacing={4} align={'center'} 
                                    borderRight={2}
                                    borderStyle={'solid'}
                                    pr={5}
                                    borderColor={useColorModeValue('gray.200', 'gray.900')}>
                                    <Avatar
                                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                                    alt={'Author'}
                                    />
                                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>John Smith</Text>
                                    </Stack>
                                </Stack>  
                                <Stack direction={'row'} spacing={4} align={'center'} 
                                    pr={5}
                                    ml={5}
                                    borderColor={useColorModeValue('gray.200', 'gray.900')}>
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}> 15 March 2022</Text>
                                    </Stack>
                                </Stack>          
                                </Flex>
                            </Stack>
                        </Box>
                    </Flex>    
                </Stack>
            </Stack>
          </Box>
        </Flex>
        </Box>
        <Flex
          flex={1}
          w={'full'}>
          <Box
            width={'full'}
            overflow={'hidden'}
           >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Stack pt={10}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                    Tasty recipes
                </Heading>
                    <Flex pt={10}>
                        <Box 
                        rounded="lg"
                        position="relative"
                        role={'group'}
                        w={'full'}
                        h="130px"
                        bgGradient="linear(to-b, white.0, #ceeaed)" 
                        boxShadow={'1xl'}
                        pos={'relative'}
                        zIndex={1}
                    >
                        <Box  
                        rounded={'lg'}
                        pos={'relative'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                            filter: 'blur(20px)',
                            },
                        }} bg={'gray.100'}  maxW='400px' max="400px" > 
                        <Image borderRadius='10%' h="130px" objectFit={'cover'} w='full' src={posterimg} layout={'fill'} />
                        </Box>
                        </Box>
                        <Box p='2' mt={2}>
                            <Stack>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: '1xl', sm: '2xl', lg: 'md' }}
                            >
                            Chicken meatballs with creame cheese..
                            </Heading>
                            </Stack>
                            <Stack direction={'row'} spacing={4} pt={3}>
                            <Text fontSize={{ base: '1xl', sm: '2xl', lg: 'md' }} >By <b>Andresh Paula</b> </Text>
                            </Stack>
                        </Box>
                    </Flex>    
                </Stack>
            </Stack>
          </Box>
        </Flex>
      </Stack>
      <HStack pt={5}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>...</Button>
        <Button>)</Button>
      </HStack>
    </Container>
  );
}
