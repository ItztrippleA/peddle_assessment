import { Flex, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

export default function Footer() {
  const { page, setPage } = useContext(LayoutContext);

  return (
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
      <Button
        bg="#012a5a"
        color="#fff"
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Next Step
      </Button>
    </Flex>
  );
}
