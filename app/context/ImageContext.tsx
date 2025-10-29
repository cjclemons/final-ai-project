"use client"
import { createContext, useState, useContext, ReactNode } from "react";

type ImageContextType = {
  preview: string | null;
  setPreview: (img: string | null) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <ImageContext.Provider value={{ preview, setPreview }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  const context = useContext(ImageContext);
  if (!context)
    throw new Error("useImage must be used within an ImageProvider");
  return context;
}
