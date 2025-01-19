'use client'

import { Sparkles, Pen, Speaker } from 'lucide-react'
import { useState } from 'react'

export default function AnimatedIcons() {
  const [hoveredIcon, setHoveredIcon] = useState<number>(0)
  
  const icons = [
    { Icon: Sparkles, delay: '0ms' },
    { Icon: Pen, delay: '100ms' },
    { Icon: Speaker, delay: '200ms' } 
  ]

  return (
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-lg"></div>
      <div className="w-full h-full border-2 border-black/10 rounded-full bg-white relative overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          {icons.map(({ Icon, delay }, index) => (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                opacity: hoveredIcon === index ? 1 : 0,
                transform: `translateY(${hoveredIcon === index ? '0' : '100%'})`,
                transitionDelay: delay
              }}
              onMouseEnter={() => setHoveredIcon(index)}
            >
              <Icon 
                className="w-8 h-8 text-blue-400" 
              />
            </div>
          ))}
        </div>
        
        {/* Hover trigger area */}
        <div 
          className="absolute inset-0 cursor-pointer"
          onMouseEnter={() => setHoveredIcon((prev) => (prev + 1) % icons.length)}
          onMouseLeave={() => setHoveredIcon(0)}
          role="presentation"
        />
      </div>
    </div>
  )
}

