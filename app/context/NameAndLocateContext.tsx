"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  
} from "react";

type NameAndLocateContextType = {
  enteredName: string;
  setEnteredName: (value: string) => void;
  enteredLocation: string;
  setEnteredLocation: (value: string) => void;
};

// Once setEnteredName is a string and the value is entered, the value will be stored locally and then the Location box will take the place of the Name box.
// Once setEnteredLocation is a string and the value is entered, the value will be stored locally and then both values will be sent to the provided API.
// While both values are being sent, a Loading state maybe of dots jumping will take place where both boxes used to be.

const NameAndLocationContext = createContext<
  NameAndLocateContextType | undefined
>(undefined);

export function NameAndLocateProvider({ children }: { children: ReactNode }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");

 

  return (
    <NameAndLocationContext.Provider
      value={{
        enteredName,
        setEnteredName,
        enteredLocation,
        setEnteredLocation,
      }}
    >
      {children}
    </NameAndLocationContext.Provider>
  );
}

export function useNameAndLocate() {
  const context = useContext(NameAndLocationContext);
  if (!context)
    throw new Error(
      "useNameAndLocate must be used within a NameAndLocateProvider"
    );
  return context;
}
