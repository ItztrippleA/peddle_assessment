import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

import React, { useState, useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

import { plans, addOns } from "../constants/constants";
import Footer from "./Footer";
export default function Step3() {
  // const navigate = useNavigate();
  const { addonList, addonSelection, setAddonSelection, planRate } =
    useContext(LayoutContext);

  return (
    <VStack w="100%" p={{ base: 6, lg: 10 }} gap={5}>
      <Box w="100%" mb={5}>
        <Heading color="MarineBlue" fontWeight="bold" size="lg">
          Pick add-ons
        </Heading>
        <Text color="Coolgray" fontSize="sm">
          Add-ons help enhance your gaming experience.
        </Text>
      </Box>
      <Box w="100%">
        <VStack
          w="100vw"
          maxW={{ base: "100%", lg: "100%" }}
          gap={3}
          align="flex-start"
        >
          {addOns &&
            addOns.map((plan) => (
              <Box
                as="button"
                _hover={{
                  bg: "Alabaster",
                  borderColor: "PurplishBlue",
                  borderWidth: 2,
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                _active={{
                  bg: "#dddfe2",
                  transform: "scale(0.98)",
                  borderColor: "#bec3c9",
                }}
                colSpan={{ base: 3, lg: 3, xl: 3 }}
                bg={plan.id == addonSelection ? "Alabaster" : "transparent"}
                borderRadius={10}
                borderWidth={plan.id == addonSelection ? 1 : 1}
                borderColor={
                  plan.id == addonSelection ? "PurplishBlue" : "Coolgray"
                }
                w="100%"
                onClick={() => setAddonSelection([...addonSelection, plan])}
                key={plan.id}
              >
                <Checkbox size="sm" w="100%" p={4} position="relative">
                  <HStack>
                    <Box alignSelf="flex-start">
                      <Heading
                        align="left"
                        color="MarineBlue"
                        fontWeight="bold"
                        size="sm"
                      >
                        {plan.title}
                      </Heading>
                      <Text color="Coolgray" fontSize="sm">
                        {plan.description}
                      </Text>
                    </Box>
                  </HStack>
                  <Box position="absolute" right="20px" bottom="30">
                    <Text color="PurplishBlue" fontWeight="bold">
                      ${planRate ? plan.rateYr : plan.rateMn}/
                      {planRate ? "yr" : "mo"}
                    </Text>
                  </Box>
                </Checkbox>
              </Box>
            ))}
        </VStack>
      </Box>

      <Footer />
    </VStack>
  );
}
