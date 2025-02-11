import Link from 'next/link'
import Image from 'next/image'
import { FloatingElements } from '../components/FloatingElements'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80">
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(147,197,253,0.1) 50%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute top-[20%] right-[-20%] w-[1000px] h-[1000px] animate-pulse-slower"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(165,180,252,0.1) 50%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="absolute bottom-[-20%] left-[30%] w-[900px] h-[900px] animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(167,139,250,0.1) 50%, transparent 70%)',
            filter: 'blur(70px)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header/Navigation */}
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-medium tracking-tight">
            <Link href="/">Niclas Griesshaber</Link>
          </h1>
          <div className="space-x-8">
            <Link href="/research" className="text-sm font-medium hover:text-gray-600 transition-colors">RESEARCH</Link>
            <Link href="/cv" className="text-sm font-medium hover:text-gray-600 transition-colors">CV</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Title above image */}
            <h2 className="text-4xl font-light mb-8 tracking-tight">
              I am a researcher in Economic History and Machine Learning.
            </h2>

            {/* Main content with animations */}
            <div className="relative w-full flex justify-center items-center mb-12">
              {/* Left side - Economic History Quotes */}
              <div className="absolute left-0 w-[400px] h-[600px] overflow-hidden">
                <FloatingElements side="left" />
              </div>

              {/* Image Container */}
              <div className="relative w-[500px] h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] z-10">
                <Image
                  src="/grießhaber.jpg"
                  alt="Niclas Griesshaber"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
              </div>

              {/* Right side - ML Formulas */}
              <div className="absolute right-0 w-[400px] h-[600px] overflow-visible">
                <FloatingElements side="right" />
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="mb-16">
              <p className="text-xl text-gray-700 font-light">
                Feel free to reach out at{' '}
                <a 
                  href="mailto:niclasgriesshaber@outlook.com"
                  className="text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-gray-600"
                >
                  niclasgriesshaber@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
