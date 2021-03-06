import React, {useEffect} from "react";
import { Formik, Field } from "formik";

import {
  Container,
  Heading,
  Stack,
  Box,
  Alert,
  HStack,
  Textarea,
  FormControl,
  FormLabel,
  Select,
  Button,
  Image,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Inboxemail } from "./Homepagecmp/Banner2";
import Contactdelious from "./Contactcmp/Deliousrecip";

export default function Contactpage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
   
  return (
    <>
      <Container mt={6} mb={6} maxW="6xl">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 5, md: 10 }}
          py={{ base: 5, md: 7 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Contact Us
          </Heading>
        </Stack>
        <Stack align={"center"} direction={{ base: "column", md: "row" }}>
          <Stack flex={1}>
            <Flex bg="gray.100">
              <Box bg="white" p={6}>
                <Formik
                  const initialValues={{
                    name: "",
                    subject: "",
                    email: "",
                    enquiryType: "",
                    message: "",
                  }}
                  
                  validate={(values) => {
                    const errors = {};

                    if (values.name.trim() === "") {
                      errors.name = "** Name Feild is Required";
                    } else if (isNaN(values.name) === false) {
                      errors.name = "** Name Contain only characters";
                    }

                    if (!values.email) {
                      errors.email = "** Email Feild Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "** Invalid email address";
                    }

                    if (values.subject.trim() === "") {
                      errors.subject = "** subject Feild is Required";
                    } else if (isNaN(values.subject) === false) {
                      errors.subject = "**subject Contain only characters";
                    }

                    if (values.enquiryType === "") {
                      errors.enquiryType =
                        "** Please select Enquery type feild";
                    }

                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }, event) => {
                    setTimeout(() => {
                      //alert(JSON.stringify(values, null, 2));
                      const formdata = JSON.stringify(values, null, 2);
                      //alert(formdata);

                      fetch("https://foodielandnod.herokuapp.com/api/addContactDetails",
                        {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: 
                            formdata,
                        }).then(function(response) {
                          console.log(response);
                          if(response.status===200) {
                            //console.log("success");
                            alert("data submitted successfully");
                          }else{
                            alert("email allready exists");
                            resetForm(values) ;
                          }
                      });

                      //event.preventDefault();
                      setSubmitting(false);
                    }, 400);
                  }}

                  // onSubmit={(values) => {
                  //   alert(JSON.stringify(values, null, 2));
                  // }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <HStack align="flex-start">
                        <FormControl>
                          <FormLabel htmlFor="Name">Name</FormLabel>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name "
                            size="lg"
                            variant="filled"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <Text color={"red"} fontSize={"sm"}>
                            {errors.name && touched.name && errors.name}
                          </Text>
                        </FormControl>
                        <FormControl>
                          <FormLabel htmlFor="email">Email Address</FormLabel>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            size="lg"
                            variant="filled"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <Text color={"red"} fontSize={"sm"}>
                            {errors.email && touched.email && errors.email}
                          </Text>
                        </FormControl>
                      </HStack>
                      <HStack spacing={4} align="flex-start" mt={10}>
                        <FormControl>
                          <FormLabel htmlFor="subject">Subject</FormLabel>
                          <Field
                            as={Input}
                            id="subject"
                            name="subject"
                            type="text"
                            variant="filled"
                            size="lg"
                            placeholder="Enter your subject"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <Text color={"red"} fontSize={"sm"}>
                            {errors.subject &&
                              touched.subject &&
                              errors.subject}
                          </Text>
                        </FormControl>
                        <FormControl>
                          <FormLabel htmlFor="enquery">Enquery Type</FormLabel>
                          <Stack spacing={3}>
                            <Select
                              size="lg"
                              name="enquiryType"
                              value={values.enquiryType}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="">Select a job type</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                              <option value="option2">Option 4</option>
                              <option value="option3">Option 5</option>
                            </Select>
                          </Stack>
                          <Text color={"red"} fontSize={"sm"}>
                            {errors.enquiryType &&
                              touched.enquiryType &&
                              errors.enquiryType}
                          </Text>
                        </FormControl>
                      </HStack>
                      <HStack spacing={10} mt={10}>
                        <FormControl>
                          <FormLabel htmlFor="message">
                            Message(optional)
                          </FormLabel>
                          <Textarea
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            placeholder="message"
                          />
                        </FormControl>
                      </HStack>
                      <HStack pt={12}>
                        <Button
                          type="submit"
                          colorScheme="purple"
                          width="full"
                          disabled={isSubmitting}
                        >
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
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              rounded={"0xl"}
              boxShadow={"1xl"}
              width={"full"}
              overflow={"hidden"}
              bgGradient="linear(to-b, white.0, blue.100)"
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/cooker%2Fimage-220.png?alt=media&token=acdfc1a1-ed68-4828-a969-cf76a35273d6%22"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      {/* contact banner component  */}
      <Inboxemail />
      {/*recipe comp*/}
      <Contactdelious />
    </>
  );
}
