import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Container,
  Heading,
  Avatar,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  Flex,
  Image,
  Box,
  InputRightElement,
  Button, 
  InputGroup,
  Input
} from '@chakra-ui/react';
import { imagepath } from '../../Path/imgpath';

export default function RearchRecipes () {
  const [getallreceips, setgetallreceips] = useState([]);
  const [deleciesrecipy, setdeleciesrecipy] = useState([]);
  const [Search, setSearch] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if(Search ===''){
      Getallrecipy();
    }else{
      GetallSearchrecipy();
    }
    Getalldeleciesrecipy();
  },[Search]);

  function Getallrecipy() {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'https://foodielandnod.herokuapp.com/api/v1/getAllRecipes',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      setgetallreceips(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    //console.log(getallreceips);
    //console.log(typeof(getallreceips));
  }

  function GetallSearchrecipy() {
    const axios = require('axios');
    const url= 'https://foodielandnod.herokuapp.com/api/searcRecipe?key=';
    const config = {
      method: 'get',
      url:url+Search,
      headers: { }
    };

    axios(config)
    .then(function (response) {
      setgetallreceips(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    //console.log(getallreceips);
    //console.log(typeof(getallreceips));
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

  function handlesearch(e){
    setSearch(e.target.value);
  }
  function Searchsubmit(e){
      setSearch(Search);
      if(Search ===''){
        alert("Required Feilds");  
      } 
  }

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
                name="search"
                value={Search}
                onChange={handlesearch}
                placeholder={'search article, news or recipe...'}
                size='lg'
                color={useColorModeValue('gray.800', 'gray.200')}
                bg={useColorModeValue('gray.100', 'gray.600')}
                rounded={'full'}
                p={9} my={1} 
              />
              <InputRightElement width={'10rem'} pt={10}>
              <Button onClick={Searchsubmit} px={10}
                py={7}
                type="submit"
                name="submit"
                fontSize={'sm'}
                rounded={'full'}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'} _hover={{ bg: 'red.500' }}>
                Search
              </Button>
              </InputRightElement>
              </InputGroup>
            </Stack>
            <Stack w="full"
              py={{ base: 10, md: 10 }}
              direction={{ base: 'column', md: 'row' }}>   
                <Box flex={1} spacing={{ base: 5, md: 10 }} maxW="4xl">
                {getallreceips.map((value, key) => {
                    if(Search ===""){
                      return(
                        <Link key={key} to={`/getrecipesdetails/${value && value._id}`}>
                          <Flex
                          flex={1}
                          id={key}
                          recipes_id={value._id}
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
                                                      <Image borderRadius='10%'  w="100px" h="190px" objectFit={'cover'} w='full' src={imagepath + "/" + (value.recipeId && value.recipeId.image)}  layout={'fill'} />
                                                  </Box>
                                              </Box>
                                              <Box p='3' pl={5} w={'500px'}>
                                                  <Stack>
                                                      <Heading  mb={2}
                                                      color={useColorModeValue('gray.700', 'white')}
                                                      fontSize={{ base: '1xl', sm: '2xl', lg: 'xl' }}
                                                      >
                                                      {value.recipeId && value.recipeId.title}
                                                      </Heading>
                                                      <Text  >
                                                      {value.recipeId && value.recipeId.description}
                                                      </Text>
                                                  </Stack>
                                                  <Stack mt={4}>
                                                      <Flex>
                                                        <Stack id={value._id} direction={'row'} spacing={4} align={'center'} 
                                                            borderRight={2}
                                                            borderStyle={'solid'}
                                                            pr={5}
                                                            borderColor={useColorModeValue('gray.200', 'gray.900')}>
                                                            <Avatar
                                                            src={imagepath + "/" +(value.recipeId && value.recipeId.userId && value.recipeId.userId.Image)}
                                                            alt={'Author'}
                                                            />
                                                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                                          <Text fontWeight={600}>{(value.recipeId && value.recipeId.userId && value.recipeId.userId.firstName) +" "+ (value.recipeId && value.recipeId.userId  && value.recipeId.userId.lastName)}</Text>
                                                            </Stack>
                                                        </Stack>  
                                                        <Stack direction={'row'} spacing={4} align={'center'} 
                                                            pr={5}
                                                            ml={5}
                                                            borderColor={useColorModeValue('gray.200', 'gray.900')}>
                                                            <i className="fa-solid fa-calendar-days"></i>
                                                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                                            <Text fontWeight={600}> {value && value.createdAt}</Text>
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
                        </Link>
                      )
                    }else{
                      return(
                        <Link key={key} to={`/getrecipesdetails/${value._id}`}>
                          <Flex
                          flex={1}
                          id={key}
                          recipes_id={value._id}
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
                                                      <Image borderRadius='10%'  w="100px" h="190px" objectFit={'cover'} w='full' src={imagepath + "/" + ((value) && (value.image))}  layout={'fill'} />
                                                  </Box>
                                              </Box>
                                              <Box p='3' pl={5} w={'500px'}>
                                                  <Stack>
                                                      <Heading  mb={2}
                                                      color={useColorModeValue('gray.700', 'white')}
                                                      fontSize={{ base: '1xl', sm: '2xl', lg: 'xl' }}
                                                      >
                                                  {value.title && value.title}
                                                      </Heading>
                                                      <Text  >
                                                      {value && value.description}
                                                      </Text>
                                                  </Stack>
                                                  <Stack mt={4}>
                                                    <Flex>
                                                      <Stack id={value.userId} direction={'row'} spacing={4} align={'center'} 
                                                          borderRight={2}
                                                          borderStyle={'solid'}
                                                          pr={5}
                                                          borderColor={useColorModeValue('gray.200', 'gray.900')}>
                                                          <Avatar
                                                          src={imagepath + "/" +((value) && (value.userId))}
                                                          alt={'Author'}
                                                          />
                                                          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                                        <Text fontWeight={600}>{value &&  value.userId}</Text>
                                                          </Stack>
                                                      </Stack>  
                                                      <Stack direction={'row'} spacing={4} align={'center'} 
                                                          pr={5}
                                                          ml={5}
                                                          borderColor={useColorModeValue('gray.200', 'gray.900')}>
                                                          <i className="fa-solid fa-calendar-days"></i>
                                                          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                                          <Text fontWeight={600}> {value &&  value.createdAt}</Text>
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
                        </Link>
                    )
                    }
                    
                  })}
                  <HStack align={'center'} pt={5}>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>...</Button>
                    <Button>)</Button>
                  </HStack>
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
                              <Link key={key} to={`/getrecipesdetails/${value._id}`}>
                                <Flex id={key} pt={10}>
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
          </Container>
        </>
  ) ;
}