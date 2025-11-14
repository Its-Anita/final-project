function Footer() {
  return (
    <footer className="bg-[#3B2F2F] text-[#F4EDE2] py-16 border-t border-[#C6A675]/20 w-full">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10">

        {/* Brand / Logo */}
        <div>
          <h3 className="font-bold text-[#C6A675] text-2xl mb-4">SoulSpace</h3>
          <p className="text-[#E7DFD1] text-sm">
            A contemporary art gallery curating soulful, timeless works from
            Africa and beyond.
          </p>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-semibold mb-3 text-[#C6A675]">Collections</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Modern Abstracts</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Figurative Works</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Photography</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Limited Editions</li>
          </ul>
        </div>

        {/* Artists */}
        <div>
          <h4 className="font-semibold mb-3 text-[#C6A675]">Artists</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Resident Artists</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Guest Curators</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Artist Spotlights</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Submissions</li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-semibold mb-3 text-[#C6A675]">Visit</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Exhibitions</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Studio Tours</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Private Viewings</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Virtual Gallery</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold mb-3 text-[#C6A675]">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Instagram</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">LinkedIn</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Email Us</li>
            <li className="hover:text-[#D4AF37] cursor-pointer transition">Join Mailing List</li>
          </ul>
        </div>

      </div>

      <p className="text-center text-sm mt-10 text-[#E7DFD1] border-t border-[#C6A675]/10 pt-6">
        © SoulSpace Gallery 2025. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
