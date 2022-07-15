import {React, useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import posterimg from '../../Assets/Images/poster1.jpeg';
import {
  Circle,
  Image,
  useColorModeValue,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { imagepath } from '../../Path/imgpath';

const data = {
  imageURL:
    'https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/chicken-and-broccoli.jpg?quality=82&strip=1',
};

export default function Ourrecipes() {
  const [getallreceips, setgetallreceips] = useState([]);

  useEffect(() => {
    Getallrecipy();
  },[]);

  function Getallrecipy() {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'https://foodielandnod.herokuapp.com/api/v1/getAllRecipes',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      setgetallreceips(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    //console.log(getallreceips);
    //console.log(typeof(getallreceips));
  }

  return (
    <Container maxW="6xl"> 
        <Stack
          textAlign={'center'}
          align={'center'}
          py={{ base: 5, md: 10 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}>
            Our Simple and tasty recipes{' '}
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
        </Stack>
        <SimpleGrid columns={[2, null, 3]} spacing="35px">
        {getallreceips.slice(0,9).map((value, key) => {
          if (key != 5) {
            return (
              <Box id={key}
                rounded="lg"
                position="relative"
                role={'group'}
                w={'full'}
                h="300px"
                bgGradient="linear(to-b, white.0, #ceeaed)" 
                borderRadius={'20px'}
                pos={'relative'}
                zIndex={1}>
                  <Circle
                    size="50px"
                    position="absolute"
                    top={3}
                    right={2.5}
                    bg="#ffffff"
                  />
                <Box 
                 position="absolute"
                 top={25}
                 right={25}
                 color="#cc0000"
                 fontSize='20px'
                >
                <i className="fa-solid fa-heart"></i>
                </Box>
                    <Image h="200px" borderRadius={'15px'} objectFit={'cover'} w='full' src={imagepath + "/" + value.recipeId.image} layout={'fill'} />
                <Stack p={2} pt={4}>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'1xl'}
                    >
                      {value.recipeId.title}
                    </Heading>
                  </Stack>
                  <Stack p={2}  direction={'row'} spacing={6} align={'center'}>
                    <Text fontWeight={600}><i className="fa-solid fa-stopwatch"></i> {value.recipeId.prepTime} </Text>
                    <Text fontWeight={600}><i className="fa-solid fa-utensils"></i>  {value.recipeId.categoryId.categoryName}</Text>
                </Stack>
              </Box>
            );
          }else{
            return (
              <Box
                rounded="lg"
                position="relative"
                role={'group'}
                w={'full'}
                h="300px"
                bgGradient="linear(to-b, white.0, #ceeaed)" 
                borderRadius={'20px'}
                pos={'relative'}
                zIndex={1}>
                <Image h="300px" borderRadius={'15px'} objectFit={'cover'} w='full' 
                src={posterimg} layout={'fill'} />
              </Box>
            );
          }
          })}
        </SimpleGrid>
    </Container>
  );
}
