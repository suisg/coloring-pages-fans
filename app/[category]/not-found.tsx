import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Category Not Found
          </h2>
          <p className="text-gray-500 mb-8">
            Sorry, the coloring page category you&apos;re looking for doesn&apos;t exist. 
            But don&apos;t worry, we have many other amazing categories for you to explore!
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full" size="lg">
              Go to Home Page
            </Button>
          </Link>
          
          <div className="text-sm text-gray-400">
            <p>Available categories:</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              <Link href="/cars" className="text-blue-500 hover:underline">Cars</Link>
              <span className="text-gray-300">•</span>
              <Link href="/animals" className="text-blue-500 hover:underline">Animals</Link>
              <span className="text-gray-300">•</span>
              <Link href="/princess" className="text-blue-500 hover:underline">Princess</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 