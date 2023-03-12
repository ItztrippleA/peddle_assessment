import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Divider,
  Avatar,
  Center,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
export default function Confirmation() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      maxW={{ base: "100%", lg: "100%" }}
      gap={3}
      p={10}
      h="550px"
    >
      <GridItem colSpan={{ base: 3, lg: 3, xl: 3 }} h="100%" justify="stretch">
        <VStack p={3} gap={1.5} w="100%" h="100%" justify="center">
          <Avatar src="/src/assets/images/icon-thank-you.png" size="lg" />
          <Heading color="PurplishBlue" fontWeight="bold" size="lg">
            Thank You
          </Heading>

          <Text color="Coolgray" fontSize="sm" align="center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  );
}
