import React, { createContext } from "react";
import { all_product } from "../components/assets/all_product";

export const shopcontext = createContext(null);

const ShopContextProvider = (props) => {
  const ContextValue = { all_product };
  return (
    <shopcontext.Provider value={ContextValue}>
      {props.children}
    </shopcontext.Provider>
  );
};

export default ShopContextProvider;
