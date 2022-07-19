import React from "react";
import {
    Container,
    Heading,
    chakra,
    SimpleGrid,
    StatsCard,
    Stack,
    Text,
    useColorModeValue,
    Box,
    InputRightElement,Button, InputGroup,Input
  } from '@chakra-ui/react';

const initialDetails = [
    {
      id: 1,
      imgPath: "/assets/img/1.png",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      address: "New Delhi, India",
    },
    {
      id: 2,
      imgPath: "/assets/img/2.png",
      name: "Mary Rosamund",
      email: "agra@rosie.com",
      address: "Tbilisi, India",
    },
    {
      id: 3,
      imgPath: "/assets/img/3.png",
      name: "Sherlock Watson",
      email: "irene@johnlock.com",
      address: "Baker Street, India",
    },
    {
      id: 4,
      imgPath: "/assets/img/4.png",
      name: "John Holmes",
      email: "mary@johnlock.com",
      address: "Baker Street, India",
    },
    {
      id: 5,
      imgPath: "/assets/img/5.png",
      name: "Mycroft Lestrade",
      email: "britishgovt@gmail.com",
      address: "London, India",
    },
  ];
  

export default function Search(initialDetails) {
    return (
        <Container mt={6} mb={6} maxW="6xl">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
               <Box>hii</Box>
               <Box>hii</Box>
               <Box>hii</Box>
            </SimpleGrid>
        </Container>
    );
  }