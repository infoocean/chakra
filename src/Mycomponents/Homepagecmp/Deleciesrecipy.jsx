import React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  Flex,
  Spacer,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

const imgpath = "http://95.111.202.157:8001";

export default function Deleciesrecipy() {
  const [deleciesrecipy, setdeleciesrecipy] = useState([]);
  
  useEffect(() => {
    Getalldeleciesrecipy();
  },[]);

  function Getalldeleciesrecipy() {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'http://95.111.202.157:8001/api/v1/getAllRecipes',
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
    <Container maxW="6xl" mt={20} mb={6}>
      {/*<Flex>
        <Box>
          <Text fontSize="3xl" fontWeight="900">
            Try this delicious recipes
            <br/>
            to make your day
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text>Here is some paragraph.</Text>
        </Box>
      </Flex>
      */}
        <Flex>
          <Heading w={540}>Try this delicious receipe<br/> to make your day</Heading>
          <Text w={540}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
      <SimpleGrid mt={20} columns={[2, null, 3]} spacing="30px">
      {deleciesrecipy.map((value, key) => {
          return (
              <Box
                rounded="lg"
                position="relative"
              >
                <Box bg={'gray.100'} pos={'relative'}>
                  <Image src={imgpath + "/" + value.recipeId.image} layout={'fill'} />
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
                  <Text fontWeight={600}><i class="fa-solid fa-stopwatch"></i> Timer</Text>
                  <Text fontWeight={600}><i class="fa-solid fa-utensils"></i>  Spoons</Text>
                </Stack>
              </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
