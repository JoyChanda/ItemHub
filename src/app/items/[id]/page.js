import Link from 'next/link';

async function getItem(id) {
  const res = await fetch(`http://localhost:5000/api/items/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Item not found');
  }
  return res.json();
}

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <Link 
          href="/items" 
          className="inline-flex items-center text-xs font-black tracking-[0.2em] text-zinc-400 hover:text-black transition-colors mb-16 uppercase"
        >
          ← Back to Explorer
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content Area */}
          <div className="lg:col-span-7 space-y-20">
            <div className="relative aspect-[16/10] bg-zinc-50 rounded-[3rem] overflow-hidden border border-zinc-100 shadow-inner group">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute top-10 left-10">
                 <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 shadow-xl">
                   Authentic Gear
                 </span>
              </div>
            </div>

            <div className="space-y-12">
               <div>
                  <h3 className="text-xs font-black text-zinc-300 uppercase tracking-[0.3em] mb-6">Overview</h3>
                  <p className="text-3xl font-medium text-zinc-900 leading-snug max-w-2xl italic">
                    "{item.description}"
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100">
                     <h4 className="font-black text-zinc-900 mb-2 uppercase text-[10px] tracking-widest">Specifications</h4>
                     <p className="text-zinc-500 text-sm leading-relaxed">Enterprise-grade components optimized for high-performance and daily reliability.</p>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100">
                     <h4 className="font-black text-zinc-900 mb-2 uppercase text-[10px] tracking-widest">Global Shipping</h4>
                     <p className="text-zinc-500 text-sm leading-relaxed">Secured tracked distribution available across 150+ countries with custom insurance.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar / Buying Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 p-12 rounded-[3.5rem] bg-white border-2 border-zinc-50 shadow-2xl shadow-zinc-200/50">
               <div className="mb-12 pb-12 border-b border-zinc-100">
                  <h1 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tight leading-none">
                    {item.name}
                  </h1>
                  <div className="flex items-center justify-between">
                    <p className="text-4xl font-black text-blue-600 font-mono tracking-tighter">${item.price}</p>
                    <div className="flex gap-1">
                       {[1,2,3,4,5].map(s => <span key={s} className="text-xs">★</span>)}
                       <span className="text-[10px] font-black text-zinc-400 ml-2 uppercase tracking-widest">Verified</span>
                    </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <button className="w-full py-6 bg-zinc-900 text-white rounded-[2rem] font-black text-xl hover:bg-black transition-all active:scale-[0.98] shadow-2xl shadow-zinc-200 flex items-center justify-center gap-4">
                    Acquire Asset <span className="text-zinc-500 text-sm">↗</span>
                  </button>
                  <button className="w-full py-5 border-2 border-zinc-100 text-zinc-900 rounded-[2rem] font-black hover:bg-zinc-50 transition-all active:scale-[0.98]">
                    Save to Collection
                  </button>
               </div>

               <div className="mt-12 space-y-4">
                  <div className="flex justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                     <span>Shipping</span>
                     <span className="text-zinc-900 font-black italic">Free Global</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                     <span>Estimated Delivery</span>
                     <span className="text-zinc-900 font-black italic">3-5 Business Days</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
