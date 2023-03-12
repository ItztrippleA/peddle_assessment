import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Divider,
  Avatar,
  Flex,
  Button,
} from "@chakra-ui/react";

import React, { useState, useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import Confirmation from "./Confirmation";

// import { useNavigate } from "react-router-dom";

export default function Step4() {
  // const navigate = useNavigate();
  const {
    step,
    addonSelection,
    setAddonSelection,
    setStep,
    planSelection,
    setPlanSelection,
    setPage,
    page,
    planRate,
  } = useContext(LayoutContext);
  const [period, setPeriod] = useState(false);
  const [confirm, setConfirm] = useState(false);
  console.log("test", addonSelection);
  return (
    <>
      {!confirm ? (
        <VStack w="100%" p={{ base: 6, lg: 10 }} gap={5}>
          <Box w="100%" mb={5}>
            <Heading color="MarineBlue" fontWeight="bold" size="lg">
              Finishing up
            </Heading>
            <Text color="Coolgray" fontSize="sm">
              Double-check everything looks OK before confirming.
            </Text>
          </Box>
          <VStack p={3} gap={1.5} w="100%" bg="Alabaster">
            <HStack w="100%" justify="space-between">
              <Box>
                <Heading color="MarineBlue" fontWeight="bold" size="sm">
                  {planSelection.title}
                </Heading>
                <Text color="Coolgray" fontSize="sm" onClick={() => setPage(2)}>
                  Change
                </Text>
              </Box>
              <Box>
                <Heading color="MarineBlue" fontWeight="bold" size="sm">
                  ${planRate ? planSelection.rateYr : planSelection.rateMn}/
                  {planRate ? "yr" : "mo"}
                </Heading>
              </Box>
            </HStack>
            <Divider borderColor="Lightgray" />
            {addonSelection.map((item, i) => (
              <HStack w="100%" justify="space-between" key={i}>
                <Text color="Coolgray" fontSize="sm">
                  {item.title}
                </Text>
                <Text color="Coolgray" fontSize="sm">
                  +${planRate ? item.rateYr : item.rateMn}/
                  {planRate ? "yr" : "mo"}
                </Text>
              </HStack>
            ))}
          </VStack>
          <HStack w="100%" justify="space-between" align="center">
            <Text color="Coolgray" fontSize="sm" mt="20px">
              Total (per month)
            </Text>
            <Heading color="PurplishBlue" fontWeight="bold" size="sm">
              +${planRate ? addonSelection.rateYr : addonSelection.rateMn}/
              {planRate ? "yr" : "mo"}
            </Heading>
          </HStack>
          <Flex w={{ base: "100%", lg: "100%" }} justify="space-between">
            <Button
              bg="transparent"
              color="Coolgray"
              _hover={{ color: "MarineBlue" }}
              visibility={"hidden"}
            ></Button>
            <Button
              bg="#012a5a"
              color="#fff"
              onClick={() => {
                setConfirm(true);
              }}
            >
              Confirm
            </Button>
          </Flex>
        </VStack>
      ) : (
        <Confirmation />
      )}
    </>
  );
}
