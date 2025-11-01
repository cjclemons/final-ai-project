"use client";
// context are used to share state between components without prop drilling.
// Here the context is used to share the hideEnterCode state between Header and Landing components.

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type GlobalUIContextType = {
  hideEnterCode: boolean;
  setHideEnterCode: (value: boolean) => void;
};

const GlobalUIContext = createContext<GlobalUIContextType | undefined>(
  undefined
);

export function GlobalUIProvider({ children }: { children: ReactNode }) {
  const [hideEnterCode, setHideEnterCode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("hideEnterCode");
    if (stored !== null) {
      setHideEnterCode(stored === "true");
    }
  }, []);

  // ✅ Save changes to localStorage
  useEffect(() => {
    localStorage.setItem("hideEnterCode", hideEnterCode.toString());
  }, [hideEnterCode]);

  return (
    <GlobalUIContext.Provider value={{ hideEnterCode, setHideEnterCode }}>
      {children}
    </GlobalUIContext.Provider>
  );
}

export function useGlobalUI() {
  const context = useContext(GlobalUIContext);
  if (!context)
    throw new Error("useGlobalUI must be used within a GlobalUIProvider");
  return context;
}
