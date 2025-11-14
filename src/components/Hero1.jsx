import heroBg from "../assets/Aesthetics.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* NAV */}
      <nav className="w-full px-6 py-5 flex items-center justify-between text-white bg-gradient-to-b from-black/40 to-transparent">
        <h1 className="text-2xl font-bold tracking-wide text-[#F4EDE2]">
          SoulSpace
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-lg">
          <li className="cursor-pointer hover:text-[#C6A675] transition">Home</li>
          <li className="cursor-pointer hover:text-[#C6A675] transition">About</li>
          <li className="cursor-pointer hover:text-[#C6A675] transition">Features</li>
          <li className="cursor-pointer hover:text-[#C6A675] transition">Contact</li>
        </ul>
      </nav>

      {/* CENTER CONTENT */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F4EDE2] leading-tight drop-shadow-lg">
          Where Art Finds Its Soul
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[#F4EDE2]/90 drop-shadow">
          A curated journey of emotion and expression — created to immerse you in warm,
          timeless artistry that speaks to the heart.
        </p>

        <button
          className="mt-8 px-10 py-4 rounded-full bg-[#C6A675] text-[#3B2F2F] font-semibold 
          hover:bg-[#b08c58] transition shadow-md"
        >
          Explore Gallery
        </button>
      </div>

      {/* STATS BAR */}
      <div className="w-full bg-[#3B2F2F] text-[#F4EDE2] py-8 rounded-t-3xl shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-4xl font-bold text-[#C6A675]">150+</h2>
            <p className="text-sm">Curated Works</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#C6A675]">77+</h2>
            <p className="text-sm">Featured Artists</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#C6A675]">18</h2>
            <p className="text-sm">Exhibitions Held</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#C6A675]">10k+</h2>
            <p className="text-sm">Visitors Inspired</p>
          </div>
        </div>
      </div>
    </section>
  );
}
