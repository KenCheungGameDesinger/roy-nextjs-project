'use client'


import { useState } from "react";
import ProductGalary from "./_component/ProductGalary";
import Header from "@/components/header";

export default function Home() {
  const [age, setCount] = useState(0)
  const [height, setHeight] = useState(0)
  return (
    <div>

      <Header />
      <ProductGalary />
      {/* <p className="hidden md:block">Age:</p>
      <NumberSelection value={age} onChange={setCount} min={-5} max={5} />

      <p>Height</p>
      <NumberSelection value={height} onChange={setHeight} min={-5} max={5} /> */}
    </div>
  );
}
