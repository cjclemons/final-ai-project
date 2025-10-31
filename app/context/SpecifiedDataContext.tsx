"use client";
import { useContext, createContext, useState, ReactNode } from "react";

type SpecifiedItem= {label:string; confidence: number}

type SpecifiedDataContextType = {
  specifiedData: SpecifiedItem[] | null;
  setSpecifiedData: (value: SpecifiedItem[] | null) => void;
};


const SpecifiedDataContext = createContext<
  SpecifiedDataContextType | undefined
>(undefined);

export function SpecifiedDataProvider({ children }: { children: ReactNode }) {
  const [specifiedData, setSpecifiedData] = useState<SpecifiedItem[] | null>(null);

  return (
    <SpecifiedDataContext.Provider value={{ specifiedData, setSpecifiedData }}>
      {children}
    </SpecifiedDataContext.Provider>
  );
}

export function useSpecifiedData() {
  const context = useContext(SpecifiedDataContext);
  if (!context)
    throw new Error(
      "useSpecifiedData must be used within a SpecifiedDataProvider"
    );
  return context;
}
