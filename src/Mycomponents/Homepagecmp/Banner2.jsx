import { Flex, Image, Box, Text, Stack, Input, Button, Container } from "@chakra-ui/react";
import React from "react";
import Subs1 from "../../Assets/Images/subs1.png";
import Subs2 from "../../Assets/Images/subs2.png";

export function Inboxemail() {
  return (
    <Container maxW="6xl" mt={20} mb={20}>
    <Flex>
      <Flex bgGradient="linear(to-b, #e4f0f7, blue.100)" borderRadius={30}>
        <Box>
          <Image src={Subs1} />
        </Box>
        <Box mt={50}>
          <Text fontWeight={800} pt={38} fontSize="4xl" color="#001219">
            Deliciousness to your inbox
          </Text>
          <Text w="500px" fontSize="md" color="#001219">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Text>
          <Stack spacing={3}>
            <Box mt={55} ml={10} mr={10} backgroundColor="white" borderRadius={15}>
          <Input p={8} my={1} w="300px" placeholder='Your Email Address'   backgroundColor="white" size='lg' />
          <Button colorScheme='teal' w={120} size='lg' bg="#1b1d1f" color="white"
              _hover={{ bg: 'red.500' }} borderRadius='10px'>Button</Button>
          </Box>
          </Stack>
        </Box>
        <Box>
          <Image mt={135} src={Subs2} />
        </Box>
      </Flex>
    </Flex>
    </Container>
  );
}