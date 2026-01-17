import Link from 'next/link';

async function getItem(id) {
  const res = await fetch(`http://localhost:5000/api/items/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Item not found');
  }
  return res.json();
}

export default async function ItemDetails({ params }) {
  // Awaiting params for compatibility with Next.js 16/15
  const { id } = await params;
  const item = await getItem(id);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <Link 
          href="/items" 
          className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-black transition-colors mb-12"
        >
          ← BACK TO COLLECTION
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="bg-gray-50 rounded-[3rem] overflow-hidden aspect-square flex items-center justify-center border border-gray-100 shadow-inner">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 bg-zinc-100 text-zinc-900 rounded-full text-xs font-black tracking-widest uppercase mb-6">
                New Arrival
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-zinc-900 mb-4 tracking-tight">
                {item.name}
              </h1>
              <p className="text-3xl font-bold text-zinc-900 mb-8">${item.price}</p>
              
              <div className="w-full h-px bg-gray-100 mb-8" />
              
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Description</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                {item.description}
              </p>

              <div className="space-y-4 max-w-md">
                <button className="w-full py-5 bg-zinc-900 text-white rounded-3xl font-black text-lg hover:bg-black active:scale-[0.98] transition-all shadow-xl shadow-zinc-200">
                  Add to Cart
                </button>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 border-2 border-gray-100 text-zinc-900 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-[0.98]">
                    Wishlist
                  </button>
                  <button className="flex-1 py-4 border-2 border-gray-100 text-zinc-900 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-[0.98]">
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Features List */}
            <div className="mt-auto grid grid-cols-2 gap-6 pt-12 border-t border-gray-100">
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Free Shipping</h4>
                <p className="text-sm text-gray-400">On orders over $500</p>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Authentic Gear</h4>
                <p className="text-sm text-gray-400">100% genuine products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
