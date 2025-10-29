"use client"
import { createContext, useState, useContext, ReactNode } from "react"

interface ThankYouContextType {
    thankYouShown: boolean
    setThankYouShown: (value:boolean) => void;
}

const ThankYouContext = createContext<ThankYouContextType | undefined>(undefined)

export function ThankYouProvider({children}: {children:ReactNode}) {
    const [thankYouShown,setThankYouShown]=useState(false)


    return (
        <ThankYouContext.Provider value={{thankYouShown,setThankYouShown}}>

            {children}
        </ThankYouContext.Provider>
    )



}
export function useThankYou() {
  const context = useContext(ThankYouContext);
  if (!context) {
    throw new Error("useThankYou must be used within a ThankYouProvider");
  }
  return context;
}