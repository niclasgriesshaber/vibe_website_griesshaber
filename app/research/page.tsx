import Link from 'next/link'

export default function Research() {
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

        {/* Research Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Introduction - centered and more compact */}
          <p className="text-lg text-gray-600 font-light mb-8 text-center">
            My research is at the intersection of machine learning and economic history.
          </p>

          {/* Quote and Vision Statement */}
          <div className="mb-12 space-y-6">
            <blockquote className="text-gray-600 text-justify italic">
              "The historical evidence [...] suggests that in order to understand institutional influences on long-run growth, economists need ways of characterizing the wider institutional system of which each institution is just one component [...] Our best hope of success at this task will be to combine the ability of economics to simplify everything as much as possible, with the ability of history to identify where the complexity of the data resists further simplification and tells us that better analytical tools must be devised" (Ogilvie and Carus 2014, p. 490).
            </blockquote>

            <div className="space-y-4">
              <p className="text-gray-800 text-justify">
                With multimodal large language models we can build large-scale historical text data sets based on archival sources at faster speeds than ever before.
              </p>

              <p className="text-gray-800 text-justify">
                The past has happened. The data that survived is out there to be collected. As we are able to build larger datasets than ever before, the ability to ask the right questions becomes even more important.
              </p>

              <p className="text-gray-800 text-justify">
                With the new microlevel data abundance, we will be able to characterize the wider institutional system. We can go one level further in complexity: what made an institution inclusive or extractive in a particular region and how did this affect local economic growth?
              </p>

              <p className="text-gray-800 text-justify">
                Tools from machine learning, such as natural language processing and computer vision, will help us to measure the inclusivity and interactions of institutions on the new microlevel data. With these tools, we can transform qualitative textual sources into quantitative data (e.g., Carus and Ogilvie, 2009). Integrating these newly constructed variables into the standard toolkit in econometrics may enable us to better understand the latent mechanisms that intertwined institutions, culture and economic growth.
              </p>
            </div>
          </div>

          {/* Papers under Review - more compact spacing */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-3 tracking-tight border-b pb-2">
              Papers under Review
            </h2>
            <div className="space-y-6">
              <div className="group hover:bg-blue-50/30 hover:border hover:border-black p-4 -mx-4 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-light mb-2 leading-relaxed">
                  Transplanting Craft Guilds to Colonial Latin America: A Large Language Model Analysis
                </h3>
                <p className="text-gray-600 text-base">
                  <span className="italic">with </span>
                  <Link href="https://www.sheilaghogilvie.com/" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Sheilagh Ogilvie
                  </Link>
                  <span className="italic">; currently under review at The Journal of Economic History</span>
                </p>
              </div>
            </div>
          </section>

          {/* Papers in Progress - more compact spacing */}
          <section>
            <h2 className="text-2xl font-medium mb-3 tracking-tight border-b pb-2">
              Papers in Progress
            </h2>
            <div className="space-y-6">
              <div className="group hover:bg-blue-50/30 hover:border hover:border-black p-4 -mx-4 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-light mb-2 leading-relaxed">
                  A New Historical Dataset for Machine Translation between Early German and English: Cross-Lingual Transfer, Many-Shot In-Context Learning, and Fine-Tuning
                </h3>
                <p className="text-gray-600 text-base">
                  <span className="italic">with </span>
                  <Link href="https://www.sheilaghogilvie.com/" className="text-blue-500 hover:text-blue-600 transition-colors">
                    Sheilagh Ogilvie
                  </Link>
                  <span className="text-gray-600">, Jiayi Wang, Yao Lu, and Pontus Stenetorp; </span>
                  <span className="italic">in preparation for submission in ACL</span>
                </p>
              </div>

              <div className="group hover:bg-blue-50/30 hover:border hover:border-black p-4 -mx-4 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-light mb-2 leading-relaxed">
                  Multimodal Large Language Models for Layout Detection and Post-OCR Correction: German Business Directories from the 18th and 19th Centuries
                </h3>
                <p className="text-gray-600 text-base">
                  <span className="italic">with </span>
                  <span>Gavin Greif</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 