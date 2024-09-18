"use client"
import Image from 'next/image'
import React from 'react'
import Collections from './Collections'
import Newsletter from './Newsletter'
import Product from './Items'
import Products from '../products.json'
const Hero = () => {

 
  return (
    <main>
    {/* Hero section */}
    <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
    <Image
            height={100}
            width={100}
            src="/main.jpg"
            alt="Main photo"
            className="absolute inset-0 -z-10 h-full w-full   opacity-40"

          />
   
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Elevate Your Style
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our latest collection of modern, sustainable clothing that combines comfort with cutting-edge design.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button>Shop now</button>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Whats new</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
            {Products.map((item) => (
              <Product key={item.name} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Featured Products */}
     <Collections />

    {/* Newsletter Section */}
     <Newsletter />
  </main>

  )
}

export default Hero