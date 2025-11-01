"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type ImageContextType = {
  preview: string | null;
  setPreview: (img: string | null) => void;
  clickedCamera: boolean;
  setClickedCamera: (value: boolean) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [clickedCamera, setClickedCamera] = useState(false);
  return (
    <ImageContext.Provider
      value={{ preview, setPreview, clickedCamera, setClickedCamera }}
    >
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
