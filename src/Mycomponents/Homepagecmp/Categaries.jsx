import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  Container,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  SimpleGrid,
  Button,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { imagepath } from '../../Path/imgpath';

export default function Categeries() {

  const[mycatdata , setmycatdata] = useState([]);

  useEffect(() => {
    getAllCategory();
  },[]);

  function getAllCategory () {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'https://foodielandnod.herokuapp.com/api/getAllCategory',
      headers: {},
    };
    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setmycatdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      //console.log(mycatdata);
      //console.log(typeof(mycatdata));
  };

  return (
    <Container mt={6} mb={6} maxW="6xl">
      <Flex>
        <Box>
          <Text fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} fontWeight="800">
            Categories 
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Link to="/ShowAllCategories">
            <Button bg="#cceefc" size="lg">
              {' '}
              View All Categories 
            </Button>
          </Link>
        </Box>
      </Flex>
      <SimpleGrid mt={6} columns={[3, null, 6]} spacing="20px">
          {mycatdata.map((value, key) => {
              return (
              <Link  key={key} to={`/ShowCategoriesByRecipes/${value._id}`}>
                <Box
                  key={key}
                  role={'group'}
                  p={4}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
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
                    }}
                  >
                    <Image rounded={'lg'} objectFit={'cover'} src={imagepath+"/"+value.image} />
                  </Box>
                  <Stack align={'center'}>
                    <Heading
                      pt={4}
                      fontSize={'1xl'}
                      fontFamily={'body'}
                      fontWeight={700}
                    >
                      {value.categoryName}
                    </Heading>
                  </Stack>
                </Box>
              </Link>
              );
            })}
      </SimpleGrid>
    </Container>
  );
}
