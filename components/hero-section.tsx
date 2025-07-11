import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Download, Star, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-indigo-400 to-cyan-600 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-600 mb-6">
            Free Coloring Pages for Kids and Adults <br/> <span className="text-3xl md:text-4xl">Printable Coloring Fun for All Ages</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Welcome to your ultimate destination for free coloring pages! Whether you're looking for fun and educational coloring pages for kids, engaging adult coloring pages, or creative printables to inspire imagination, you've come to the right place. Our extensive collection of coloring pages is perfect for toddlers, preschoolers, kindergarteners, and adults alike.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search animals, flowers, cartoon characters..."
                  className="h-14 pl-12 pr-4 text-lg border-2 border-gray-200 focus:border-primary shadow-lg"
                />
              </div>
              <Button size="lg" className="h-14 px-8  text-lg font-semibold shadow-lg">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg mb-3">
                <Download className="h-6 w-6 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">3000+</div>
              <div className="text-gray-600">Free Downloads</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-3">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link href="/coloring-pages-for-kids">
              <Button size="lg" className="text-lg px-8 py-3 h-auto font-semibold shadow-lg">
                Start Coloring
              </Button>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto font-semibold">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 