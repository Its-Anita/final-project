function Testimonial() {
return (
<section className="w-full bg-neutral-50 py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-4xl font-bold text-gray-900 mb-6">What People Are Saying About Us</h2>


<div className="flex items-center gap-4 mb-4">
<img
src="/your-client-image.jpg"
alt="client"
className="w-14 h-14 rounded-full object-cover"
/>
<div>
<h3 className="font-semibold text-gray-900">Alicia M.</h3>
<p className="text-gray-500 text-sm">Art Collector</p>
</div>
</div>

<p className="text-gray-700 leading-relaxed max-w-lg">
"Their curation is flawless — each piece feels intentional, soulful, and timeless. Perfect for anyone looking to elevate their home or workspace with fine art."
</p>


<div className="flex gap-4 mt-6">
<button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition">
←
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition">
→
</button>
</div>
</div>


<div>
<img
src="/your-gallery-room.jpg"
alt="gallery room"
className="rounded-xl shadow-lg w-full object-cover"
/>
</div>
</section>
);
}
export default Testimonial;