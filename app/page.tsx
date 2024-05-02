'use client'


import Image from "next/image";
import MyButton from "./_component/MyButton";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import NumberSelection from "./_component/numberSelection";
import { ThemeToggle } from "@/components/ThemeToggle";
import ProductGalary from "./_component/ProductGalary";

export default function Home() {
  const [age, setCount] = useState(0)
  const [height, setHeight] = useState(0)
  return (
    <div>
      <ThemeToggle />
      <ProductGalary />
      {/* <p className="hidden md:block">Age:</p>
      <NumberSelection value={age} onChange={setCount} min={-5} max={5} />

      <p>Height</p>
      <NumberSelection value={height} onChange={setHeight} min={-5} max={5} /> */}
    </div>
  );
}
