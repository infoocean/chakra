import {React, useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import {
  Flex,
  Circle,
  Image,
  Badge,
  useColorModeValue,
  Heading,
  Stack,
  Icon,
  Text,
  chakra,
  Tooltip,
} from '@chakra-ui/react';

const data = {
  imageURL:
    'https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/chicken-and-broccoli.jpg?quality=82&strip=1',
};

export default function Myreceipies() {
  
  const [receips, setreceips] = useState([]);

  useEffect(() => {
    Getallrecipy();
  },[]);

  function Getallrecipy() {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'http://95.111.202.157:8001/api/v1/getAllRecipes',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      setreceips(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(receips);
    console.log(typeof(receips));
  }

  return (
    <Container maxW="container.lg">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}>
            Simple and tasty recipes{' '}
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
        </Stack>
        <SimpleGrid columns={[2, null, 3]} spacing="35px">
        {receips.map((value, key) => {
            return (
              <Box
                bg="#dcf1fa"
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {value.recipeId.status && (
                  <Circle
                    size="25px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="red.200"
                  />
                )}
                <Image
                  src={data.imageURL}
                  alt={`Picture`}
                  roundedTop="lg"
                />
                <Stack p={2}>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'1xl'}
                    >
                      {value.recipeId.title}
                    </Heading>
                  </Stack>
                  <Stack p={2} direction={'row'} spacing={6} align={'center'}>
                    <Text fontWeight={600}><i class="fa-solid fa-stopwatch"></i> 30 Minuts </Text>
                    <Text fontWeight={600}><i class="fa-solid fa-utensils"></i>  Snacks</Text>
                </Stack>
              </Box>
            );
          })}
        </SimpleGrid>
    </Container>
  );
}
