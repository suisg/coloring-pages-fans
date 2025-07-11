import Image from 'next/image'
import { PinterestIcon } from '@/lib/icons'
import { ImageInfo } from '@/lib/types'

interface ColoringSectionProps {
  id: string
  title: string
  description: string
  images: ImageInfo[]
  onImageClick: (image: ImageInfo) => void
  onPinterestShare: (image: ImageInfo, title: string, description: string) => void
}

export default function ColoringSection({
  id,
  title,
  description,
  images,
  onImageClick,
  onPinterestShare
}: ColoringSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <article
            key={image.id}
            className="group bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <figure className="relative aspect-[5/6] bg-gray-100 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  loading="lazy"
                  onClick={() => onImageClick(image)}
                />
                
                {/* Pinterest Share Button */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onPinterestShare(image, title, image.description)
                    }}
                    className="hover:scale-110 transition-transform duration-200"
                    title="Share on Pinterest"
                  >
                    <PinterestIcon
                      size={24}
                      className="drop-shadow-lg"
                    />
                  </button>
                </div>
            </figure>
              
            <figcaption className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-300">
                  {image.description}
                </p>
            </figcaption>
          </article>
        ))}
      </div>
    </section>
  )
} 