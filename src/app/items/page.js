import Link from 'next/link';

async function getItems() {
  const res = await fetch('http://localhost:5000/api/items', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch items');
  }
  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-zinc-900 mb-6 leading-tight">
              Curated <br />
              <span className="text-blue-600 italic">Inventory.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              Explore our hand-picked collection of professional-grade equipment and digital assets.
            </p>
          </div>
          
          <div className="flex bg-zinc-50 p-1.5 rounded-2xl border border-zinc-100">
            {['All', 'Trending', 'New', 'Archive'].map((cat, i) => (
              <button key={i} className={`px-6 py-2.5 rounded-xl text-sm font-black tracking-tight transition-all ${i === 0 ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>
                {cat}
              </button>
            ))}
          </div>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {items.map((item) => (
            <Link 
              href={`/items/${item.id}`} 
              key={item.id} 
              className="group"
            >
              <div className="relative aspect-[16/20] bg-zinc-50 rounded-[2.5rem] overflow-hidden mb-8 border border-zinc-50 group-hover:shadow-2xl group-hover:shadow-zinc-100 transition-all duration-700">
                 <img 
                   src={item.image} 
                   alt={item.name} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                 />
                 <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-zinc-900 shadow-sm">
                      Premium
                    </span>
                 </div>
                 <div className="absolute bottom-6 right-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xl shadow-2xl">
                       ↗
                    </div>
                 </div>
              </div>
              
              <div className="px-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-xl font-bold font-mono text-zinc-900">${item.price}</p>
                </div>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-6 line-clamp-1">
                  {item.description}
                </p>
                <div className="h-px w-full bg-zinc-100 group-hover:bg-blue-600 transition-colors duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
