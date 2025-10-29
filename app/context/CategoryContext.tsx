"use client";
import { createContext, useState, ReactNode, useContext } from "react";

interface CategoryContextType {
  chosenCategory: boolean;
  setChosenCategory: (value: boolean) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [chosenCategory, setChosenCategory] = useState(false);

  return (
    <CategoryContext.Provider value={{ chosenCategory, setChosenCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
