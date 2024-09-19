"use client"
import Link from 'next/link';
import React from 'react'
// import { useShopcartStore } from './context/Shopcart';

interface props{
    product:TProduct
}
const Product = ({product}:props) => {


  return (
    <div key={product.name} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                     <Link href={`/productdetails/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                        </Link>                   
                     </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
      </div>
  )
}

export default Product