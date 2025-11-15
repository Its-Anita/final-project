import heroBg from "../assets/Aesthetics.jpg";

function Hero() {
  return (
    <section
      className="relative min-w-screen flex flex-col justify-between bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 text-white">
        <h1 className="font-bold text-2xl">SoulSpace</h1>

        <ul className="flex items-center gap-8 text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Features</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* CENTER CONTENT */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Where Art Finds Its Soul
        </h1>

        <p className="text-gray-200 mb-8">
          Discover authentic expressions, connect with artists, and become part of
          a living, evolving cultural gallery.
        </p>

        <button className="px-13 py-5 bg-white/80 hover:bg-white text-white font-medium rounded-full transition">
          Explore Gallery
        </button>
      </div>

      {/* STATS BAR */}
      <div className="relative z-7 bg-[#0F544E] absolute center text-white py-5 rounded-t-3xl">
        <div className="min-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-4 px-4">
          <div>
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="text-sm">Curated Works</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">77+</h2>
            <p className="text-sm">Featured Artist</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">18</h2>
            <p className="text-sm">Exhibitions Held</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">10k+</h2>
            <p className="text-sm">Visitors Inspired</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
