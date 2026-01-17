'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AddItem() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: 'https://via.placeholder.com/300'
  });

  useEffect(() => {
    setMounted(true);
    // Simple client-side auth check
    const isAuth = document.cookie.includes('auth=true');
    if (!isAuth) {
      router.push('/login');
    }
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price)
        })
      });

      if (res.ok) {
        alert('Item Added Successfully!');
        router.push('/items');
        router.refresh();
      }
    } catch (error) {
      alert('Failed to add item');
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-gray-100 p-8 md:p-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-zinc-900 mb-2">Add New Item</h1>
          <p className="text-gray-500">List a new premium product in the ItemHub collection</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-zinc-900 ml-1 uppercase tracking-widest">Product Name</label>
            <input 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g. Pro Keyboard Mk II" 
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-zinc-900 transition-all outline-none font-medium"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-black text-zinc-900 ml-1 uppercase tracking-widest">Price ($)</label>
              <input 
                required
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="299" 
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-zinc-900 transition-all outline-none font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black text-zinc-900 ml-1 uppercase tracking-widest">Category</label>
              <select className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-zinc-900 transition-all outline-none font-medium appearance-none">
                <option>Electronics</option>
                <option>Accessories</option>
                <option>Peripherals</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-zinc-900 ml-1 uppercase tracking-widest">Description</label>
            <textarea 
              required
              rows="4"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Tell us about the product features..." 
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-zinc-900 transition-all outline-none font-medium resize-none"
            />
          </div>

          <div className="pt-4">
            <button 
              disabled={loading}
              className="w-full py-5 bg-zinc-900 text-white rounded-3xl font-black text-lg hover:bg-black active:scale-[0.98] transition-all shadow-xl shadow-zinc-200 disabled:opacity-70 flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : 'Publish Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
