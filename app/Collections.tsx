import React from 'react'
import Collection from './Collection'
import collections from '../categories.json'

const Collections = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Collections</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {collections.map((product) => (
                <Collection key={product.name} collection={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections