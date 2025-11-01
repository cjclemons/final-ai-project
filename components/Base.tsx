"use client";
import Link from "next/link";
import BackArrow from "next/image";
import BaseLeft from "./sub-components/BaseLeft";
import BaseRight from "./sub-components/BaseRight";
import { useNameAndLocate } from "@/app/context/NameAndLocateContext";
import { useEffect, useState } from "react";

export default function Base() {
  const { enteredLocation } = useNameAndLocate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
        <div className="flex justify-between w-full">
          <BaseLeft />

          <BaseRight />
        </div>
      </div>
    </>
  );
}
