import React, { useEffect } from 'react';
import {
Container,
Heading,
Stack,
Box,
Text,
Image,
Flex,
Avatar,
useColorModeValue,
} from '@chakra-ui/react';
import posterimg from '../../Assets/Images/poster1.jpeg'
import Contactdelioustdelious from '../Contactcmp/Deliousrecip';
import { Inboxemail } from '../Homepagecmp/Banner2';

export default function Blogpostpagedetails() {

    useEffect(() => {
       window.scrollTo(0, 0);
      },[]);

    return (
        <>
          <Container mt={6} mb={6} maxW="6xl">
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 5, md: 10 }}
                py={{ base: 10, md: 10}}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
                  lineHeight={'110%'}>
                  Full Guide to Becoming a Professional Chef
                </Heading>
            </Stack>
            <Stack>
                <Flex justifyContent='center'>
                <Stack direction={'row'} spacing={4} align={'center'} 
                    borderRight={2}
                    borderStyle={'solid'}
                    pr={5}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}>
                    <Avatar
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>John Smith</Text>
                    </Stack>
                </Stack>  
                <Stack direction={'row'} spacing={4} align={'center'} 
                    pr={5}
                    ml={5}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}> 15 March 2022</Text>
                    </Stack>
                </Stack>          
                </Flex>
            </Stack>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 5, md: 10 }}
                py={{ base: 10, md: 10}}>
                <Text color={'gray.500'} maxW={'3xl'}>
                  Never miss a meeting. Never be late for one too. Keep track of your
                  meetings and receive smart reminders in appropriate times. Read your
                  smart “Daily Agenda” every morning.
                </Text>
            </Stack>
            <Stack>
                <Box
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    overflow={'hidden'}
                    h="500px"
                    rounded="lg"
                    position="relative"
                    role={'group'}
                    boxShadow={'1xl'}
                    pos={'relative'}
                    zIndex={1}
                >
                    <Box
                        bg={'gray.100'}
                        pos={'relative'}
                        rounded={'lg'}
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
                        }}
                    >
                    <Image
                        src={
                        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        layout={'fill'}
                        objectFit={'cover'} 
                        w='full'
                        h="500px"
                    />
                    </Box>
                </Box>
            </Stack>

            <Stack w="full"
                py={{ base: 10, md: 10 }}
                direction={{ base: 'column', md: 'row' }}>  
                <Box
                width={800}
                overflow={'hidden'}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Stack pt={12}>
                            <Box pl='3'>
                                <Heading
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
                                >
                                    Chicken meatballs with creame cheese?
                                </Heading>
                                <Stack pt={4} pb={4}>
                                    <Text   textAlign={'left'} align={'left'} color={'gray.500'} >
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    </Text>
                                </Stack>
                            </Box>
                            <Box pl='3' pt={4}>
                                <Heading
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
                                >
                                    Chicken meatballs with creame cheese?
                                </Heading>
                                <Stack pt={4} pb={4}>
                                    <Text   textAlign={'left'} align={'left'} color={'gray.500'} >
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    </Text>
                                </Stack>
                            </Box>
                            <Box pl='3' pt={4}>
                                <Heading
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
                                >
                                    Chicken meatballs with creame cheese?
                                </Heading>
                                <Stack pt={8} pb={4}>
                                    <Box
                                    w={'full'}
                                    bg={useColorModeValue('white', 'gray.900')}
                                    overflow={'hidden'}
                                    rounded="lg"
                                    position="relative"
                                    role={'group'}
                                    h="350px"
                                    boxShadow={'1xl'}
                                    pos={'relative'}
                                    zIndex={1}
                                    >
                                        <Box
                                            bg={'gray.100'}
                                            pos={'relative'}
                                            rounded={'lg'}
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
                                            }}
                                        >
                                        <Image
                                            src={
                                            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                            }
                                            layout={'fill'}
                                            objectFit={'cover'} 
                                            w='full'
                                            h="350px"
                                        />
                                        </Box>
                                    </Box>
                                </Stack>
                                <Stack pt={4} pb={4}>
                                    <Text   textAlign={'left'} align={'left'} color={'gray.500'} >
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    </Text>
                                </Stack>
                            </Box>
                            <Box pl='3' pt={4}>
                                <Heading
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
                                >
                                    Chicken meatballs with creame cheese?
                                </Heading>
                                <Stack pt={4} pb={4}>
                                    <Text   textAlign={'left'} align={'left'} color={'gray.500'} >
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    </Text>
                                </Stack>
                            </Box>
                            <Box 
                             bgGradient='linear(to-r, #cfd1d1, #f2f7f7)'  >
                                <Stack 
                                    borderBottom={2}
                                    borderTop={2}
                                    borderStyle={'solid'}
                                    borderColor={useColorModeValue('gray.400', 'gray.900')}
                                    >
                                    <Text p={10} fontSize={{ base: '1xl', sm: '2xl', lg: '4xl' }} textAlign={'left'} align={'left'} color={'gray.500'} >
                                    <i>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua."</i>
                                    </Text>
                                </Stack>
                            </Box>
                            <Box pl='3' pt={4}>
                                <Heading
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
                                >
                                    Chicken meatballs with creame cheese?
                                </Heading>
                                <Stack pt={4} pb={4}>
                                    <Text   textAlign={'left'} align={'left'} color={'gray.500'} >
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum.
                                    </Text>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
                <Flex
                    flex={1}
                    w={'full'}
                    pl={{ base: '0', sm: '0', lg: '40px' }}>
                    <Box
                        width={'full'}
                        overflow={'hidden'}
                    >
                        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                            <Stack pt={10} textAlign={'center'}
                                align={'center'}>
                                <Heading
                                    fontWeight={600}
                                    fontSize={{ base: '1xl', sm: '1xl', lg: '2xl' }}>
                                    SHARE THIS ON:
                                </Heading>
                                <Stack direction={'column'} spacing={6} pt={4}>
                                <Text label={'FaFacebook'} href={'#'}>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </Text>
                                
                                <Text label={'FaTwitter'} href={'#'}>
                                <i className="fa-brands fa-twitter"></i>
                                </Text>
                               
                                <Text label={'Instagram'} href={'#'}>
                                <i className="fa-brands fa-instagram"></i>
                                </Text>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Flex>
            </Stack>
          </Container>
          {/* contact banner component  */}
          <Inboxemail/>
           {/*  recipe list  cmp */}
           <Contactdelioustdelious/>
        </>
  ) ;
}