import art1 from "../assets/Exhibit1.jpg";
import art2 from "../assets/Exhibit2.jpg";
import art3 from "../assets/Exhibit3.jpg";
import art4 from "../assets/Exhibit4.jpg";

const artworks = [
  { name: "Golden Silence", artist: "Amina Njoroge", price: "$450", image: art1 },
  { name: "The Untold", artist: "John Karanja", price: "$320", image: art2 },
  { name: "Ethereal Motion", artist: "Mwikali Arts", price: "$580", image: art3 },
  { name: "Soul in Colour", artist: "Njoki W.", price: "$670", image: art4 },
];

function GallerySection() {
  return (
    <section className="bg-[#F4EDE2] py-20 w-full">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl font-extrabold text-[#3B2F2F]">Featured Works</h2>
        <p className="text-[#4F5D4E] mt-3 max-w-xl mx-auto text-lg">
          A curated selection of expressive pieces crafted with depth, texture, and emotion.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {artworks.map((art, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl shadow-lg overflow-hidden transition-transform 
                       hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={art.image}
                alt={art.name}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#3B2F2F]">{art.name}</h3>
              <p className="text-[#4F5D4E]">{art.artist}</p>

              <p className="mt-2 text-lg font-bold text-[#C6A675]">
                {art.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
