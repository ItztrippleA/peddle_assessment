import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Center,
  Grid,
  GridItem,
  Button,
  Flex,
  Stack,
  Avatar,
  Switch,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import React, { useState, useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
// import { Field, Form, Formik } from "formik";
// import { useNavigate } from "react-router-dom";
import { plans } from "../constants/constants";
import Footer from "./Footer";
export default function Step2() {
  // const navigate = useNavigate();
  const {
    step,
    setStep,
    planSelection,
    setPlanSelection,
    planRate,
    setPlanRate,
  } = useContext(LayoutContext);
  const [period, setPeriod] = useState(false);
  return (
    <Center w="100vw" alignSelf="center">
      <VStack w="100%" p={10} gap={5}>
        <Box w="100%" mb={5}>
          <Heading color="MarineBlue" fontWeight="bold" size="lg">
            Select your plan
          </Heading>
          <Text color="Coolgray" fontSize="sm">
            You have the option of monthly or yearly billing.
          </Text>
        </Box>
        <Box w="100%">
          <Grid
            templateColumns="repeat(3, 1fr)"
            maxW={{ base: "100%", lg: "100%" }}
            gap={3}
          >
            {plans &&
              plans.map((plan) => (
                <GridItem
                  as="button"
                  _hover={{ bg: "Alabaster", borderColor: "PurplishBlue" }}
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  onClick={() => {
                    setPlanSelection(plan);
                  }}
                  colSpan={{ base: 3, lg: 1, xl: 1 }}
                  bg={plan.id == planSelection.id ? "Alabaster" : "transparent"}
                  borderRadius={10}
                  borderWidth={plan.id == planSelection.id ? 2 : 1}
                  borderColor={
                    plan.id == planSelection.id ? "PurplishBlue" : "Coolgray"
                  }
                  key={plan.id}
                >
                  <Stack
                    w="100%"
                    direction={{ base: "horizontal", lg: "column" }}
                    p={4}
                    gap={7}
                    borderRadius={10}
                  >
                    <Avatar src={plan.img} size="sm" />
                    <Flex
                      w={{ base: "40%", lg: "100%" }}
                      direction={{ base: "column", lg: "column" }}
                      align="flex-start"
                      gap={2}
                    >
                      <Heading color="MarineBlue" fontWeight="bold" size="md">
                        {plan.title}
                      </Heading>
                      <Text color="Coolgray" fontSize="sm">
                        ${planRate ? plan.rateYr : plan.rateMn}/
                        {planRate ? "yr" : "mo"}
                      </Text>
                      {planRate && (
                        <Text color="Coolgray" fontSize="xs" fontWeight="bold">
                          {plan.discount}
                        </Text>
                      )}
                    </Flex>
                  </Stack>
                </GridItem>
              ))}
          </Grid>
        </Box>
        <Flex w="100%" justify="center" align="center" gap={5}>
          <Text
            fontWeight={planRate ? "normal" : "bold"}
            color={planRate ? "Coolgray" : "MarineBlue"}
            fontSize={planRate ? "md" : "md"}
          >
            Monthly
          </Text>
          <Switch
            size="md"
            onChange={(e) => {
              // console.log(e.target.checked);

              setPlanRate(e.target.checked);
            }}
          />
          <Text
            fontWeight={planRate ? "bold" : "bold"}
            color={planRate ? "MarineBlue" : "Coolgray"}
            fontSize={planRate ? "md" : "md"}
          >
            Yearly
          </Text>
        </Flex>
        <Footer />
      </VStack>
    </Center>
  );
}
