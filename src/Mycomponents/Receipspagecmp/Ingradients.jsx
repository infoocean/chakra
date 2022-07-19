import { ReactNode ,useState,useEffect} from 'react';
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
  SimpleGrid,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react';
const imgpath = "http://95.111.202.157:8001";

import posterimg from '../../Assets/Images/poster1.jpeg';

export default function Ingradients(props) {
     
    const id = props.id;
    //console.log(id);
    const [getreceipsdet, setgetreceipsdet] = useState([]);
    useEffect(() => {
        Getrecipydet();
    },[]);
    function Getrecipydet() {

        const url= 'https://foodielandnod.herokuapp.com/api/recipeDetails?id=';
        const axios = require('axios');
        const config = {
        method: 'get',
        url: url+id,
        headers: { }
        };
        axios(config)
        .then(function (response) {
            setgetreceipsdet(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
        
        //console.log(getreceipsdet);
        //console.log(getreceipsdet.data.ingredient);
        //console.log(getreceipsdet.data.ingredient[0].formaindish);
        //console.log(typeof(getreceipsdet));
    }


    

  return (
    
    <Container  mt={6} mb={6} maxW="6xl">
      <Stack w="full"
        py={{ base: 10, md: 10 }}
        direction={{ base: 'column', md: 'row' }}>
        <Box flex={1} spacing={{ base: 5, md: 10 }} maxW="4xl">
        <Stack>
            <Stack >
                <Text
                    fontFamily={'heading'}
                    fontWeight={700}
                    fontSize={'4xl'}
                    color={'#000000'}>
                    Ingredients
                </Text>
                <Heading
                    pt={12}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span">For Main Dish</Text>
                </Heading>
            </Stack>
            
                <Stack 
                    //id={key}
                    borderBottom={2}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    h="100px">
                    <Text
                        pt={4}
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        <Text  as="span"  color={'gray.600'}>
                        <i className="fa-solid fa-circle-check"></i>
                        </Text>
                        <Text  as='del'  pl={8}> Leorem ispum dollor sit amet</Text>
                    </Text>
                </Stack>
          
            
            <Stack borderBottom={2}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    h="100px">
                <Text
                    pt={4}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span"  color={'gray.600'}>
                    <i className="fa-regular fa-circle"></i>
                    </Text>
                    <Text  as='span'  pl={8}> Leorem ispum dollor sit amet</Text>
                </Text>
            </Stack>
            <Stack borderBottom={2}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    h="100px">
                <Text
                    pt={4}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span"  color={'gray.600'}>
                    <i className="fa-regular fa-circle"></i>
                    </Text>
                    <Text   as='span'  pl={8}> Leorem ispum dollor sit amet</Text>
                </Text>
            </Stack>
            <Stack borderBottom={2}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    h="100px">
                <Text
                    pt={4}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span"  color={'gray.600'}>
                    <i className="fa-regular fa-circle"></i>
                    </Text>
                    <Text   as='span'  pl={8}> Leorem ispum dollor sit amet</Text>
                </Text>
            </Stack>
            <Stack borderBottom={2}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    h="100px">
                <Text
                    pt={4}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span"  color={'gray.600'}>
                    <i className="fa-regular fa-circle"></i>
                    </Text>
                    <Text   as='span'  pl={8}> Leorem ispum dollor sit amet</Text>
                </Text>
            </Stack>
        </Stack>
        <Stack>
            <Stack >
                <Heading
                    pt={12}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span">For Souce</Text>
                </Heading>
            </Stack>
            <Stack borderBottom={2}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    h="100px">
                <Text
                    pt={4}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span"  color={'gray.600'}>
                    <i className="fa-regular fa-circle"></i>
                    </Text>
                    <Text   as='span'  pl={8}> Leorem ispum dollor sit amet</Text>
                </Text>
            </Stack>
            <Stack borderBottom={2}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    h="100px">
                <Text
                    pt={4}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span"  color={'gray.600'}>
                    <i className="fa-regular fa-circle"></i>
                    </Text>
                    <Text   as='span'  pl={8}> Leorem ispum dollor sit amet</Text>
                </Text>
            </Stack>
            <Stack borderBottom={2}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    h="100px">
                <Text
                    pt={4}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span"  color={'gray.600'}>
                    <i className="fa-regular fa-circle"></i>
                    </Text>
                    <Text   as='span'  pl={8}> Leorem ispum dollor sit amet</Text>
                </Text>
            </Stack>
        </Stack>
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
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                    Other Recipes 
                </Heading>
                <Stack pt={12}>
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
                <Stack pt={8}>
                    <Flex>
                        <Box 
                        rounded="lg"
                        position="relative"
                        role={'group'}
                        bgGradient="linear(to-b, white.0, #ceeaed)" 
                        boxShadow={'1xl'}
                        pos={'relative'}
                        zIndex={1}
                        h="350px"
                        w={'full'}
                    >
                        <Box  
                        rounded={'lg'}
                        pos={'relative'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
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
                        }} bg={'gray.100'} > 
                        <Image h="350px" objectFit={'cover'} w='full' src={posterimg} layout={'fill'} />
                        </Box>
                        </Box>
                    </Flex>    
                </Stack>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
