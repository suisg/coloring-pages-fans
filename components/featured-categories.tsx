import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Flower, Car, Crown, TreePine, Cake } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  count: number
  color: string
  description: string
  href: string
}

const categories: Category[] = [
  {
    id: 'animals',
    name: 'Animals',
    icon: <Heart className="h-8 w-8" />,
    count: 450,
    color: 'bg-pink-100 text-pink-600',
    description: 'Cute animals waiting to be colored',
    href: '/animals'
  },
  {
    id: 'flowers',
    name: 'Flowers',
    icon: <Flower className="h-8 w-8" />,
    count: 320,
    color: 'bg-rose-100 text-rose-600',
    description: 'Beautiful floral designs',
    href: '/flowers'
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: <Car className="h-8 w-8" />,
    count: 280,
    color: 'bg-blue-100 text-blue-600',
    description: 'Cool cars and transportation',
    href: '/coloring-pages-for-kids'
  },
  {
    id: 'princess',
    name: 'Princess',
    icon: <Crown className="h-8 w-8" />,
    count: 200,
    color: 'bg-purple-100 text-purple-600',
    description: 'Magical fairy tale princesses',
    href: '#'
  },
  {
    id: 'nature',
    name: 'Nature',
    icon: <TreePine className="h-8 w-8" />,
    count: 350,
    color: 'bg-green-100 text-green-600',
    description: 'Amazing natural landscapes',
    href: '#'
  },
  {
    id: 'food',
    name: 'Food',
    icon: <Cake className="h-8 w-8" />,
    count: 180,
    color: 'bg-orange-100 text-orange-600',
    description: 'Delicious food illustrations',
    href: '/food-new'
  }
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated categories to find your favorite coloring themes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="block"
            >
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${category.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="text-primary font-medium">
                    {category.count} Pages
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/cat">
            <button className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-lg font-medium">
              View All Categories
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
} 