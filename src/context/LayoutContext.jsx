import React, { createContext, useState } from "react";
import { steps } from "../constants/constants";

export const LayoutContext = createContext();
function LayoutProvider({ children }) {
  const [step, setStep] = useState(steps);
  const [planSelection, setPlanSelection] = useState({});
  const [addonSelection, setAddonSelection] = useState([]);
  const [page, setPage] = useState(1);
  const [planRate, setPlanRate] = useState(false);

  const addonList = (addon) => {
    setAddonSelection([...addonSelection, addon]);
  };
  return (
    <LayoutContext.Provider
      value={{
        step,
        setStep,
        planSelection,
        setPlanSelection,
        page,
        setPage,
        planRate,
        setPlanRate,
        addonList,
        addonSelection,
        setAddonSelection,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
