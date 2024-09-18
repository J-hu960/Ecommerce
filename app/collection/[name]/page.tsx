"use client"
import { useState } from 'react'
import { ChevronDown, Filter, Grid, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Product from '@/app/Items'

const products: TProduct[] = [
  {
    name: 'Slim Fit Jeans',
    description: 'Comfortable and stylish for any occasion',
    imageSrc: '/main.jpg', // Puedes usar /logo.jpg o /main.jpg
    price: 59.99,
    quantity: 10
  },
  {
    name: 'Classic Leather Jacket',
    description: 'Timeless style with modern details',
    imageSrc: '/logo.jpg', // Puedes usar /logo.jpg o /main.jpg
    price: 199.99,
    quantity: 5
  },
  {
    name: 'Casual T-Shirt',
    description: 'Soft and comfortable t-shirt for everyday wear',
    imageSrc: '/main.jpg', // Puedes usar /logo.jpg o /main.jpg
    price: 29.99
    // quantity es opcional
  },
  {
    name: 'Running Shoes',
    description: 'Lightweight and durable shoes for running',
    imageSrc: '/logo.jpg', // Puedes usar /logo.jpg o /main.jpg
    price: 89.99,
    quantity: 15
  }
];

export default function CollectionPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')

  return (
    <div className="bg-white mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Summer Collection</h1>

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
              <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8' : 'space-y-6'}`}>
                {products.map((product) => (
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