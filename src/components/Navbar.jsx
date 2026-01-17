'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);

  // Check auth state on mount and when path changes
  useEffect(() => {
    const checkAuth = () => {
      const auth = document.cookie.includes('auth=true');
      setIsAuth(auth);
    };

    checkAuth();
    
    // Periodically check or listen for changes if needed
    // In a real app, you'd use a context/store, but this works for mock auth
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, [pathname]);

  const handleLogout = () => {
    // Remove cookie
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setIsAuth(false);
    router.push('/');
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xl">I</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-zinc-900">
            ITEM<span className="text-blue-600">HUB</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className={`text-sm font-semibold transition-colors ${pathname === '/' ? 'text-blue-600' : 'text-zinc-500 hover:text-black'}`}>Home</Link>
          <Link href="/items" className={`text-sm font-semibold transition-colors ${pathname === '/items' ? 'text-blue-600' : 'text-zinc-500 hover:text-black'}`}>Explorer</Link>
          <Link href="/add-item" className={`text-sm font-semibold transition-colors ${pathname === '/add-item' ? 'text-blue-600' : 'text-zinc-500 hover:text-black'}`}>Sell Item</Link>
        </div>

        <div className="flex items-center gap-4">
          {isAuth ? (
            <button 
              onClick={handleLogout}
              className="px-6 py-2.5 bg-red-50 text-red-600 border border-red-100 rounded-full text-sm font-bold hover:bg-red-600 hover:text-white transition-all active:scale-95"
            >
              Log Out
            </button>
          ) : (
            <Link 
              href="/login" 
              className="px-6 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-black hover:shadow-lg hover:shadow-zinc-200 transition-all active:scale-95"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
