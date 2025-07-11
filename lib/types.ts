// 图片信息接口
export interface ImageInfo {
  id: string
  url: string
  alt: string
  description: string
  pdfUrl?: string
}

// 小节信息接口
export interface SectionInfo {
  id: string
  title: string
  description: string
  images: ImageInfo[]
}

// 页面配置接口
export interface PageConfig {
  title: string
  description: string
  h1: string
  h1Description: string
  sections: SectionInfo[]
} 