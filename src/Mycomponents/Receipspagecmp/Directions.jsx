import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';

export default function Directions() {
  return (
    <Container mt={6} mb={6} maxW="6xl">
        <Box  position={'relative'} maxW="4xl">
            <Stack direction={{ base: 'column', lg: 'row' }}>
                <Text
                    fontFamily={'heading'}
                    fontWeight={700}
                    mb={3}
                    fontSize={'4xl'}
                    color={'#000000'}>
                    Directions
                </Text>
            </Stack>
            <Stack>
                <Heading
                    pt={3}
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Text  as="span"  color={'gray.500'}>
                        <i class="fa-regular fa-circle"></i>
                    </Text>
                    <Text  as="span" pl={8}>1. Leorem ispum dollor sit amet</Text>
                </Heading>
           </Stack>
           <Stack  borderBottom={2}
                   borderStyle={'solid'}
                   borderColor={useColorModeValue('gray.200', 'gray.900')}>
                <Stack pl={14} pt={3} pb={4}>
                        <Text   textAlign={'left'} align={'left'} color={'gray.500'} >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
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
                <Stack pl={14}>
                    <Box
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    overflow={'hidden'}
                    h="500px"
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
                <Stack pl={14} pt={4} pb={4} textAlign={'left'} align={'left'}>   
                <Text color={'gray.500'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum.
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
           </Stack>
           <Stack  borderBottom={2}
                   borderStyle={'solid'}
                   borderColor={useColorModeValue('gray.200', 'gray.900')}
                   pt={4} pb={4}>
                <Stack>
                    <Heading
                        pt={3}
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        <Text  as="span"  color={'gray.500'}>
                            <i class="fa-regular fa-circle"></i>
                        </Text>
                        <Text  as="span" pl={8}>2. Leorem ispum dollor sit amet</Text>
                    </Heading>
                </Stack>
                <Stack pl={14} pt={3} pb={4}>
                    <Text   textAlign={'left'} align={'left'} color={'gray.500'} >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
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
             </Stack>
             <Stack  borderBottom={2}
                     borderStyle={'solid'}
                     borderColor={useColorModeValue('gray.200', 'gray.900')}
                     pt={4} pb={4}>
                <Stack>
                    <Heading
                        pt={3}
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        <Text  as="span"  color={'gray.500'}>
                            <i class="fa-regular fa-circle"></i>
                        </Text>
                        <Text  as="span" pl={8}>3. Leorem ispum dollor sit amet</Text>
                    </Heading>
                </Stack>
                <Stack pl={14} pt={3} pb={4}>
                    <Text   textAlign={'left'} align={'left'} color={'gray.500'} >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
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
             </Stack>
        </Box>
    </Container>
  );
}
