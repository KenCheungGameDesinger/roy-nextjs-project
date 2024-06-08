import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import Container from './container'
import Link from 'next/link'
import SearchInput from './searchInput'
import { ShoppingCart, ShoppingCartIcon } from 'lucide-react'

type Props = {}

function Header({ }: Props) {
    return (
        <Container className=' flex items-center justify-between w-full'>
            <div className='flex'>
                <img src="/favicon.png" className='h-8 ' alt="" />
                <a href='/' className='text-xl font-bold mx-1'>KShop</a>
            </div>

            {/* <div className='flex align-center space-x-8'>
                <Link href="home" className='my-auto'>Home</Link>
                <Link href="product" className='my-auto'>Product</Link>
                <Link href="about-us" className='my-auto'>About us</Link>
                <Link href="contact-us" className='my-auto'>Contact Us</Link>
                <SearchInput className='my-auto'></SearchInput>
                <div className='flex space-x-2'>
                    <ThemeToggle />
                    <ShoppingCart className='w-6 h-6 my-auto' />
                </div>
            </div> */}

            {/* Fixed: my-auto -> items-center */}
            <div className='flex align-center space-x-8 items-center'>
                <Link href="/" className=''>Home</Link>
                <Link href="/product" className=''>Product</Link>
                <Link href="about-us" className=''>About us</Link>
                <Link href="contact-us" className=''>Contact Us</Link>
                <SearchInput className=''></SearchInput>
                <div className='flex space-x-2 items-center'>
                    <ThemeToggle />
                    <ShoppingCart className='w-6 h-6 ' />
                </div>
            </div>

        </Container>
    )
}

export default Header