"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type GlobalUIContextType = {
  hideEnterCode: boolean;
  setHideEnterCode: (value: boolean) => void;
};

const GlobalUIContext = createContext<GlobalUIContextType | undefined>(undefined);

export function GlobalUIProvider({ children }: { children: ReactNode }) {
  const [hideEnterCode, setHideEnterCode] = useState(false);

  return (
    <GlobalUIContext.Provider value={{ hideEnterCode, setHideEnterCode }}>
      {children}
    </GlobalUIContext.Provider>
  );
}

export function useGlobalUI() {
  const context = useContext(GlobalUIContext);
  if (!context) throw new Error("useGlobalUI must be used within a GlobalUIProvider");
  return context;
}
