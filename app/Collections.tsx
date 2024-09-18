import React from 'react'
import Collection from './Collection'

const Collections = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Collections</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {[

              {
                name: 'Slim Fit Jeans',
                description: 'Comfortable and stylish for any occasion',
                imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
                price: '$59.99',
              },
              {
                name: 'Classic Leather Jacket',
                description: 'Timeless style with modern details',
                imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                price: '$199.99',
              },
            ].map((product) => (
                <Collection key={product.name} collection={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections