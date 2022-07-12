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
                        h="200px"
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
                        <Image borderRadius='10%' h="200px" objectFit={'cover'} w='full' src={posterimg} layout={'fill'} />
                        </Box>
                        </Box>
                        <Box p='2'>
                            <Stack p={2}>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                            >
                            Chicken meatballs with creame cheese..
                            </Heading>
                            </Stack>
                            <Stack p={2} direction={'row'} spacing={4} align={'center'}>
                            <Text fontWeight={600}>By Andresh Paula </Text>
                            </Stack>
                        </Box>
                    </Flex>    
                </Stack>
                <Stack>
                    <Flex>
                        <Box 
                        rounded="lg"
                        position="relative"
                        role={'group'}
                        w={'full'}
                        h="160px"
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
                        <Image borderRadius='10%' h="160px" objectFit={'cover'} w='full' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/chicken-and-broccoli.jpg?quality=82&strip=1" layout={'fill'} />
                        </Box>
                        </Box>
                        <Box p='2'>
                            <Stack p={2}>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                            >
                            Chicken meatballs with creame cheese..
                            </Heading>
                            </Stack>
                            <Stack p={2} direction={'row'} spacing={4} align={'center'}>
                            <Text fontWeight={600}>By Andresh Paula </Text>
                            </Stack>
                        </Box>
                    </Flex>    
                </Stack>
                <Stack>
                    <Flex>
                        <Box 
                        rounded="lg"
                        position="relative"
                        role={'group'}
                        w={'full'}
                        h="160px"
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
                        <Image borderRadius='10%' h="160px" objectFit={'cover'} w='full' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/chicken-and-broccoli.jpg?quality=82&strip=1" layout={'fill'} />
                        </Box>
                        </Box>
                        <Box p='2'>
                            <Stack p={2}>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                            >
                            Chicken meatballs with creame cheese..
                            </Heading>
                            </Stack>
                            <Stack p={2} direction={'row'} spacing={4} align={'center'}>
                            <Text fontWeight={600}>By Andresh Paula </Text>
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
          w={'full'}
          pl={{ base: '0', sm: '0', lg: '40px' }}>
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
                        h="160px"
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
                        <Image borderRadius='10%' h="160px" objectFit={'cover'} w='full' src={posterimg} layout={'fill'} />
                        </Box>
                        </Box>
                        <Box p='2'>
                            <Stack p={2}>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                            >
                            Chicken meatballs with creame cheese..
                            </Heading>
                            </Stack>
                            <Stack p={2} direction={'row'} spacing={4} align={'center'}>
                            <Text fontWeight={600}>By Andresh Paula </Text>
                            </Stack>
                        </Box>
                    </Flex>    
                </Stack>
                <Stack>
                    <Flex>
                        <Box 
                        rounded="lg"
                        position="relative"
                        role={'group'}
                        w={'full'}
                        h="160px"
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
                        <Image borderRadius='10%' h="160px" objectFit={'cover'} w='full' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/chicken-and-broccoli.jpg?quality=82&strip=1" layout={'fill'} />
                        </Box>
                        </Box>
                        <Box p='2'>
                            <Stack p={2}>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                            >
                            Chicken meatballs with creame cheese..
                            </Heading>
                            </Stack>
                            <Stack p={2} direction={'row'} spacing={4} align={'center'}>
                            <Text fontWeight={600}>By Andresh Paula </Text>
                            </Stack>
                        </Box>
                    </Flex>    
                </Stack>
                <Stack>
                    <Flex>
                        <Box 
                        rounded="lg"
                        position="relative"
                        role={'group'}
                        w={'full'}
                        h="160px"
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
                        <Image borderRadius='10%' h="160px" objectFit={'cover'} w='full' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/chicken-and-broccoli.jpg?quality=82&strip=1" layout={'fill'} />
                        </Box>
                        </Box>
                        <Box p='2'>
                            <Stack p={2}>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
                            >
                            Chicken meatballs with creame cheese..
                            </Heading>
                            </Stack>
                            <Stack p={2} direction={'row'} spacing={4} align={'center'}>
                            <Text fontWeight={600}>By Andresh Paula </Text>
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
