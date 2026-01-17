'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    
    if (email === 'admin@test.com' && password === '123456') {
      setLoading(true);
      setTimeout(() => {
        document.cookie = 'auth=true; path=/';
        router.push('/items');
        router.refresh();
      }, 800);
    } else {
      setError('The credentials provided do not match our secure records.');
    }
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Decoration */}
      <div className="hidden lg:flex w-1/2 bg-zinc-900 flex-col justify-between p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <Link href="/" className="flex items-center gap-2 relative z-10 transition-opacity hover:opacity-80">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-xl">I</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            ITEM<span className="text-blue-500">HUB</span>
          </span>
        </Link>

        <div className="relative z-10">
          <h2 className="text-6xl font-black text-white leading-tight mb-8">
            Access the <br /> 
            <span className="italic text-zinc-400">Merchant</span> Portal.
          </h2>
          <p className="text-zinc-400 text-xl font-medium max-w-md">
            Enter the specialized dashboard for collection management and global distribution.
          </p>
        </div>

        <div className="relative z-10 flex gap-12">
           <div>
             <p className="text-white font-black text-3xl mb-1">10k+</p>
             <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Active Merchants</p>
           </div>
           <div>
             <p className="text-white font-black text-3xl mb-1">99.9%</p>
             <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">System Uptime</p>
           </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-20">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-zinc-900 mb-4 tracking-tight">Security Check</h1>
            <p className="text-zinc-500 font-medium">Please verify your credentials to continue.</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold animate-fade-in">
              <span className="w-5 h-5 flex items-center justify-center bg-red-100 rounded-full text-[10px]">!</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Merchant Email</label>
              <input 
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="id@itemhub.com" 
                className="w-full px-6 py-4 rounded-2xl border border-zinc-100 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none font-bold"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Access Token</label>
              <input 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                type="password" 
                className="w-full px-6 py-4 rounded-2xl border border-zinc-100 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none font-bold placeholder:tracking-widest"
              />
            </div>

            <button 
              disabled={loading}
              className="w-full py-5 bg-zinc-900 text-white rounded-[2rem] font-black hover:bg-black transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 shadow-2xl shadow-zinc-100"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Authorize Access <span className="text-zinc-500">→</span></>
              )}
            </button>
          </form>

          <footer className="mt-20 pt-10 border-t border-zinc-50 text-center">
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">Secured by ItemHub Cryptography</p>
            <div className="flex justify-center gap-6">
               <Link href="#" className="text-zinc-400 text-[10px] font-black uppercase hover:text-black">Terms</Link>
               <Link href="#" className="text-zinc-400 text-[10px] font-black uppercase hover:text-black">Privacy</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
