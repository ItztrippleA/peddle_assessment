export const steps = [
  { id: "1", name: "Your info" },
  { id: "2", name: "Select plan" },
  { id: "3", name: "Add-ons" },
  { id: "4", name: "Summary" },
];
export const plans = [
  {
    id: "1",
    title: "Arcade",
    rateYr: 90,
    rateMn: 9,
    discount: "2 months free",
    img: "/src/assets/images/icon-arcade.png",
  },
  {
    id: "2",
    title: "Advanced",
    rateYr: 120,
    rateMn: 12,
    discount: "2 months free",
    img: "/src/assets/images/icon-advanced.png",
  },
  {
    id: "3",
    title: "Pro",

    rateYr: 150,
    rateMn: 15,
    discount: "2 months free",
    img: "/src/assets/images/icon-pro.png",
  },
];
export const addOns = [
  {
    id: "1",
    title: "Online service",
    rate: 10,
    description: "Access to multiplayer games",
    rateYr: 10,
    rateMn: 1,
    checked: false,
  },
  {
    id: "2",
    title: "Larger storage",
    rate: 20,
    description: "Extra 1TB of cloud save",
    rateYr: 20,
    rateMn: 2,
    checked: false,
  },
  {
    id: "3",
    title: "Customizable profile",
    rate: 20,
    description: "Custom theme on your profile",
    rateYr: 20,
    rateMn: 2,
    checked: false,
  },
];

export const colors = {
  //primary
  MarineBlue: "hsl(213, 97%, 18%)",
  PurplishBlue: "hsl(243, 100%, 62%)",
  PastelBlue: "hsl(228, 100%, 84%)",
  LightBlue: "hsl(206, 94%, 87%)",
  StrawberryRed: "hsl(354, 84%, 57%)",
  //neutral
  Coolgray: "hsl(231, 11%, 63%)",
  Lightgray: "hsl(229, 24%, 87%)",
  Magnolia: "hsl(217, 100%, 97%)",
  Alabaster: "hsl(231, 100%, 99%)",
  White: "hsl(0, 0%, 100%)",
};
export const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "64px",
};

export const fonts = {
  heading: "Ubuntu",
  body: "Ubuntu",
};
export const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
};
