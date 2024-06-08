"use client";

import Header from "@/components/header";
import ProductGalary from "../_component/ProductGalary";
import { Toaster } from "@/components/ui/toaster";

export default function ProductPage() {
  return (
    <div>
      <Header />
      <ProductGalary />
      <Toaster />
    </div>
  );
}
