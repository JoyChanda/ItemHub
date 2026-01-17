'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AddItem() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1026'
  });

  useEffect(() => {
    setMounted(true);
    const isAuth = document.cookie.includes('auth=true');
    if (!isAuth) {
      router.push('/login');
    }
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${API_URL}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price)
        })
      });

      if (res.ok) {
        alert('Product Successfully Cataloged');
        router.push('/items');
        router.refresh();
      }
    } catch (error) {
      alert('Network error occurred during cataloging.');
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Left Side: Instructions */}
        <div className="w-full md:w-1/3">
           <Link href="/items" className="inline-flex items-center text-xs font-black tracking-[0.2em] uppercase text-zinc-400 hover:text-black transition-colors mb-12">
             ← Back to Items
           </Link>
           <h1 className="text-5xl font-black text-zinc-900 leading-tight mb-8">
             New <br /> 
             <span className="text-blue-600">Inventory</span>
           </h1>
           <p className="text-zinc-500 font-medium leading-[1.8] mb-12">
             Official submission portal for premium items. All listings are subject to verification before global synchronization.
           </p>
           
           <div className="space-y-12">
             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-xl shadow-sm">🖼️</div>
               <div>
                  <h4 className="font-bold text-zinc-900 mb-1">High-Res Assets</h4>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">Ensure product images are 4k resolution for optimal visibility.</p>
               </div>
             </div>
             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-xl shadow-sm">📁</div>
               <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Precise Metadata</h4>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">Descriptions must include technical specs and condition reports.</p>
               </div>
             </div>
           </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-100 shadow-2xl shadow-zinc-200">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 ml-1">Product Title</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. MacBook Pro 16-inch M3 Max" 
                  className="w-full px-8 py-5 rounded-2xl bg-zinc-50 border border-zinc-100 outline-none focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-bold text-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 ml-1">Valuation ($)</label>
                  <input 
                    required
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="3499" 
                    className="w-full px-8 py-5 rounded-2xl bg-zinc-50 border border-zinc-100 outline-none focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-bold text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 ml-1">Asset Category</label>
                  <div className="relative">
                    <select className="w-full px-8 py-5 rounded-2xl bg-zinc-50 border border-zinc-100 outline-none focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-bold text-lg appearance-none">
                      <option>Computing</option>
                      <option>Audio Gear</option>
                      <option>Digital Assets</option>
                    </select>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-300">▼</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 ml-1">Condition & Details</label>
                <textarea 
                  required
                  rows="6"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Enter detailed specifications and product condition..." 
                  className="w-full px-8 py-5 rounded-2xl bg-zinc-50 border border-zinc-100 outline-none focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-bold text-lg resize-none"
                />
              </div>

              <div className="pt-6">
                <button 
                  disabled={loading}
                  className="w-full py-6 bg-zinc-900 text-white rounded-[2rem] font-black text-xl hover:bg-black transition-all active:scale-[0.98] shadow-2xl shadow-zinc-200 flex items-center justify-center gap-4"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Submit For Review <span className="text-zinc-500">→</span></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
