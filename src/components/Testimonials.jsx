function Testimonials() {
  return (
    <section className="bg-[#F4EDE2] py-20 px-6 md:px-16 w-full">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#3B2F2F] mb-14">
        What Our Visitors Say
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          <img
            src="/src/assets/images/test1.jpeg"
            alt="Visitor 1"
            className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#3B2F2F]">Sarah Kim</h3>
          <p className="text-[#C6A675] text-lg">★★★★★</p>
          <p className="text-[#4F5D4E] mt-3 leading-relaxed">
            “A truly immersive space. Every piece feels carefully placed and full of meaning.”
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          <img
            src="/src/assets/images/test2.jpeg"
            alt="Visitor 2"
            className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#3B2F2F]">James Muriuki</h3>
          <p className="text-[#C6A675] text-lg">★★★★★</p>
          <p className="text-[#4F5D4E] mt-3 leading-relaxed">
            “A warm atmosphere and captivating artwork. I keep discovering something new each visit.”
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition">
          <img
            src="/src/assets/images/test3.jpeg"
            alt="Visitor 3"
            className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#3B2F2F]">Linda W.</h3>
          <p className="text-[#C6A675] text-lg">★★★★★</p>
          <p className="text-[#4F5D4E] mt-3 leading-relaxed">
            “A beautifully curated gallery. The textures, tones, and atmosphere are unmatched.”
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
