import { useState } from 'react'
import { Star, Truck, Heart, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



export default function ProductDetails() {
    const product = [

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
      ]
  const [mainImage, setMainImage] = useState("https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80")
  const [selectedSize, setSelectedSize] = useState("m")

  const productImages = [
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    onClick={() => setMainImage(img)}
                  >
                    <span className="sr-only">Image {index + 1}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img src={img} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="aspect-h-1 aspect-w-1 w-full">
              <img
                src={mainImage}
                alt="Main product image"
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Classic Comfort Tee</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">$39.00</p>
            </div>

            {/* Ratings */}
            {/* <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        rating < 4 ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  117 reviews
                </a>
              </div>
            </div> */}

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">
                The Classic Comfort Tee is the perfect blend of style and comfort. Made from premium, 
                breathable cotton, this versatile t-shirt features a timeless crew neck design and a 
                relaxed fit that's suitable for any occasion. Available in a range of colors, it's a 
                wardrobe essential that you'll reach for time and time again.
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-green-500" />
                <p className="ml-2 text-sm text-gray-500">Free shipping on orders over $100</p>
              </div>
            </div>

            <form className="mt-6">
              {/* Colors */}
              {/* <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <RadioGroup defaultValue="white" className="mt-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="white" id="color-white" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white" />
                    <Label htmlFor="color-white" className="sr-only">White</Label>
                    
                    <RadioGroupItem value="gray" id="color-gray" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200" />
                    <Label htmlFor="color-gray" className="sr-only">Gray</Label>
                    
                    <RadioGroupItem value="black" id="color-black" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900" />
                    <Label htmlFor="color-black" className="sr-only">Black</Label>
                  </div>
                </RadioGroup>
              </div> */}

              {/* Sizes */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="mt-2">
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {['xs', 's', 'm', 'l', 'xl', '2xl'].map((size) => (
                      <div key={size}>
                        <RadioGroupItem
                          value={size}
                          id={`size-${size}`}
                          className="peer sr-only"
                          disabled={size === 'xl'}
                        />
                        <Label
                          htmlFor={`size-${size}`}
                          className="flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm peer-checked:bg-indigo-600 peer-checked:text-white hover:bg-gray-50 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-50 peer-disabled:text-gray-200"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-8 flex">
                <Button type="submit" size="lg" className="w-full">
                  Add to cart
                </Button>
              </div>
              <div className="mt-4 flex space-x-4">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" /> Add to wishlist
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Product details */}
            <div className="mt-10">
              <Tabs defaultValue="description" className="w-full">
                <TabsList>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="sizing">Sizing</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                  <p className="text-base text-gray-700">
                    The Classic Comfort Tee is designed for everyday wear. Its soft, breathable fabric 
                    ensures all-day comfort, while the classic cut provides a flattering fit for all body types. 
                    Whether you're running errands, meeting friends, or just relaxing at home, this tee is the 
                    perfect choice for a casual, put-together look.
                  </p>
                </TabsContent>
                <TabsContent value="details">
                  <ul className="list-disc pl-5 text-base text-gray-700">
                    <li>100% premium cotton</li>
                    <li>Pre-shrunk fabric</li>
                    <li>Seamless collar</li>
                    <li>Taped neck and shoulders</li>
                    <li>Machine washable</li>
                  </ul>
                </TabsContent>
                <TabsContent value="sizing">
                  <p className="text-base text-gray-700">
                    Our tees run true to size. For a more relaxed fit, we recommend sizing up. 
                    Please refer to our size guide for detailed measurements.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* FAQ */}
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I care for this item?</AccordionTrigger>
                  <AccordionContent>
                    Machine wash cold with like colors. Tumble dry low. Do not bleach. Iron on low heat if needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day return policy for unworn items in their original condition with tags attached.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}