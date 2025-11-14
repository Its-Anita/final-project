import ctaBg from "../assets/Exhibit3.jpg";

function CTA() {
  return (
    <section
      className="relative py-24 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-[#f8f3e7] max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#d4af37] drop-shadow-sm">
          Join Our Collectors’ Circle
        </h2>

        <p className="mt-4 text-[#e7dfd1] text-lg">
          Receive first access to new exhibitions, artist releases, and
          exclusive previews curated for true art lovers.
        </p>

        {/* Input + Button */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none text-black w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />

          <button
            className="
              bg-gradient-to-r from-[#7b5e3b] to-[#d4af37]
              px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none
              font-semibold text-black
              transition-all duration-200
              hover:from-[#6a5134] hover:to-[#c29b30]
              hover:shadow-md
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
