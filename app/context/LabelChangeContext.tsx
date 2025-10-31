"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { StatTitle } from "./ChosenStatContext";

type LabelChangeType = {
  [key in StatTitle]?:string
};

type LabelChangeContextType = {
  labelChange: LabelChangeType;
  setLabelChange: React.Dispatch<React.SetStateAction<LabelChangeType>>
};

const LabelChangeContext = createContext<LabelChangeContextType | null>(null);

export function LabelChangeProvider({ children }: { children: ReactNode }) {
  const [labelChange, setLabelChange] = useState<LabelChangeType>({});
  return (
    <LabelChangeContext.Provider value={{ labelChange, setLabelChange }}>
      {children}
    </LabelChangeContext.Provider>
  );
}

export function useLabelChange() {
  const context = useContext(LabelChangeContext);
  if (!context)
    throw new Error("useLabelChange must be used within a LabelChangeProvider");
  return context;
}
