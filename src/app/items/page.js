export default async function ItemsPage() {
  const res = await fetch('http://localhost:5000/api/items', { cache: 'no-store' });
  const items = await res.json();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Available Items</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="group border rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
               <img 
                 src={item.image} 
                 alt={item.name} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-sm shadow-sm">
                 ${item.price}
               </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
              <button className="w-full py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-black transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
