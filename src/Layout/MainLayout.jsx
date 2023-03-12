import React from "react";
import { Center, GridItem, Grid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import LayoutState from "./LayoutState";

function MainLayout() {
  return (
    <Grid
      templateColumns="1fr"
      bg="hsl(217deg 100% 97%)"
      h="100vh"
      alignContent="center"
      justifyItems="center"
    >
      <GridItem
        // minChildWidth="500px"
        position="relative"
        bg="white"
        h={{ base: "100vh", lg: "100%" }}
        w={{ base: "100vw", lg: "860px" }}
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          spacing={10}
          padding={{ base: 1, lg: 2, xl: 3 }}
          gap={4}
          bg="ffffff"
          borderRadius={10}
          position="relative"
        >
          <GridItem
            borderRadius={10}
            as="aside"
            colSpan={{ base: 3, lg: 1, xl: 1 }}
            h={{ base: "10.75rem", lg: "35.5rem" }}
            backgroundImage={{
              base: "url('/src/assets/images/bg-sidebar-mobile.png')",
              lg: "url('/src/assets/images/bg-sidebar-desktop.png')",
            }}
            bgSize="cover"
            p={10}
          >
            <Center>
              <Navbar />
            </Center>
          </GridItem>
          <GridItem
            colSpan={{ base: 3, lg: 2, xl: 2 }}
            as="main"
            justifySelf="center"
            w={{ base: "90vw", lg: "100%" }}
            position={{ base: "absolute", lg: "unset" }}
            top="130px"
            bg="white"
            borderRadius="10px"
          >
            <Center w={{ base: "90vw", lg: "unset" }}>
              <LayoutState />
            </Center>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default MainLayout;
