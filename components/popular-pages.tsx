import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Heart, Eye } from 'lucide-react'

interface ColoringPage {
  id: string
  title: string
  image: string
  downloads: number
  likes: number
  views: number
  category: string
}

// Mock data - in a real app this would come from an API
const popularPages: ColoringPage[] = [
  {
    id: '1',
    title: 'Cute Kitten',
    image: '/api/placeholder/300/400',
    downloads: 1250,
    likes: 890,
    views: 3200,
    category: 'Animals'
  },
  {
    id: '2',
    title: 'Beautiful Princess',
    image: '/api/placeholder/300/400',
    downloads: 980,
    likes: 750,
    views: 2800,
    category: 'Princess'
  },
  {
    id: '3',
    title: 'Blooming Flowers',
    image: '/api/placeholder/300/400',
    downloads: 1100,
    likes: 820,
    views: 2900,
    category: 'Flowers'
  },
  {
    id: '4',
    title: 'Super Sports Car',
    image: '/api/placeholder/300/400',
    downloads: 950,
    likes: 690,
    views: 2500,
    category: 'Vehicles'
  },
  {
    id: '5',
    title: 'Forest Deer',
    image: '/api/placeholder/300/400',
    downloads: 1180,
    likes: 860,
    views: 3100,
    category: 'Animals'
  },
  {
    id: '6',
    title: 'Birthday Cake',
    image: '/api/placeholder/300/400',
    downloads: 880,
    likes: 620,
    views: 2200,
    category: 'Food'
  }
]

export function PopularPages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular Coloring Pages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most loved coloring templates and join thousands of users enjoying creative fun
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularPages.map((page) => (
            <Card key={page.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="font-semibold text-gray-700">{page.title}</h3>
                    <span className="text-sm text-gray-500">{page.category}</span>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">
                    <Download className="h-4 w-4 mr-2" />
                    Download Now
                  </Button>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                    {page.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{page.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{page.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{page.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
            View More Popular Pages
          </Button>
        </div>
      </div>
    </section>
  )
} 