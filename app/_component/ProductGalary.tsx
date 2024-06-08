import ProductCard from "@/components/Products/productCard";
import Container from "@/components/container";
import React from "react";

type Props = {};

const ProductGalary = async (props: Props) => {
  const res = await fetch("https://dummyjson.com/products");
  const prouducts = await res.json();

  return (
    <div className="bg-slate-100 dark:bg-gray-700">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prouducts.products.map((product: any, index: number) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductGalary;
