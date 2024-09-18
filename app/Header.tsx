"use client"

import { Menu, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState } from 'react'



const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <header className="absolute bg-white h-28  inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 pt-2 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5">
          <span className="sr-only">Your Company</span>
          <Image
            height={30}
            width={80}
            src="/logo.jpg"
            alt="logo"
          />
        </a>
      </div>
      <h2 className='hidden lg:flex text-3xl text-black font-bold font-serif '>Saint Michel</h2>
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
   
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href={'/cart'}  className="text-sm font-semibold leading-6 text-gray-900">
          <ShoppingCart className="h-6 w-6" aria-hidden="true" />
        </Link>
      </div>
    </nav>
    {/* Mobile menu */}
    {mobileMenuOpen && (
      <div className="lg:hidden">
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
                  New Arrivals
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Women
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Men
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Accessories
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </header>
  
    </>
  )
}

export default Header