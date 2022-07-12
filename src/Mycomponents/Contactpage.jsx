import React from 'react';
import { Formik, Field } from "formik";
import {
  Container,
  Heading,
  Stack,
  Box,
  Text,
  HStack,
  Textarea,
  Spacer,
  FormControl,
  Select,
  FormLabel,
  FormErrorMessage,
  VStack,
  Image,
  Checkbox,
  Flex,
  Avatar,
  useColorModeValue,
  Center,
  InputRightElement,Button, InputGroup,Input, MenuItemOption
} from '@chakra-ui/react';
import { Inboxemail } from './Homepagecmp/Banner2';
import Contactdelious from './Contactcmp/Deliousrecip';

export default function Contactpage() {
  return (
    <>
    <Container mt={6} mb={6} maxW="6xl">
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 5, md: 10 }}
                py={{ base: 5, md: 7}}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}>
                 Contact Us
                </Heading>
            </Stack>
            <Stack
            align={'center'}
            direction={{ base: 'column', md: 'row' }}
            >
              <Stack flex={1}>
                <Flex bg="gray.100" >
                  <Box bg="white" p={6} >
                    <Formik
                      initialValues={{
                        name :"",
                        email: "",
                        subject:"",
                        enquery_type:'',
                        messages:'',
                      }}
                      onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                      }}
                    >
                      {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                          <HStack  align="flex-start">
                            <FormControl>
                              <FormLabel htmlFor="Name">Name</FormLabel>
                               <Input 
                                id="name"
                                name="name"
                                type="text" 
                                placeholder='Enter your name ' 
                                size='lg'
                                variant="filled"
                                _hover={{
                                  borderRadius: 'gray.300',
                                }}
                                />
                            </FormControl>
                            <FormControl>
                              <FormLabel htmlFor="email">Email Address</FormLabel>
                              <Input
                                id="email"
                                name="email"
                                type="email" 
                                placeholder='Enter your email'
                                size='lg'
                                variant="filled"
                              />
                              <FormErrorMessage>{errors.password}</FormErrorMessage>
                            </FormControl>
                          </HStack>
                          <HStack spacing={4} align="flex-start"  mt={10}>
                            <FormControl>
                                <FormLabel htmlFor="subject">Subject</FormLabel>
                                <Field
                                  as={Input}
                                  id="subject"
                                  name="subject"
                                  type="text"
                                  variant="filled"
                                  size='lg'
                                  placeholder='Enter your subject'
                                />
                              </FormControl>
                              <FormControl>
                                <FormLabel htmlFor="enquery">Enquery Type</FormLabel>
                                  <Stack spacing={3}>
                                    <Select  placeholder='enquery type' size='lg'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                    </Select>
                                  </Stack>
                              </FormControl>
                          </HStack>
                          <HStack spacing={10} mt={10}>
                            <FormControl>
                              <FormLabel htmlFor="message">Message</FormLabel>
                              <Textarea  
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: 'gray.300',
                              }}
                              placeholder="message"
                            />
                            </FormControl>
                          </HStack>
                          <HStack pt={12}>
                            <Button type="submit" colorScheme="purple" width="full">
                            Submit
                            </Button>
                          </HStack>
                        </form>
                      )}
                    </Formik>
                  </Box>
                </Flex>
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
    {/* contact banner component  */}
    <Inboxemail/>
    {/*recipe comp*/}
    <Contactdelious/>
    </>
  );
}