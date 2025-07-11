import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Star, Users, Gift, Palette, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-yellow-50 to-blue-200">
      <HeroSection />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Welcome Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Explore a World of Coloring Pages, Printables, and Creative Activities
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover a variety of coloring pages designed to delight every age and skill level. From cute animal coloring and birthday-themed coloring books to intricate designs for adults, our pages help kids and grown-ups develop motor skills, creativity, and relaxation.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Printable PDFs</h3>
                <p className="text-gray-600">Free printable coloring pages in PDF format — easy to download and print at home</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Palette className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Perfect for Preschool</h3>
                <p className="text-gray-600">Perfect for preschool, kindergarten, and younger kids to practice color recognition and hand-eye coordination</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Adult Coloring Pages</h3>
                <p className="text-gray-600">Detailed adult coloring pages for stress relief and artistic expression</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Gift className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fun Craft Ideas</h3>
                <p className="text-gray-600">Fun craft and activity ideas to complement your coloring adventure</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Themed Collections</h3>
                <p className="text-gray-600">Themed coloring books and posters for birthdays, back to school, and more</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Family Friendly</h3>
                <p className="text-gray-600">Activities designed for the whole family to enjoy together</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Our Coloring Pages Are Perfect for Your Family
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Huge Variety of Coloring Pages for Kids and Adults</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Pick from hundreds of pages featuring animals, vehicles, flowers, shapes, and more. Whether you want a simple coloring page for toddlers or a detailed illustration for adults, you'll find the perfect design.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Free and Easy to Print</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                All our pages are free to download as PDFs, so you can print your favorites anytime. Use crayons, pencils, markers, or paint to bring each page to life with your own colorful touch.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Educational and Creative Benefits</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our coloring pages help kids learn colors, improve motor skills, and inspire imagination. Adults can relax and unwind while exploring creative expression through detailed designs.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Perfect Gift and Party Activity</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Looking for a unique birthday gift or a fun activity for kids? Our printable coloring pages make excellent gifts and party crafts that delight kids of all ages.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What Our Visitors Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The free coloring pages for kids are fantastic! My preschoolers love the animal and vehicle pages, and I love how easy it is to print them."
                </p>
                <p className="text-gray-800 font-semibold">– Emily T.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "I enjoy the adult coloring pages here. The detail and variety help me relax after work, and the PDFs print beautifully."
                </p>
                <p className="text-gray-800 font-semibold">– Mark L.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Start Coloring Today!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to explore thousands of coloring pages that spark creativity and fun? Whether you want to print a quick coloring page for your toddler or dive into a full coloring book experience, we have you covered.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Pick your favorite pages, print, and start coloring now!
          </p>
          <Link href="/coloring-pages-for-kids">
            <Button size="lg" className="text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700">
              Get Free Coloring Pages
            </Button>
          </Link>
        </section>

        {/* Footer Message */}
        <section className="text-center">
          <p className="text-xl text-gray-700 font-medium">
            Color your world with joy, creativity, and imagination — all with free printable coloring pages for kids and adults!
          </p>
        </section>
      </div>
    </div>
  )
} 