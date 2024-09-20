"use client"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import Link from "next/link"
import { useShopcartStore } from "../context/Shopcart"
import { useEffect } from "react"


export default function Component() {
  const resetCart = useShopcartStore((state)=>state.reset)
  useEffect(()=>{
    resetCart()

  },[])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      <div className="text-center space-y-6 p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <XCircle className="w-16 h-16 text-red-500 mx-auto" />
        <h1 className="text-3xl font-bold text-red-700">Payment Error</h1>
        <p className="text-gray-600">
          We're sorry, but there was an error processing your payment. Please try again or contact support.
        </p>
        <div className="pt-4">
          <Link href="/">
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}