import React, { createContext, useState } from "react";
import { steps, addOns } from "../constants/constants";
// import { useNavigate } from "react-router-dom";

export const LayoutContext = createContext();
function LayoutProvider({ children }) {
  const [step, setStep] = useState(steps);
  const [planSelection, setPlanSelection] = useState({});
  const [addonSelection, setAddonSelection] = useState([]);
  const [page, setPage] = useState(1);
  const [planRate, setPlanRate] = useState(false);

  const addonList = (addon) => {
    setAddonSelection([...addonSelection, addon]);
    // console.log(addon);
    // const uniqueArray = Object.values(
    //   addonSelection.reduce((acc, cur) => {
    //     acc[cur.title] = cur;
    //     return [...acc];
    //   }, {})
    // );
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
