import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CategoryClient from './CategoryClient'
import { getCategoryConfig, generateCategorySEO, getAllCategoryIds } from '@/lib/data/all-categories'

export async function generateStaticParams() {
  const categoryIds = getAllCategoryIds()
  return categoryIds.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const categoryConfig = getCategoryConfig(category)

  if (!categoryConfig) {
    return {
      title: 'Category Not Found',
      description: 'The requested category was not found.'
    }
  }

  const seo = generateCategorySEO(category)
  return seo || {
    title: categoryConfig.title,
    description: categoryConfig.description
  }
}

function generateCategorySchema(categoryConfig: any) {
  const baseUrl = 'https://www.coloringpages.fans'

  // Create items array with proper typing - limit to first 10 items for performance
  const itemListElement: any[] = []
  let itemPosition = 1
  const maxItems = 10 // Limit for better performance and avoid spam
  let totalItems = 0

  // Get total count first
  const totalAvailable = categoryConfig.sections.reduce((total: number, section: any) => total + section.images.length, 0)

  categoryConfig.sections.forEach((section: any) => {
    section.images.forEach((image: any) => {
      if (totalItems >= maxItems) return // Stop after reaching limit

      itemListElement.push({
        "@type": "ListItem",
        "position": itemPosition++,
        "item": {
          "@type": "CreativeWork",
          "name": image.alt,
          "description": image.description,
          "url": `${baseUrl}${categoryConfig.path}#${image.id}`,
          "image": {
            "@type": "ImageObject",
            "url": image.url,
            "contentUrl": image.url,
            "description": image.alt,
            "encodingFormat": "image/jpeg"
          },
          "associatedMedia": {
            "@type": "MediaObject",
            "contentUrl": image.pdfUrl,
            "encodingFormat": "application/pdf",
            "description": `Printable PDF version of ${image.alt}`
          },
          "isAccessibleForFree": true
        }
      })
      totalItems++
    })
  })

  // Main CollectionPage schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": categoryConfig.title,
    "description": categoryConfig.description,
    "url": `${baseUrl}${categoryConfig.path}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Coloring Pages Fans",
      "url": baseUrl
    },
    "about": {
      "@type": "Thing",
      "name": "Free Coloring Pages",
      "description": "Free printable coloring pages for kids and adults"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": totalAvailable, // Show total available items
      "itemListElement": itemListElement
    }
  }

  return collectionSchema
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryConfig = getCategoryConfig(category)

  if (!categoryConfig) {
    notFound()
  }

  const schema = generateCategorySchema(categoryConfig)

  return (
    <>
      <CategoryClient categoryConfig={categoryConfig} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </>
  )
} 