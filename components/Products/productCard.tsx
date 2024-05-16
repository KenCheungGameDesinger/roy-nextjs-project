import { Archive, Star } from 'lucide-react'
import React from 'react'

type Props = {
    product: any
    index: number
}

const ProductCard = ({ product, index }: Props) => {

    return (
        <div className='mb-4 bg-white h-[400px] w-[300px]  rounded-md py-2 px-4'>
            <img className='h-[180px] rounded-lg object-cover' src={product.thumbnail} alt="thumbnail" />
            <div className='flex space-x-2 items-center mt-2'>
                <div className='flex space-x-1 items-center '>
                    <Archive className='w-3 h-3' />
                    <p className='text-xs align-bottom'>{product.stock}</p>
                </div>
                <div className='flex space-x-1 items-center '>
                    <Star className='w-3 h-3 text-yellow-500  ' fill='#eab308' />
                    <p className='text-xs'>{product.rating}</p>
                </div>
            </div>
            <h1 className='text-xl font-bold'>{product.title}</h1>
            <p className='text-sm text-gray-700  line-clamp-3'>{product.description}</p>
            <p>{product.discountPercentage}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>

            <p className='text-sm text-gray-700  line-clamp-3'>{product.category}</p>
        </div>
    )
}

export default ProductCard