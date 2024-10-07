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

        <h2 className='text-4xl text-gray-700 font-extrabold from-neutral-400'>Sobre <br /> nosostros</h2>

        <p className="text-gray-800 font-light font-serif w-full max-w-2xl mx-auto leading-loose text-lg md:text-xl space-y-6 px-4 md:px-0">
  <span className="block font-bold text-gray-600 text-lg mb-4 tracking-wide">SAINT MICHEL: <span className='text-md text-gray-400'>donde la calle y el arte se encuentran</span></span> 
  <span className="block text-md text-gray-500 font-thin">
    Nació en Barcelona en 2024 de la pasión de tres artistas, Arnau Michel Brescoli, Pep Tomasa y Marc Martínez. SAINT MICHEL es una marca que fusiona a la perfección la alta costura con el espíritu rebelde del streetwear.
  </span>
  
  <span className="block font-bold text-gray-600 text-lg mb-4 tracking-wide">Una Visión Artística</span>
  <span className="block text-md text-gray-500 font-thin ">
    Con una estética única, SAINT MICHEL transforma prendas básicas en auténticas obras de arte. Cada pieza es una expresión de la creatividad y el talento de sus fundadores, quienes buscan desafiar los límites de la moda y crear prendas que trasciendan las tendencias.
  </span>
</p>



    </aside>
   


    </section>


    </div>

   
  )
}

export default AboutUs