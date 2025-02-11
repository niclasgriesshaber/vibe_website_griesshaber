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
      canvas.width = Math.min(1300, window.innerWidth * 0.95)  // Increased maximum width
      canvas.height = 300  // Optimal height for large text
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Particle settings
    const particleSize = 6  // Larger particles
    const particleSpacing = 4  // Much denser particle placement
    let particles: Particle[] = []
    const texts = ['ECONOMIC HISTORY', 'MACHINE LEARNING']
    let currentTextIndex = 0
    
    // Create particles from text
    const createParticlesFromText = (text: string) => {
      // Clear before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set up text style
      ctx.font = 'bold 120px Arial'  // Much bigger font
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#000'
      
      // Draw text
      const textY = canvas.height / 2
      ctx.fillText(text, canvas.width / 2, textY)
      
      // Sample pixels
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      const newParticles: Particle[] = []

      // Keep track of available target positions
      const targetPositions: Array<{x: number, y: number}> = []
      for (let y = 0; y < canvas.height; y += particleSpacing) {
        for (let x = 0; x < canvas.width; x += particleSpacing) {
          const i = (y * canvas.width + x) * 4
          if (pixels[i + 3] > 128) {
            targetPositions.push({x, y})
          }
        }
      }

      // Reuse existing particles if available
      if (particles.length > 0) {
        const reusedParticles = particles.slice(0, Math.min(particles.length, targetPositions.length * 2))
        reusedParticles.forEach((particle, index) => {
          const targetPos = targetPositions[Math.floor(index / 2)]
          if (targetPos) {
            particle.targetX = targetPos.x
            particle.targetY = targetPos.y
          }
        })
        
        // Create additional particles if needed
        const remainingPositions = targetPositions.slice(Math.floor(reusedParticles.length / 2))
        remainingPositions.forEach(pos => {
          for (let p = 0; p < 2; p++) {
            newParticles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              targetX: pos.x,
              targetY: pos.y,
              size: particleSize,
              color: `rgba(99, 102, 241, ${0.95})`,
              speed: 0.08 + Math.random() * 0.02
            })
          }
        })
        
        return [...reusedParticles, ...newParticles]
      }

      // If no existing particles, create new ones
      targetPositions.forEach(pos => {
        for (let p = 0; p < 2; p++) {
          newParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            targetX: pos.x,
            targetY: pos.y,
            size: particleSize,
            color: `rgba(99, 102, 241, ${0.95})`,
            speed: 0.08 + Math.random() * 0.02
          })
        }
      })

      return newParticles
    }

    // Animation
    let animationFrameId: number
    let lastTime = 0
    const morphInterval = 8000  // Longer display time

    const animate = (timestamp: number) => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        // Smooth easing
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y
        particle.x += dx * particle.speed
        particle.y += dy * particle.speed

        // Draw particle
        ctx.beginPath()
        ctx.fillStyle = particle.color
        ctx.fillRect(
          Math.round(particle.x),
          Math.round(particle.y),
          particle.size,
          particle.size
        )
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
    <div className="w-full flex justify-center">
      <canvas
        ref={canvasRef}
        style={{ 
          height: '300px',
          width: '100%',
          maxWidth: '1300px'
        }}
      />
    </div>
  )
} 