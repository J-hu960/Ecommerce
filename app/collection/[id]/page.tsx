"use client"
// import { useState } from 'react'
// import { ChevronDown, Filter, Grid, List } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import products from '../../../products.json'
import Product from '@/app/Items'
import Collections from '../../../categories.json'

export default function CollectionPage({params}:{params:{id:number}}) {

  

  const filterByCategory = products.filter(prod=>prod.category == params.id)
  const collection = Collections.filter(col=>col.id==params.id)[0]
  

  return (
    <div className="bg-white mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{collection.name}</h1>

          {/* <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-3 hidden sm:flex">
                  Categories <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>T-Shirts</DropdownMenuItem>
                <DropdownMenuItem>Pants</DropdownMenuItem>
                <DropdownMenuItem>Outerwear</DropdownMenuItem>
                <DropdownMenuItem>Dresses</DropdownMenuItem>
                <DropdownMenuItem>Shoes</DropdownMenuItem>
                <DropdownMenuItem>Shirts</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="ml-3 hidden sm:flex w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              className="ml-3"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            >
              {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
              <span className="sr-only">
                {viewMode === 'grid' ? 'View as list' : 'View as grid'}
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="ml-3 sm:hidden">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filters</span>
            </Button>
          </div> */}
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            {/* <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {['T-Shirts', 'Pants', 'Outerwear', 'Dresses', 'Shoes', 'Shirts'].map((category) => (
                  <li key={category}>
                    <a href="#" className="hover:text-indigo-600">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>

            </form> */}

            {/* Product grid */}
            <div className="lg:col-span-3">
              <div className={'grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'}>
                {filterByCategory.map((product) => (
                    <Product product={product} key={product.name} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}