import { ReactNode } from 'react';
import {
    Box,
    chakra,
    Container,
    Link,
    Image,
    Stack,
    Button,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';

  import Logo from '../Assets/Images/logo.png';
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Container maxW="6xl" pt={6} pb={6} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Box
            g={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
          <Container
              as={Stack}
              maxW={'6xl'}
              direction={{ base: 'column', md: 'row' }}
              justify={{ base: 'left'}}
              align={{ base: 'center', md: 'center' }}>
              <Image src={Logo} h="30px"/>
            </Container>
            <Container
              as={Stack}
              maxW={'6xl'}
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              pb={6}
              justify={{ base: 'center', md: 'space-between' }}
              align={{ base: 'center', md: 'center' }}>
              <Text px={1}> Lorem Ipsum is not simply random text.</Text>
              <Stack direction={'row'} spacing={4}>
                  <Link >
                    <Button variant="nav"> Recipes </Button>
                  </Link>
                  <Link >
                    <Button variant="nav"> Blogs </Button>
                  </Link>
                  <Link >
                    <Button variant="nav"> Contact </Button>
                  </Link>
                  <Link >
                    <Button variant="nav"> About us </Button>
                  </Link>
              </Stack>
            </Container>
        </Box>
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text></Text>
            <Text>© 2020 Flowbase, Powered By <Text as="span" color='tomato' fontWeight={600}> Webflow </Text></Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'FaFacebook'} href={'#'}>
                  <i class="fa-brands fa-facebook-f"></i>
              </SocialButton>
              <SocialButton label={'FaTwitter'} href={'#'}>
              <i class="fa-brands fa-twitter"></i>
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
              <i class="fa-brands fa-instagram"></i>
              </SocialButton>
            </Stack>
          </Container>
        </Box>
    </Container>
    );
  }