import ProductCard from '@/components/Products/productCard'
import Container from '@/components/container'
import React from 'react'

type Props = {}

const ProductGalary = async (props: Props) => {
    const res = await fetch('https://dummyjson.com/products')
    const prouducts = await res.json()

    return (

        <div className='bg-slate-100'>
            <Container>
                ProductGalary
                {prouducts.products.map((product: any, index: number) => (
                    <ProductCard key={index} product={product} index={index} />
                ))}
            </Container>
        </div>
    )
}

export default ProductGalary