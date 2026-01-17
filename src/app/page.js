export default function Home() {
  return (
    <main className="flex flex-col gap-20 py-10 px-4 max-w-6xl mx-auto">
      {/* 1. Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-gray-50 rounded-3xl p-10 border border-gray-100">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
          Welcome to ItemHub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          The ultimate destination for all your tech and accessory needs. High quality products at your fingertips.
        </p>
      </section>

      {/* 2. Features Section */}
      <section id="features" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Fast Delivery', 'Secure Payment', '24/7 Support'].map((feature) => (
            <div key={feature} className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-2">{feature}</h3>
              <p className="text-gray-500">Experience the best-in-class service with our signature {feature.toLowerCase()} feature.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="bg-zinc-900 text-white rounded-3xl p-12 overflow-hidden relative">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-around">
          {['1. Browse', '2. Order', '3. Receive'].map((step) => (
            <div key={step} className="text-center">
              <div className="text-4xl font-bold text-zinc-700 mb-2">{step.split('.')[0]}</div>
              <p className="text-lg font-medium">{step.split('.')[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Trending Products</h2>
        <div className="text-center p-20 border-2 border-dashed border-gray-200 rounded-3xl text-gray-400">
          Products dynamic list will appear here...
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-12 bg-blue-50/50 rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-center mb-10">What Clients Say</h2>
        <div className="max-w-3xl mx-auto text-center italic text-lg text-gray-600">
          "ItemHub has completely changed the way I shop for tech. The user experience is seamless and the delivery is lightning fast!"
          <footer className="mt-4 font-bold not-italic text-black">— Sarah Jenkins, Tech Enthusiast</footer>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 border rounded-3xl bg-white">
            <h3 className="font-bold text-xl italic mb-2 text-gray-400 underline decoration-gray-400">Standard</h3>
            <p className="text-4xl font-extrabold mb-4">$0 <span className="text-sm font-normal text-gray-500">/mo</span></p>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li>✓ Basic Product Access</li>
              <li>✓ Standard Support</li>
            </ul>
            <button className="w-full py-3 bg-zinc-100 rounded-full font-bold">Get Started</button>
          </div>
          <div className="p-8 border-2 border-black rounded-3xl bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm font-bold rounded-bl-xl">Popular</div>
            <h3 className="font-bold text-xl mb-2">Premium</h3>
            <p className="text-4xl font-extrabold mb-4">$19 <span className="text-sm font-normal text-gray-500">/mo</span></p>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li>✓ VIP Product Access</li>
              <li>✓ Priority 24/7 Support</li>
              <li>✓ Free Shipping</li>
            </ul>
            <button className="w-full py-3 bg-black text-white rounded-full font-bold">Join Now</button>
          </div>
        </div>
      </section>

      {/* 7. CTA (Call to Action) Section */}
      <section className="bg-gradient-to-r from-zinc-900 to-black text-white p-12 rounded-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to upgrade your gear?</h2>
        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">Join thousands of happy customers and get started with ItemHub today.</p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-100 transition-colors">Shop All Items</button>
          <button className="px-8 py-4 bg-transparent border border-white rounded-full font-bold hover:bg-white/10 transition-colors">Contact Us</button>
        </div>
      </section>
    </main>
  );
}
