"use client"
import Link from 'next/link';
import React from 'react'
// import { useShopcartStore } from './context/Shopcart';

interface props{
    product:TProduct
}
const Product = ({product}:props) => {


  return (
    <div key={product.name} className="group relative ml-6">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-56 p-2 rounded-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className=" w-full object-cover object-center h-full "
                  />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm  text-gray-900 font-bold">
                     <Link href={`/productdetails/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                        </Link>                   
                     </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.description}</p> */}
                  </div>
                  <p className="text-md mt-1 font-medium text-gray-900">€{product.price} EUR</p>
                </div>
      </div>
  )
}

export default Product