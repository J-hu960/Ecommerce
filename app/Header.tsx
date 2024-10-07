"use client"

import { Menu, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState } from 'react'
import { useShopcartStore } from './context/Shopcart'
import NavLink from './components/NavLink'
import TextCarousel from './components/TextCarrousel'




const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [numberItemsInCart,setNumberItemsInCArt] =useState<number>(0)
    const GetNumberOfProdsInCart = useShopcartStore((state)=>state.getNumOfItems)
    const shopCart = useShopcartStore((state)=>state.shopCart)

    useEffect(() => {
      // Actualiza el número de items en el carrito cuando shopCart cambia
      setNumberItemsInCArt(GetNumberOfProdsInCart());
  }, [shopCart, GetNumberOfProdsInCart]);


  return (
    <>
    <header className="w-screen  bg-white h-28  inset-x-0 top-0 z-50 sticky">
       <nav className="w-screen h-full flex items-center justify-around " aria-label="Global">
         <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
         </div>
       
          <div className='hidden lg:flex lg:w-1/4 items-center justify-around w-auto gap-x-0'>
            <NavLink href={'/'}  >
               Inicio
           </NavLink>
           <Link href={"/#collections"} className="text-sm font-semibold leading-6 text-gray-600">
               Catalogo
           </Link>
           <Link href="/#contact" className="text-sm font-semibold leading-6 text-gray-600">
               Contacto
           </Link>
          </div>

        <div className='flex lg:w-2/4 items-center justify-center'>
           <Image alt='Letras del logo' height={50} width={100} src={'/writedlogo.avif'} />
        </div>

         <div className=" flex lg:justify-end lg:w-1/4 lg:pr-8 hover:cursor-pointer">
         <Link href={'/cart'} className='flex flex-col items-center justofy-center  hover:border-black hover:scale-125 transition-all ease-in text-black hover:cursor-pointer  hover:text-black rounded-full p-2 w-12'>
              <ShoppingCart className="h-6 w-6" aria-hidden="true" />

           <p className=' hover:text-black text-xl  hover:cursor-pointer'>{numberItemsInCart}</p>
         </Link >
       
        </div>
       </nav>
    {/* Mobile menu */}
    {mobileMenuOpen && (
      <div className={`lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/placeholder.svg?height=32&width=32"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Inicio
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Catálogo
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </header>
     <TextCarousel />
    </>
  )
}

export default Header