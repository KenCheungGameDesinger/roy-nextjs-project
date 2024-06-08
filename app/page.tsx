"use client";

import { useState } from "react";
import ProductGalary from "./_component/ProductGalary";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [age, setCount] = useState(0);
  const [height, setHeight] = useState(0);
  return (
    <div>
      <Header />
    </div>
  );
}
