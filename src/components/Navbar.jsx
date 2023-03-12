import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import { Box, VStack, Stack, Text, Flex, Heading } from "@chakra-ui/react";
export default function Navbar() {
  const { step, page } = useContext(LayoutContext);
  return (
    <Stack
      direction={{ base: "row", lg: "column" }}
      gap={{ base: "auto", lg: "1.5rem" }}
      width={{ base: "100vw", lg: "100%" }}
      justify="center"
    >
      {step &&
        step.map((item) => (
          <Box h="2.1rem" key={item.id} justify="center">
            <Flex gap={4} align="center" justify="center">
              <Flex
                w="40px"
                borderRadius={40}
                h="40px"
                bg={item.id == page ? "LightBlue" : "transparent"}
                align="center"
                justify="center"
                borderWidth={1}
                borderColor="LightBlue"
              >
                <Text fontWeight="bold" color="white">
                  {item.id}
                </Text>
              </Flex>
              <VStack align="flex-start" display={{ base: "none", lg: "flex" }}>
                <Box h="10px" align="center" justifyContent="center">
                  <Text fontSize="xs" color="#ffffff">
                    Step {item.id}
                  </Text>
                </Box>
                <Box h="10px" w={120}>
                  <Heading fontSize="sm" fontWeight="bold" color="#ffffff">
                    {item.name}
                  </Heading>
                </Box>
              </VStack>
            </Flex>
          </Box>
        ))}
    </Stack>
  );
}
