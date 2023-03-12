import React, { useState, useContext } from "react";
import Step1 from "../components/Step1";
import { LayoutContext } from "../context/LayoutContext";
import Step2 from "../components/Step2";

import Step4 from "../components/Step4";
import Step3 from "../components/Step3";

const LayoutState = () => {
  const { page } = useContext(LayoutContext);

  return (
    <>
      {page && page == 1 ? (
        <Step1 />
      ) : page == 2 ? (
        <Step2 />
      ) : page == 3 ? (
        <Step3 />
      ) : (
        <Step4 />
      )}
    </>
  );
};

export default LayoutState;
