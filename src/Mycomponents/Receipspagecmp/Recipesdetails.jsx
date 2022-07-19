import React ,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {
  Container,
  Heading,
  Stack,
  Box,
  Text,
  Spacer,
  Flex,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import Videosection from './Videosection';
import Ingradients from './Ingradients';
import Directions from './Directions';
import { Inboxemail } from '../Homepagecmp/Banner2';
import Blogpagerecips from './Recipes';

import { imagepath } from '../../Path/imgpath';



export default function Recipesdetailspage() {

    const { id } = useParams();
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
        
        console.log(getreceipsdet);
        //console.log(getreceipsdet.data.recipeId.title);
        //console.log(typeof(getreceipsdet));
    }

  return (
     <>
     <Container mt={6} mb={6} maxW="6xl">
        <Box>
          <Stack
            textAlign={'left'}
            align={'left'}
            spacing={{ base: 8, md: 10 }}
            >
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
              lineHeight={'110%'}>
              {getreceipsdet && getreceipsdet.data && getreceipsdet.data.recipeId && getreceipsdet.data.recipeId.title}
            </Heading>
          </Stack>
          <Stack>
            <Flex
              justifyContent="left"
              alignItems="left"
              overflow="hidden">
            <Spacer/>
              <Flex direction={'column'}>
                <Box
                  bg="#e4f0f7" 
                  mr={10}
                  as="div"
                  width={16}
                  height={16}
                  borderRadius='50%'
                  textAlign='center'
                  > 
                  <Text fontSize='2xl'   mt={5}>
                    <i className="fa-solid fa-print"></i>
                  </Text>
                </Box>
                <Text ml={2} mt={2}>PRINT</Text>
              </Flex>
              <Flex direction={'column'}>
                <Box
                  as="div"
                  bg="#e4f0f7"
                  borderRadius='50%' 
                  width={16}
                  height={16}
                  textAlign='center'
                  >
                  <Text  fontSize='2xl'  mt={5}>
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </Text>
                </Box>
                <Text ml={2} mt={2}>SHARE</Text>
              </Flex>
          </Flex>
          </Stack>
          <Stack>
            <Flex justifyContent='left'>
              <Stack direction={'row'} spacing={4} align={'center'} 
                   borderRight={2}
                   borderStyle={'solid'}
                   pr={5}
                   borderColor={useColorModeValue('gray.200', 'gray.900')}>
                <Avatar
                  src={imagepath+"/"+(getreceipsdet && getreceipsdet.data && getreceipsdet.data.recipeId && getreceipsdet.data.recipeId.userId && getreceipsdet.data.recipeId.userId.Image)}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}></Text>
                  <Text color={'gray.500'}>15 March 2022</Text>
                </Stack>
              </Stack>  
              <Stack direction={'row'} spacing={4} align={'center'} 
                   borderRight={2}
                   borderStyle={'solid'}
                   pr={5}
                   ml={5}
                   borderColor={useColorModeValue('gray.200', 'gray.900')}>
                 <i className="fa-solid fa-clock"></i>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>PREP TIME</Text>
                  <Text color={'gray.500'}>{getreceipsdet && getreceipsdet.data && getreceipsdet.data.recipeId && getreceipsdet.data.recipeId.userId && getreceipsdet.data.recipeId.prepTime}</Text>
                </Stack>
              </Stack>   
              <Stack direction={'row'} spacing={4} align={'center'} 
                   borderRight={2}
                   borderStyle={'solid'}
                   pr={5}
                   ml={5}
                   borderColor={useColorModeValue('gray.200', 'gray.900')}>
                  <i className="fa-solid fa-clock"></i>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>COOK TIME</Text>
                  <Text color={'gray.500'}>{getreceipsdet && getreceipsdet.data && getreceipsdet.data.recipeId && getreceipsdet.data.recipeId.userId && getreceipsdet.data.recipeId.cookTime}</Text>
                </Stack>
              </Stack> 
              <Stack direction={'row'} spacing={4} align={'center'} 
                   borderRight={2}
                   borderStyle={'solid'}
                   pr={5}
                   ml={5}
                   borderColor={useColorModeValue('gray.200', 'gray.900')}>
                <i className="fa-solid fa-utensils"></i>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>{getreceipsdet && getreceipsdet.data && getreceipsdet.data.recipeId && getreceipsdet.data.recipeId.categoryId && getreceipsdet.data.recipeId.categoryId.categoryName}</Text>
                </Stack>
              </Stack>         
            </Flex>
          </Stack>
        </Box>
     </Container>
     {/* videosection component */}
     <Videosection id = {id}/>
     {/* Ingradients component load */}
     <Ingradients/>
    {/* directions component */}
    <Directions/>
    {/* contact banner component  */}
    <Inboxemail/>
    {/* blogpage recipes  */}
    <Blogpagerecips/>
    </>
  );
}