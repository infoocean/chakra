// import React, { Component } from "react";
// import axios from "axios";
// import { Box, Heading, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
// import Card from "../common/Card";

// class AllReceipes extends Component {
//   state = {
//     popularReceipes: [],
//   };

//   async componentDidMount() {
//     const URL = "http://95.111.202.157:8001/api/v1/getAllRecipes";
//     const res = await axios.get(URL);
//     const popularReceipes = res.data;
//     this.setState({ popularReceipes });
//   }
//   render() {
//     return (
//       <Box maxW={1080} mx={"auto"} mt={20} >
//         <Flex>
//           <Heading w={540}>Try this delicious receipe<br/> to make your day</Heading>
//           <Text w={540}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </Text>
//         </Flex>
//         <SimpleGrid columns={4} spacing={5}>
//           {this.state.popularReceipes.map((item, index) => (
//             <Card key={index} img={"http://95.111.202.157:8001/" + item.recipeId.image}
//             heading={item.recipeId.title} 
//             time={item.recipeId.cookTime}
//             category={item.recipeId.categoryId.categoryName}/>

//           ))}
//         </SimpleGrid>
//       </Box>
//     );
//   }
// }

// export default AllReceipes;

// import React from "react";
// import { Box, Image, Heading, HStack, Button } from "@chakra-ui/react";
// import { BsFillAlarmFill } from "react-icons/bs";
// import { ImSpoonKnife } from "react-icons/im";

// function Card({ img, heading, time, category }) {
//   return (
//     <Box p={3} bg="#EBF8FF" borderRadius={20} as="article" mt={15}>
//       <Image objectFit="fill" h={300} w="100%" src={img} alt="stock image" />
//       <Heading size="md" fontWeight="bold">
//         {heading}
//       </Heading>
//       <HStack justifyItems={"space-between"}>
//         <Button borderRadius="10px" bgColor="#EDFDFD">
//           <BsFillAlarmFill />
//           {time}
//         </Button>
//         <Button borderRadius="10px" bgColor="#EDFDFD">
//           <ImSpoonKnife />
//           {category}
//         </Button>
//       </HStack>
//     </Box>
//   );
// }

// export default Card;



import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}