"use client"
import { useRouter } from 'next/navigation';  // Importar desde 'next/navigation'
import React from 'react'
export type Collection ={
    id:number;
    name: string;
    description: string;
    img: string;
    releaseDate: string;
}
interface props{
    collection:Collection
}
const Collection = ({collection}:props) => {
     const router = useRouter()

  return (
    <div key={collection.name} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={collection.img}
                    alt={collection.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                       <button type="button" onClick={() => router.push(`/collection/${collection.id}`)}>

                        <span aria-hidden="true" className="absolute inset-0" />
                        {collection.name}
                        </button>
                    </h3>
                  </div>
             
                </div>
  </div>
  )
}

export default Collection