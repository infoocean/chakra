import React from 'react';
import{ useState,useEffect } from 'react';

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Stack,
    Image,
    HStack,
    VStack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const imgpath = "http://95.111.202.157:8001";

  export default function Blogpagerecips() {
    const [blogdeleciesrecipy, setblogdeleciesrecipy] = useState([]);

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
        setblogdeleciesrecipy(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  
      //console.log(blogdeleciesrecipy);
      //console.log(typeof(blogdeleciesrecipy));
    }
  
    return (
        <Container mt={6} mb={6} maxW="6xl">
            <Box>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'4xl'}>You may like these recipes to</Heading>
                </Stack>
                <SimpleGrid mt={20} columns={[2, null, 4]} spacing="30px">
                    {blogdeleciesrecipy.map((value, key) => {
                        return (
                            <Box 
                                rounded="lg"
                                position="relative"
                                role={'group'}
                                w={'full'}
                                h="250px"
                                bgGradient="linear(to-b, white.0, #def2fc)" 
                                boxShadow={'1xl'}
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
                                }} bg={'gray.100'} pos={'relative'} maxW='400px' max="400px" > 
                                <Box 
                                    position="absolute"
                                    top={2}
                                    right={2}
                                    color="Tomato"
                                    >
                                    <i className="fa-solid fa-heart"></i>
                                    </Box>
                                <Image h="150px" objectFit={'cover'} w='full' src={imgpath + "/" + value.recipeId.image} layout={'fill'} />
                                </Box>
                                <Stack p={2}>
                                <Heading
                                    //color={useColorModeValue('gray.700', 'white')}
                                    fontSize={'1xl'}
                                >
                                    {value.recipeId.title}
                                </Heading>
                                </Stack>
                                <Stack p={2} direction={'row'} spacing={4} align={'center'}>
                                <Text fontWeight={600}><i className="fa-solid fa-stopwatch"></i> Timer</Text>
                                <Text fontWeight={600}><i className="fa-solid fa-utensils"></i>  Spoons</Text>
                                </Stack>
                            </Box>
                        );
                        })}
                </SimpleGrid>
            </Box>
      </Container>
    );
  }