 export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1607082349566-187342175e2e?auto=format&fit=crop&w=1920&q=80"
        alt="Gaming setup"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Level Up Your <span className="text-cyan-400">Gaming Space</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Discover high-performance setups built for style, power, and
          precision. Upgrade your play with NovaByte.
        </p>
        <button className="bg-cyan-400 text-black px-6 py-3 font-semibold rounded-xl shadow-lg hover:bg-pink-500 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}
