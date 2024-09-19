import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="text-center space-y-6 p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
        <p className="text-gray-600">
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>
        <div className="pt-4">
          <Link href="/">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}