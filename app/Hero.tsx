"use client"
import Image from 'next/image'
import React from 'react'
import Collections from './Collections'
import Newsletter from './Newsletter'
import Product from './Items'
import Products from '../products.json'
import MyVideo from './components/MyVideo'
import AboutUs from './components/AboutUs'
const Hero = () => {

 
  return (
    <main className='w-screen flex flex-col items-center justify-start' >
    {/* Hero section */}
    <div className="w-screen relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
    <Image
            height={100}
            width={100}
            src="/mainbg.jpg"
            alt="Main photo"
            className="absolute inset-0 -z-10 h-full w-full   opacity-40"

          />
   
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Elevate Your Style
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 font-bold">
              Discover our latest collection of modern, sustainable clothing that combines comfort with cutting-edge design.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href='#collections'>Shop now</a >
              <a href="#about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='w-4/6 h-auto items-center '>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Whats new</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {Products.map((item) => (
              <Product key={item.name} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>

    <section className='w-full h-auto flex items-center justify-center'>
       <MyVideo />
    </section>

    {/* Featured Products */}
     <Collections />

     {/* About us */}

     <AboutUs />

    {/* Newsletter Section */}
     <Newsletter />

    </div>
   
  </main>

  )
}

export default Hero