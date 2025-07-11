'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import ColoringSection from '@/components/template/ColoringSection'
import SidebarNavigation from '@/components/template/SidebarNavigation'
import { CategoryConfig } from '@/lib/data/all-categories'
import { ImageInfo } from '@/lib/types'

interface CategoryClientProps {
  categoryConfig: CategoryConfig
}

export default function CategoryClient({ categoryConfig }: CategoryClientProps) {
  const [activeSection, setActiveSection] = useState<string>(categoryConfig.sections[0]?.id || '')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button when scrolled down
      setShowScrollTop(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = categoryConfig.sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }))

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [categoryConfig.sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64 // Header height (h-16)
      const offset = 20 // Additional offset for better spacing
      const elementPosition = element.offsetTop - headerHeight - offset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const shareOnPinterest = (image: ImageInfo, sectionTitle: string, description: string) => {
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(image.url)}&description=${encodeURIComponent(`${sectionTitle} - ${description}`)}`
    window.open(pinterestUrl, '_blank', 'width=750,height=350')
  }

  const openPDFPage = (image: ImageInfo) => {
    if (image.pdfUrl) {
      window.open(image.pdfUrl, '_blank')
    } else {
      alert('PDF file not available for this image. Please upload the corresponding PDF file.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-yellow-50 to-blue-200">
      {/* Header */}
      <div className="w-full mx-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            {categoryConfig.h1}
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-5xl mx-auto">
            {categoryConfig.h1Description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Sidebar Navigation */}
        <SidebarNavigation
          sections={categoryConfig.sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          title="Quick Navigation"
          primaryColor="gray"
          accentColor="gray"
        />

        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-16">
            {categoryConfig.sections.map((section) => (
              <ColoringSection
                key={section.id}
                id={section.id}
                title={section.title}
                description={section.description}
                images={section.images}
                onImageClick={openPDFPage}
                onPinterestShare={shareOnPinterest}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full p-3 shadow-lg z-50"
          size="icon"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
} 