import React from 'react';
import { useState } from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Banner() {
  const [bannerdata, setbannerdata] = useState([]);

  function GetBannerdata() {}

  return (
    <Container mt={6} mb={6} maxW="6xl">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1}
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                width: 'full',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Everyone can be a chef in their own kichen
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Button
              size={'lg'}
              fontWeight={800}
              px={6}
              bg="#1b1d1f"  color="white"
              _hover={{ bg: 'red.500' }}
            >
              Lern More
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            rounded={'0xl'}
            boxShadow={'1xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
