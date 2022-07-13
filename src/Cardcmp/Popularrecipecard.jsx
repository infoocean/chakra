import React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

import { imagepath } from '../Path/imgpath';

export default function Deleciesrecipy() {
  const [deleciesrecipy, setdeleciesrecipy] = useState([]);
  
  useEffect(() => {
    Getalldeleciesrecipy();
  },[]);

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

    console.log(deleciesrecipy);
    //console.log(typeof(deleciesrecipy));
  }

  return (
      <SimpleGrid mt={20} columns={[2, null, 4]} spacing="30px">
      {deleciesrecipy.map((value, key) => {
          return (
              <Box 
                rounded="lg"
                position="relative"
                role={'group'}
                w={'full'}
                h="250px"
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
                  <Box 
                    position="absolute"
                    top={2}
                    right={2}
                    color="Tomato"
                    >
                    <i className="fa-solid fa-heart"></i>
                  </Box>
                  <Image h="150px" objectFit={'cover'} w='full' src={imagepath + "/" + value.recipeId.image} layout={'fill'} />
                </Box>
                <Stack p={2}>
                  <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'1xl'}
                  >
                    {value.recipeId.title}
                  </Heading>
                </Stack>
                <Stack p={2} direction={'row'} spacing={4} align={'center'}>
                  <Text fontWeight={600}><i className="fa-solid fa-stopwatch"></i>{value.recipeId.cookTime} </Text>
                  <Text fontWeight={600}><i className="fa-solid fa-utensils"></i> {value.recipeId.categoryId.categoryName}</Text>
                </Stack>
              </Box>
          );
        })}
      </SimpleGrid>
  );
}
