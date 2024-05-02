import React from 'react'

type Props = {}

const ProductGalary = async (props: Props) => {
    const res = await fetch('https://dummyjson.com/products')
    const prouducts = await res.json()

    return (
        <div className='bg-slate-100'>ProductGalary
            {prouducts.products.map((product: any, index: number) => (
                <div key={index} className='mb-4 bg-white  '>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductGalary