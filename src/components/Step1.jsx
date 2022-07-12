import {
  Box,
  Heading,
  Text,
  VStack,
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
// import { makeCommit } from "../DummyMethodTest";

export default function Step1() {
  const { page, setPage } = useContext(LayoutContext);
  const [setInput] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [nameinValid, setNameinValid] = useState(false);
  const [emailinValid, setEmailinValid] = useState(false);
  const [numinValid, setNuminValid] = useState(false);

  const onNameChange = (val) => {
    if (val.length <= 3) {
      setNameinValid(true);
      setName(val);
    } else {
      setName(val);
      setNameinValid(false);
    }
  };
  const onEmailChange = (val) => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (val.match(validRegex)) {
      setEmailinValid(false);
      setEmail(val);
    } else {
      setEmail(val);
      setEmailinValid(true);
    }
  };
  const onNumberChange = (val) => {
    if (val.length <= 10) {
      setNuminValid(true);
      setPNumber(val);
    } else {
      setPNumber(val);
      setNuminValid(false);
    }
  };

  const NextStep = () => {
    if (nameinValid == true || emailinValid == true || numinValid == true) {
      alert("Kindly fill all fields correctly before submitting");
    } else if (name == "" || email == "" || pNumber == "") {
      alert("Kindly fill all fields correctly before submitting");
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Center w="100vw" alignSelf="center" bg="white">
      <VStack w="100%" p={10}>
        <Box w="100%" mb={10}>
          <Heading
            color="MarineBlue"
            fontWeight=""
            size="lg"
            // onClick={() => makeCommit(100)}
          >
            Personal info
          </Heading>
          <Text color="Coolgray" fontSize="sm">
            Please provide your name, email address, and phone number.
          </Text>
        </Box>
        <Box w="100%">
          <FormControl mb="20px" isInvalid={nameinValid}>
            <Flex justify="space-between" align="center">
              <FormLabel>Name</FormLabel>
              <FormErrorMessage mb="3">This field is required</FormErrorMessage>
            </Flex>
            <Input
              type="text"
              name="name"
              placeholder="e.g. Stephen King"
              onChange={(e) => onNameChange(e.target.value)}
            />
          </FormControl>
          <FormControl mb="20px" isInvalid={emailinValid}>
            <Flex justify="space-between" align="center">
              <FormLabel>Email Address</FormLabel>
              <FormErrorMessage mb="3">
                kindly follow the email format
              </FormErrorMessage>
            </Flex>
            <Input
              type="email"
              name="email"
              placeholder="e.g. stephenking@Loren.com"
              onChange={(e) => onEmailChange(e.target.value)}
            />
          </FormControl>
          <FormControl mb={20} isInvalid={numinValid}>
            <Flex justify="space-between" align="center">
              <FormLabel>Phone Number</FormLabel>
              <FormErrorMessage mb="3">
                kindly input a valid 11 digit number
              </FormErrorMessage>
            </Flex>
            <Input
              type="number"
              name="number"
              placeholder="e.g. 1234567890"
              onChange={(e) => onNumberChange(e.target.value)}
            />
          </FormControl>

          <Flex w={{ base: "100%", lg: "100%" }} justify="space-between">
            <Button
              bg="transparent"
              color="Coolgray"
              _hover={{ color: "MarineBlue" }}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
              visibility={page <= 1 ? "hidden" : "unset"}
            >
              Go Back
            </Button>
            <Button bg="#012a5a" color="#fff" onClick={NextStep}>
              Next Step
            </Button>
          </Flex>
        </Box>
      </VStack>
    </Center>
  );
}
