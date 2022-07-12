import React from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Image,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Container,
    chakra,
    VisuallyHidden
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom";
  import Logo from '../Assets/Images/logo.png';

    
  const NAV_ITEMS = [
    {
      label: 'Home',
      to:''
    },
    {
      label: 'Recipes',
      to:'recipes'
    },
    {
      label: 'Blogs',
      to:'blogs'
    },
    {
      label: 'Contact',
      to:'contact'
    },
    {
      label: 'About us',
      to:'aboutus'
    },
    {
      label: 'Blog Post',
      to:'blogpost'
    },
  ];

  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    to:String;
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
  
  export default function Header() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Container pt={4} pb={5} maxW="6xl">
          <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'80px'}
                py={{ base: 6 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                flex={{ base: 1, md: 'auto' }}
                ml={{ base: -2 }}
                display={{ base: 'flex', md: 'none' }}>
                <IconButton
                    onClick={onToggle}
                    icon={
                    isOpen ? <i className="fa-solid fa-xmark" w={3} h={3}></i>: <i w={5} h={5} className="fa-solid fa-bars"></i>
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                  <Image  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                      fontFamily={'heading'}
                      color={useColorModeValue('gray.800', 'white')} src={Logo} h="30px"
                      />
                  <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                      <DesktopNav />
                  </Flex>
                </Flex>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'FaFacebook'} href={'#'}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </SocialButton>
                  <SocialButton label={'FaTwitter'} href={'#'}>
                  <i className="fa-brands fa-twitter"></i>
                  </SocialButton>
                  <SocialButton label={'Instagram'} href={'#'}>
                  <i className="fa-brands fa-instagram"></i>
                  </SocialButton>
                </Stack>
            </Flex>
          </Box>
        </Container>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link 
                  as={RouterLink}
                  p={2}
                  to={"/"+navItem.to}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
         {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link 
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

