import { createContext, useEffect, useReducer } from "react";
import RiduciReducer from "./RiduciReducer";

const INITIAL_STATE = {
  riduci: false,
  error: false,
};


export const RiduciContext = createContext(INITIAL_STATE);

export const RiduciContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RiduciReducer, INITIAL_STATE);
  
  return (
    <RiduciContext.Provider
      value={{
        riduci: state.riduci,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </RiduciContext.Provider>
  );
};