"use client";
import { useContext, createContext, useState, ReactNode } from "react";

export type StatTitle= 'RACE' | 'AGE'| 'GENDER'

type ChosenStatContextType = {
  aiStatTitle: StatTitle;
  setAiStatTitle: (value: StatTitle) => void;
};

const ChosenStatContext = createContext<ChosenStatContextType | null>(null);

export function ChosenStatProvider({ children }: { children: ReactNode }) {
  const [aiStatTitle, setAiStatTitle] = useState<StatTitle>('RACE');

  return (
    <ChosenStatContext.Provider value={{ aiStatTitle, setAiStatTitle }}>
      {children}
    </ChosenStatContext.Provider>
  );
}

export function useChosenStat() {
  const context = useContext(ChosenStatContext);
  if (!context) throw new Error("");
  return context;
}
