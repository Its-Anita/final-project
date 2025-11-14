import aboutImg from "../assets/Exhibit1.jpg";

function Section() {
  return (
    <section className="py-20 w-full px-6 md:px-12 bg-[#F4EDE2]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <img
          src={aboutImg}
          alt="Gallery Exhibit"
          className="rounded-xl shadow-xl object-cover w-full h-full"
        />

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B2F2F] mb-6 leading-tight">
            Curating Spaces Filled With Soul & Warmth
          </h2>

          <p className="text-[#4F5D4E] mb-8 text-lg leading-relaxed">
            Each piece in our collection is chosen with intention — blending emotion, 
            texture and timeless warmth to elevate every space it enters.
          </p>

          <ul className="space-y-8">
            <li>
              <h3 className="font-semibold text-xl text-[#3B2F2F] flex items-center gap-2">
                <span className="text-[#C6A675] text-2xl">•</span> Curated Valuation Experience
              </h3>
              <p className="text-[#4F5D4E]">
                Insightful assessments to help you understand the story and value behind every artwork.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-xl text-[#3B2F2F] flex items-center gap-2">
                <span className="text-[#C6A675] text-2xl">•</span> Artistic Development & Curation
              </h3>
              <p className="text-[#4F5D4E]">
                We collaborate with artists to refine, present, and elevate their expressions for the world to experience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section;
