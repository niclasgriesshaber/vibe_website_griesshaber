import Link from 'next/link'
import TextParticles from '../../components/TextParticles'

export default function CV() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
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

        {/* CV Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Download Link */}
          <div className="mb-12 text-center">
            <a 
              href="/cv_griesshaber.pdf" 
              className="text-2xl text-blue-500 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my CV as PDF
            </a>
          </div>

          {/* CV Text */}
          <div className="space-y-6 mb-12">
            <p className="text-gray-800 text-justify leading-8">
              I am an incoming DPhil Candidate at the University of Oxford. I have been awarded the Advanced Quantitative Methods Award from the Economic and Social Research Council as part of UK Research and Innovation, which fully funds my doctoral studies.
            </p>
            <p className="text-gray-800 text-justify leading-8">
              I graduated at the top of my class in the MSc in Economic History at the University of Oxford and completed the MSc in Computational Statistics and Machine Learning with Distinction at University College London (UCL). I completed two separate bachelor&apos;s degrees at the University of Tübingen, where I ranked third in my cohort in the BSc Economics and graduated among the Top 10% in the BSc Cognitive Science. I am also very grateful for the opportunity to have studied at National University of Singapore, Asia&apos;s best university.
            </p>
          </div>

          {/* Animated Text Particles - Hidden on mobile */}
          <div className="hidden md:block">
            <TextParticles />
          </div>
        </div>
      </div>
    </main>
  )
} 