import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Heart, Users, Download } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            About Coloring Pages Fans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to your ultimate destination for free, high-quality coloring pages! We're passionate about bringing creativity, learning, and joy to families around the world.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-pink-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              At Coloring Pages Fans, we believe that creativity has no age limit. Our mission is to provide free, printable coloring pages that inspire imagination, support learning, and bring families together through the simple joy of coloring.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a parent looking for educational activities, a teacher seeking classroom resources, or an adult wanting to unwind with therapeutic coloring, we have something special for everyone.
            </p>
          </CardContent>
        </Card>

        {/* What We Offer Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Download className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">What We Offer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">For Kids</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Easy coloring pages for toddlers</li>
                  <li>• Educational preschool activities</li>
                  <li>• Fun kindergarten worksheets</li>
                  <li>• Exciting themes for boys and girls</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">For Everyone</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Detailed adult coloring pages</li>
                  <li>• Mathematical learning activities</li>
                  <li>• Seasonal and holiday themes</li>
                  <li>• High-quality PDF downloads</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Free</h3>
                <p className="text-gray-600">All our coloring pages are completely free to download and print.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">High Quality</h3>
                <p className="text-gray-600">Professional designs that print beautifully at home or school.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">For All Ages</h3>
                <p className="text-gray-600">From toddlers to adults, everyone can find their perfect coloring page.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you!
            </p>
            <div className="flex items-center justify-center space-x-2 text-xl">
              <Mail className="h-6 w-6 text-indigo-600" />
              <p className="text-indigo-500 hover:text-indigo-800 font-semibold transition-colors"
              >
                family@coloringpages.fans
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Coloring?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore our collection of free coloring pages and start your creative journey today!
          </p>
          <Link href="/coloring-pages-for-kids">
            <Button size="lg" className="text-lg px-8 py-4 h-auto font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Browse Coloring Pages
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'About Us - Free Coloring Pages for Kids and Adults',
  description: 'Learn about Coloring Pages Fans - your ultimate destination for free, printable coloring pages for all ages. Discover our mission to bring creativity and joy to families worldwide.',
} 