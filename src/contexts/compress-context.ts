import { createContext, useContext } from "react";

export const CompressContext = createContext<
  { compressed: boolean; toggleCompressed: () => void } | undefined
>(undefined);

export const useCompressed = () => {
  const context = useContext(CompressContext);

  if (!context) {
    throw new Error("useCompressed must be used within CompressProvider");
  }

  return context;
};