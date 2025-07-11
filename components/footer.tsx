import Link from 'next/link'
import { Heart } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-200 via-yellow-50 to-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="/Coloring-Pages-Fans-logo.jpg" 
                alt="Coloring Pages Fans Logo" 
                width={28} 
                height={28} 
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Coloring Pages Fans</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Providing the highest quality free coloring pages to inspire creativity and enjoy the pleasure of art.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with love, shared for free</span>
              <Heart className="h-4 w-4 ml-2 text-red-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400  transition-colors">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages-for-kids" className="text-gray-400 transition-colors">
                  Popular Pages
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages-for-kids" className="text-gray-400 transition-colors">
                  Latest Uploads
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors">
                  Random Discovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/coloring-pages-for-kids" className="text-gray-400 transition-colors">
                  Animal World
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors">
                  Flowers & Plants
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors">
                  Princess & Fairy Tales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mandala
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Coloring Pages Fans. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400  transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400  transition-colors text-sm">
                Terms
              </Link>
              <Link href="/about" className="text-gray-400  transition-colors text-sm">
                About
              </Link>
              <Link href="/contact" className="text-gray-400  transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 