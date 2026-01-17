'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    // Simulate a small delay for premium feel
    setTimeout(() => {
      document.cookie = 'auth=true; path=/';
      router.push('/items');
      router.refresh(); // Ensure layout respects new cookie
    }, 800);
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50/50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-zinc-200/50 border border-gray-100 p-8 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-zinc-900 mb-2">Welcome Back</h1>
          <p className="text-gray-500">Enter your credentials to access ItemHub</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700 ml-1">Email Address</label>
            <input 
              required
              type="email"
              placeholder="admin@test.com" 
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700 ml-1">Password</label>
            <input 
              required
              placeholder="••••••••" 
              type="password" 
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all outline-none"
            />
          </div>

          <div className="pt-2">
            <button 
              disabled={loading}
              className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-black active:scale-[0.98] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : 'Sign In'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Hint: Use <span className="font-mono text-zinc-900 font-bold">admin@test.com</span> / <span className="font-mono text-zinc-900 font-bold">123456</span>
        </div>
      </div>
    </div>
  );
}
