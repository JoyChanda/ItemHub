import Link from 'next/link';

async function getItems() {
  // cache: 'no-store' ensures we always get the latest data from the server
  const res = await fetch('http://localhost:5000/api/items', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch items');
  }
  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black tracking-tight text-zinc-900 md:text-5xl mb-4">
          Explore Our Collection
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Discover premium tech gear and accessories curated specifically for your digital lifestyle.
        </p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {items.map((item) => (
          <Link 
            href={`/items/${item.id}`} 
            key={item.id} 
            className="group block"
          >
            <div className="border border-gray-100 rounded-[2rem] overflow-hidden bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 h-full flex flex-col">
              <div className="aspect-[4/5] bg-gray-50 relative overflow-hidden">
                 <img 
                   src={item.image} 
                   alt={item.name} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl font-black text-zinc-900 shadow-sm border border-white/20">
                   ${item.price}
                 </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-2xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h2>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center justify-center w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold group-hover:bg-black transition-all active:scale-[0.98]">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
