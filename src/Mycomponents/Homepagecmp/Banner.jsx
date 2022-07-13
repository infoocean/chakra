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
            bgGradient="linear(to-b, white.0, blue.100)"
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/cooker%2Fimage-220.png?alt=media&token=acdfc1a1-ed68-4828-a969-cf76a35273d6%22'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
