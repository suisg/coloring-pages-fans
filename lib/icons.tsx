import React from 'react'

interface IconProps {
  className?: string
  size?: number
  width?: number
  height?: number
}

interface PinterestIconProps extends IconProps {
  variant?: 'share' | 'link'
}

export const PinterestIcon: React.FC<PinterestIconProps> = ({ 
  className = '', 
  size = 24, 
  width, 
  height,
  variant = 'share'
}) => {
  const iconWidth = width || size
  const iconHeight = height || size
  
  const title = variant === 'share' ? 'Pinterest Share Button' : 'Visit Pinterest Profile'
  const desc = variant === 'share' ? 'Pinterest logo for sharing content' : 'Link to Pinterest profile page'
  
  return (
    <svg 
      width={iconWidth} 
      height={iconHeight} 
      fill="#CC2127" 
      version="1.1" 
      viewBox="0 0 48 48" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <title>{title}</title>
        <desc>{desc}</desc>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(-300 -260)" fill="#CC2127">
            <path d="m324 260c-13.254 0-24.001 10.745-24.001 24.001 0 9.8247 5.91 18.269 14.369 21.981-0.067737-1.6737-0.01129-3.6888 0.41489-5.5121 0.46287-1.9474 3.0877-13.076 3.0877-13.076s-0.76486-1.5325-0.76486-3.7989c0-3.5562 2.0632-6.212 4.6287-6.212 2.1817 0 3.2373 1.6398 3.2373 3.6042 0 2.193-1.3999 5.4754-2.1196 8.5151-0.60116 2.5486 1.2757 4.623 3.7876 4.623 4.5468 0 7.6091-5.8395 7.6091-12.76 0-5.2581-3.5421-9.1953-9.9855-9.1953-7.2789 0-11.814 5.4274-11.814 11.49 0 2.0942 0.61528 3.5675 1.5805 4.7077 0.44593 0.52778 0.5052 0.73664 0.34433 1.3406-0.11289 0.43747-0.3782 1.5043-0.48827 1.9249-0.16088 0.60681-0.65197 0.82695-1.1995 0.60116-3.3558-1.3688-4.9166-5.0407-4.9166-9.1699 0-6.816 5.7492-14.995 17.152-14.995 9.1642 0 15.196 6.6354 15.196 13.751 0 9.4154-5.2327 16.449-12.952 16.449-2.5881 0-5.0266-1.3999-5.8621-2.9889 0 0-1.3942 5.529-1.6878 6.5959-0.50803 1.8487-1.5043 3.7001-2.4159 5.1395 2.1591 0.63786 4.4396 0.98501 6.8019 0.98501 13.254 0 23.999-10.745 23.999-23.999 0-13.257-10.745-24.001-23.999-24.001"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}
 