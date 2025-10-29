"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type PictureDataContextType = {
  pictureData: Object | null;
  setPictureData: (value: Object | null) => void;
};

const PictureDataContext = createContext<PictureDataContextType | undefined>(
  undefined
);

export function PictureDataProvider({ children }: { children: ReactNode }) {
  const [pictureData, setPictureData] = useState<Object | null>(null);

  // 🔹 Load from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("pictureData");
    if (storedData) {
      try {
        setPictureData(JSON.parse(storedData));
      } catch (error) {
        console.error("❌ Failed to parse stored pictureData:", error);
      }
    }
  }, []);

  // 🔹 Save to localStorage whenever pictureData changes
  useEffect(() => {
    if (pictureData !== null) {
      localStorage.setItem("pictureData", JSON.stringify(pictureData));
    } else {
      localStorage.removeItem("pictureData");
    }
  }, [pictureData]);

  return (
    <PictureDataContext.Provider value={{ pictureData, setPictureData }}>
      {children}
    </PictureDataContext.Provider>
  );
}

export function usePictureData() {
  const context = useContext(PictureDataContext);
  if (!context)
    throw new Error("usePictureData must be used within a PictureDataProvider");
  return context;
}
