import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div id='about' className=' '>
    <section className='flex flex-col lg:flex-row w-full gap-4'>
          <Image
      src={'/aboutus.webp'}
      alt="Picture of the author"
      width={500}
      height={500}
      
    />
    <aside className='flex flex-col w-full lg:p-16 lg:gap-6'>

        <h2 className='text-3xl text-gray-700 font-extrabold from-neutral-400'>About us</h2>

        <p className='text-gray-800 font-light font-serif w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error am
        et laborum nesciunt porro aliquam vero. Laudantium, atque dolorem perferendis officia
         reiciendis dolorum consequatur, adipisci saepe quis nesciunt maxime eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error am
        et laborum nesciunt porro aliquam vero. Laudantium, atque dolorem perferendis officia
         reiciendis dolorum consequatur, adipisci saepe quis nesciunt maxime eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error am
        et laborum nesciunt porro aliquam vero. Laudantium, atque dolorem perferendis officia
         reiciendis dolorum consequatur, adipisci saepe quis nesciunt maxime eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error am
        et laborum nesciunt porro aliquam vero. Laudantium, atque dolorem perferendis officia
         reiciendis dolorum consequatur, adipisci saepe quis nesciunt maxime eveniet.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error am
        et laborum nesciunt porro aliquam vero. Laudantium, atque dolorem perferendis officia
         reiciendis dolorum consequatur, adipisci saepe quis nesciunt maxime eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error am
        et laborum nesciunt porro aliquam vero. Laudantium, atque dolorem perferendis officia
         reiciendis dolorum consequatur, adipisci saepe quis nesciunt maxime eveniet.</p>

    </aside>
   


    </section>


    </div>

   
  )
}

export default AboutUs