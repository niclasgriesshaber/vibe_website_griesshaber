'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
  color: string
  speed: number
}

export default function TextParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      const isMobile = window.innerWidth < 768
      canvas.width = Math.min(1300, window.innerWidth * 0.95)
      canvas.height = isMobile ? 120 : 300
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Particle settings
    const particleSize = 4  // Slightly larger for better visibility
    const particleSpacing = 4  // Match particle size for perfect grid
    let particles: Particle[] = []
    const texts = ['ECONOMIC HISTORY', 'MACHINE LEARNING']
    let currentTextIndex = 0
    
    // Create particles from text
    const createParticlesFromText = (text: string) => {
      // Clear before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set up text style with responsive font size
      const isMobile = window.innerWidth < 768
      const fontSize = isMobile ? 32 : 120
      ctx.font = `bold ${fontSize}px Arial`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#000'
      
      // Draw text
      const textY = canvas.height / 2
      ctx.fillText(text, canvas.width / 2, textY)
      
      // Sample pixels with perfect grid alignment
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      const newParticles: Particle[] = []

      // Calculate text boundaries for precise grid
      const textWidth = ctx.measureText(text).width
      const textHeight = fontSize * 0.8 // Approximate height based on font size
      const startX = Math.round((canvas.width - textWidth) / 2)
      const startY = Math.round((canvas.height - textHeight) / 2)
      const endX = Math.round(startX + textWidth)
      const endY = Math.round(startY + textHeight)

      // Create a perfect grid of sampling points
      for (let y = startY; y < endY; y += particleSpacing) {
        for (let x = startX; x < endX; x += particleSpacing) {
          // Ensure we're on the grid
          const gridX = Math.round(x / particleSpacing) * particleSpacing
          const gridY = Math.round(y / particleSpacing) * particleSpacing
          
          // Sample the pixel at this grid point
          const i = (gridY * canvas.width + gridX) * 4
          if (pixels[i + 3] > 128) {  // Check alpha channel
            // Create a particle at this grid point
            newParticles.push({
              x: canvas.width / 2,  // Start from center
              y: canvas.height / 2,  // Start from center
              targetX: gridX,
              targetY: gridY,
              size: particleSize,
              color: `rgba(99, 102, 241, ${0.95})`,
              speed: 0.08
            })
          }
        }
      }

      return newParticles
    }

    // Animation
    let animationFrameId: number
    let lastTime = 0
    const morphInterval = 8000

    const animate = (timestamp: number) => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles with perfect positioning
      particles.forEach(particle => {
        // Smooth easing with consistent speed
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y
        particle.x += dx * particle.speed
        particle.y += dy * particle.speed

        // Draw particle with pixel-perfect alignment
        ctx.beginPath()
        ctx.fillStyle = particle.color
        const x = Math.round(particle.x / particleSpacing) * particleSpacing
        const y = Math.round(particle.y / particleSpacing) * particleSpacing
        ctx.fillRect(x, y, particleSize, particleSize)
      })

      // Check if it's time to morph
      if (timestamp - lastTime > morphInterval) {
        currentTextIndex = (currentTextIndex + 1) % texts.length
        particles = createParticlesFromText(texts[currentTextIndex])
        lastTime = timestamp
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    particles = createParticlesFromText(texts[0])
    animate(0)

    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="w-full flex justify-center -mt-8 md:mt-0">
      <canvas
        ref={canvasRef}
        style={{ 
          height: 'auto',
          width: '100%',
          maxWidth: '1300px'
        }}
      />
    </div>
  )
} 