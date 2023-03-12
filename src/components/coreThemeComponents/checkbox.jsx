import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: "Ubuntu", // change the font family of the label
    // backgroundColor: "MarineBlue",
  },
  control: {
    padding: 2, // change the padding of the control
    borderRadius: 5, // change the border radius of the control
  },
  icon: { color: "white", fontSize: "lg" },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
