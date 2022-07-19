import { ReactNode } from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Stack,
  Container,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  HStack,
  Avatar,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { imagepath } from '../../Path/imgpath';
import posterimg from '../../Assets/Images/poster1.jpeg';

export default function Blogrecipelistcmp() {

  const [getallblogreceips, setgetallblogreceips] = useState([]);
  const [deleciesrecipy, setdeleciesrecipy] = useState([]);

  useEffect(() => {
    Getallblogrecipy();
    Getalldeleciesrecipy();
  },[]);

  function Getallblogrecipy() {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'https://foodielandnod.herokuapp.com/api/getAllBlog',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      setgetallblogreceips(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(getallblogreceips);
    console.log(typeof(getallblogreceips));

  }

  function Getalldeleciesrecipy() {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'https://foodielandnod.herokuapp.com/api/popularRecipes',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      setdeleciesrecipy(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    //console.log(deleciesrecipy);
    //console.log(typeof(deleciesrecipy));
  }

  
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
                {getallblogreceips.map((value, key) => {
                  return(
                    <Link to={`/getrecipesblogdetails/${value._id}`}>
                      <Flex>
                          <Box mb={5}
                              rounded="lg"
                              position="relative"
                              role={'group'}
                              w={230}
                              h="190px"
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
                                  <Image borderRadius='10%' w="100px" h="190px" objectFit={'cover'} src={imagepath+"/"+value.image} w='full'  layout={'fill'} />
                              </Box>
                          </Box>
                          <Box p='3' pl={5} mb={5} w={'500px'}>                         
                                <Stack>
                                  <Heading mb={2}
                                  color={useColorModeValue('gray.700', 'white')}
                                  fontSize={{ base: '1xl', sm: '2xl', lg: 'xl' }}
                                  >
                                  {value.title}
                                  </Heading>
                                  <Text  >
                                  {value.description}
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
                                        src={imagepath+"/"+value.userId.Image}
                                        alt={'Author'}
                                        />
                                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                        <Text fontWeight={600}>{value.userId.firstName+" "+value.userId.firstName}</Text>
                                        </Stack>
                                    </Stack>  
                                    <Stack direction={'row'} spacing={4} align={'center'} 
                                        pr={5}
                                        ml={5}
                                        borderColor={useColorModeValue('gray.200', 'gray.900')}>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                        <Text fontWeight={600}>{value.userId.createdAt} </Text>
                                        </Stack>
                                    </Stack>          
                                    </Flex>
                                </Stack>
                            
                          </Box>
                      </Flex>  
                    </Link>
                  )
                  })}  
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
                {deleciesrecipy.map((value, key) => {
                  return (
                    <Link to={`/getrecipesdetails/${value._id}`}>
                      <Flex pt={10}>
                        <Box 
                        rounded="lg"
                        position="relative"
                        role={'group'}
                        w={'full'}
                        h="130px"
                        width={'150px'}
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
                        <Image borderRadius='10%'  width={'150px'} h="130px" objectFit={'cover'} w='full' src={imagepath + "/" + value.recipeId.image} layout={'fill'} />
                        </Box>
                        </Box>
                        <Box width={'200px'} p='2' mt={2}>
                            <Stack>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={{ base: 'sm', sm: '1xl', lg: 'md' }}
                            >
                            {value.recipeId.title}
                            </Heading>
                            </Stack>
                            <Stack direction={'row'} spacing={4} pt={3}>
                            <Text fontSize={{ base: '1xl', sm: '2xl', lg: 'md' }} >By <b>{value.recipeId.userId.firstName +" "+value.recipeId.userId.firstName}</b> </Text>
                            </Stack>
                        </Box>
                      </Flex>    
                    </Link>
                  );
                })}
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
