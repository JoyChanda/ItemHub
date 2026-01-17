import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          <div className="absolute bottom-auto left-0 right-auto top-0 h-[500px] w-[500px] -translate-x-[10%] translate-y-[20%] rounded-full bg-[rgba(37,99,235,0.4)] opacity-50 blur-[80px]"></div>
        </div>

        <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-8 uppercase tracking-widest">
          ✨ The Future of Marketplace
        </div>
        
        <h1 className="animate-fade-in text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-8 leading-[1]">
          Discover, Collect <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            & Sell Premium Gear
          </span>
        </h1>
        
        <p className="animate-fade-in [animation-delay:200ms] text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed font-medium">
          Experience the world's most sophisticated item tracking and marketplace platform. Built for creators, collectors, and everyone in between.
        </p>
        
        <div className="animate-fade-in [animation-delay:400ms] flex flex-col sm:flex-row gap-4">
          <Link href="/items" className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-zinc-200">
            Browse Explorer
          </Link>
          <Link href="/add-item" className="px-10 py-5 bg-white text-zinc-900 border-2 border-zinc-100 rounded-2xl font-black text-lg hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95">
            Start Selling
          </Link>
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Core Systems</h2>
          <p className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">Built for Performance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Lightning Rapid', desc: 'Optimized server-side rendering for instant item retrieval and blazing fast interactions.', icon: '⚡' },
            { title: 'Secure Vault', desc: 'Enterprise-grade encryption for all your transactions and sensitive collection data.', icon: '🛡️' },
            { title: 'Always Live', desc: 'Real-time synchronization ensures you never miss a trending item or updated pricing.', icon: '🌍' }
          ].map((f, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-zinc-100 transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-zinc-900">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-32 bg-zinc-900 text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Mastering ItemHub in Three Simple Steps.</h2>
              <p className="text-zinc-400 text-lg mb-12">We've simplified complex e-commerce into a seamless flow for professional merchants and casual buyers.</p>
              <button className="px-8 py-4 bg-white text-zinc-900 rounded-2xl font-bold flex items-center gap-2 hover:bg-zinc-100 transition-all">
                Read Documentation <span className="text-lg">→</span>
              </button>
            </div>
            <div className="space-y-6">
              {[
                { n: '01', t: 'Connect & Setup', d: 'Create your account and integrate your storage in seconds.' },
                { n: '02', t: 'Inventory Scan', d: 'Upload your items with our intelligent automated listing system.' },
                { n: '03', t: 'Global Sync', d: 'Your items are instantly visible to millions of global collectors.' }
              ].map((s, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-2xl font-black text-blue-500">{s.n}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{s.t}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Section (Preview) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">Trending Items</h2>
            <p className="text-zinc-500 mt-4 text-lg">Curated bestsellers from our diverse collection.</p>
          </div>
          <Link href="/items" className="px-8 py-4 bg-zinc-100 text-zinc-900 rounded-2xl font-bold hover:bg-zinc-200 transition-all">
            View All Collection
          </Link>
        </div>
        
        <div className="relative p-1 border-2 border-dashed border-zinc-200 rounded-[3rem]">
          <div className="bg-zinc-50 rounded-[2.8rem] py-32 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-zinc-200">
               📦
            </div>
            <p className="text-2xl font-bold text-zinc-400">Live Item Feed Injected Here</p>
            <p className="text-zinc-300">Synchronized with our Express.js API</p>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-32 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl text-blue-300 mb-10 italic font-black">"</div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 italic mb-12 leading-tight">
            "ItemHub has radically transformed how we manage our global inventory. The interface is not just beautiful—it's incredibly fast."
          </h2>
          <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-zinc-900 rounded-full mb-4"></div>
             <p className="font-black text-zinc-900 text-xl tracking-tight">Marcus Thorne</p>
             <p className="text-blue-600 font-bold text-sm tracking-widest uppercase mt-1">CEO, NEXUS SYSTEMS</p>
          </div>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">Flexible Scale</h2>
          <p className="text-zinc-500 text-lg">Choose the tier that matches your collection size.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-12 rounded-[4rem] border border-zinc-100 bg-white shadow-xl shadow-zinc-100">
            <h3 className="text-zinc-400 font-black tracking-widest uppercase text-sm mb-6">Standard</h3>
            <div className="flex items-baseline gap-1 mb-10">
              <span className="text-6xl font-black text-zinc-900">$0</span>
              <span className="text-zinc-400 font-bold">/monthly</span>
            </div>
            <ul className="space-y-6 mb-12">
              {['Up to 50 Items', 'Standard Marketplace Access', 'Community Support', 'Basic Analytics'].map((li, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-600 font-medium">
                  <span className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] text-zinc-900">✓</span>
                  {li}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 bg-zinc-100 text-zinc-900 rounded-[2rem] font-black hover:bg-zinc-200 transition-all">Start Free</button>
          </div>

          <div className="p-12 rounded-[4rem] bg-zinc-900 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 py-2 px-10 bg-blue-600 font-black text-xs uppercase tracking-[0.2em] transform rotate-45 translate-x-[30%] translate-y-[50%]">PRO</div>
            <h3 className="text-zinc-400 font-black tracking-widest uppercase text-sm mb-6">Professional</h3>
            <div className="flex items-baseline gap-1 mb-10">
              <span className="text-6xl font-black text-white">$24</span>
              <span className="text-zinc-500 font-bold">/monthly</span>
            </div>
            <ul className="space-y-6 mb-12">
              {['Unlimited Items', 'Priority Market Insights', 'Dedicated 1-on-1 Support', 'Advanced API Access'].map((li, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-400 font-medium font-medium group-hover:text-white transition-colors">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-blue-500 font-bold">✓</span>
                  {li}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 bg-white text-zinc-900 rounded-[2rem] font-black hover:bg-blue-50 transition-all shadow-2xl shadow-blue-500/20">Upgrade Now</button>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-20 px-6">
        <div className="bg-blue-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to elevate your inventory?</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium">Join over 10,000 professional merchants who trust ItemHub for their daily operations.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/add-item" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:bg-zinc-50 transition-all hover:scale-105 shadow-2xl">
                Get Started Today
              </Link>
              <button className="px-10 py-5 bg-blue-700 text-white border border-blue-400 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
