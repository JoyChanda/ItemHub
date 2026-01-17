import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white font-black text-sm">I</span>
              </div>
              <span className="text-lg font-black tracking-tighter text-zinc-900 uppercase">
                ITEM<span className="text-blue-600">HUB</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-6 mb-8 max-w-xs font-medium">
              The premium destination for managing and exploring world-class digital collections. Built for the next generation of merchants.
            </p>
            <div className="flex gap-4">
              {['𝕏', 'In', 'Fb'].map((s) => (
                <div key={s} className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-sm font-black hover:border-black transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-zinc-900 mb-8 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4">
              {['Explorer', 'Analytics', 'Enterprise', 'API Docs'].map(l => (
                <li key={l}>
                  <Link href="#" className="text-zinc-500 font-medium text-sm hover:text-black transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-zinc-900 mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4">
              {['Case Studies', 'Pricing', 'Security', 'FAQ'].map(l => (
                <li key={l}>
                  <Link href="#" className="text-zinc-500 font-medium text-sm hover:text-black transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-zinc-900 mb-8 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed font-medium">Get the latest item drop insights directly in your inbox.</p>
            <div className="p-1 pl-4 bg-white border border-zinc-200 rounded-2xl flex items-center gap-2">
              <input type="text" placeholder="name@email.com" className="bg-transparent flex-1 outline-none text-sm font-medium" />
              <button className="px-6 py-3 bg-zinc-900 text-white font-black text-xs rounded-xl hover:bg-black transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} ITEMHUB GLOBAL SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs font-bold text-zinc-400 uppercase tracking-widest">
            <Link href="#" className="hover:text-black">Privacy</Link>
            <Link href="#" className="hover:text-black">Terms</Link>
            <Link href="#" className="hover:text-black">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
