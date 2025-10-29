'use client'
import { useContext, createContext, useState, ReactNode } from "react";

type ChosenStatContextType = {
  aiStatTitle: string | null;
  setAiStatTitle: (value: string | null) => void;
};

const ChosenStatContext = createContext<ChosenStatContextType | null>(null);

export function ChosenStatProvider({ children }: { children: ReactNode }) {
  const [aiStatTitle, setAiStatTitle] = useState<string | null>(null);

  return (
    <ChosenStatContext.Provider value={{ aiStatTitle, setAiStatTitle }}>
      {children}
    </ChosenStatContext.Provider>
  );
}

export function useChosenStat() {
    const context=useContext(ChosenStatContext)
    if (!context) throw new Error('')
        return context
}