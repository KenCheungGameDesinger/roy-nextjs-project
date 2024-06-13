import ProductCard from "@/components/Products/productCard";
import Container from '@/components/container';
import React from 'react';
import Link from 'next/link'

type Props = {};

const HeroSection = async (props: Props) => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const randomProducts = data.products
    .sort(() => Math.random() - Math.random())
    .slice(0, 6);
  
  return (
    <div>
        <Container className="md:flex mt-12 mx-auto size-10/12">
        <div className="gap-y-6 m-8 min-w-72">
            <h1 className="text-4xl mb-4">Get the Latest and Greatest Offer.</h1>
            <p className="mb-8">Discover cool offers, product reviews, and the newest releases, all in one place.</p>
            <Link href="/product" className="text-center bg-pink-200 dark:bg-pink-600 rounded-sm px-8 py-4 font-bold max-w-52">Explore more</Link>
        </div>
        <div className="flex space-x-4 overflow-x-scroll text-black">
            {randomProducts.map((product: any, index: number) => (
            <ProductCard key={index} product={product} index={index} />
            ))}
        </div>
      </Container>
    </div>
  )
}

export default HeroSection;