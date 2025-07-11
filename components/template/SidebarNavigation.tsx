import { Card, CardContent } from '@/components/ui/card'
import { SectionInfo } from '@/lib/types'

interface SidebarNavigationProps {
  sections: SectionInfo[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
  title?: string
  primaryColor?: string
  accentColor?: string
}

export default function SidebarNavigation({
  sections,
  activeSection,
  onSectionClick,
  title = 'Quick Navigation',
  primaryColor = 'orange',
  accentColor = 'orange'
}: SidebarNavigationProps) {
  return (
    <div className="hidden md:block w-64 flex-shrink-0">
      <div className="sticky top-20 space-y-4">
        {/* Navigation Section */}
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <p className="font-semibold text-lg mb-4 text-gray-800">
              {title}
            </p>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionClick(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                    activeSection === section.id
                      ? `bg-${primaryColor}-100 text-${primaryColor}-700 font-medium`
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 