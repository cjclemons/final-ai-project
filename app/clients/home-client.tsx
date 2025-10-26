// app/home-client.tsx
"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Base from "@/components/Base";

export default function HomeClient() {
  const [hideEnterCode, setHideEnterCode] = useState(false);

  return (
    <>
      <Header  />
      <Landing  />
      <Base />
    </>
  );
}
