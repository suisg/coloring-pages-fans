'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Search, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/Coloring-Pages-Fans-logo.jpg" 
              alt="Coloring Pages Fans Logo" 
              width={28} 
              height={28} 
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Coloring Pages Fans
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex text-lg text-gray-600 items-center space-x-6">
            <Link href="#" className="font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/coloring-pages-for-kids" className="font-medium hover:text-primary transition-colors">
              Popular
            </Link>
            <Link href="/coloring-pages-for-kids" className="font-medium hover:text-primary transition-colors">
              New
            </Link>
            <Link href="/about" className="font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center space-x-2 flex-1 max-w-sm mx-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search coloring pages..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="mb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search coloring pages..."
                    className="pl-10 pr-4"
                  />
                </div>
              </div>
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/popular"
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Popular
              </Link>
              <Link
                href="/new"
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                New
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 