import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen pb-24 md:pb-8">
      {/* Header */}
      <div className="px-4 md:px-8 py-6 border-b border-yellow-600/20">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Overview</p>
        <h1 className="font-serif text-3xl md:text-4xl text-white mb-2 leading-tight">
          About Artifacte
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          Tokenizing real-world assets on Solana with verified provenance and transparent auctions
        </p>
      </div>

      <div className="px-4 md:px-8 py-6 md:py-8">

        {/* Curated Real-World Assets */}
        <section className="mb-10 md:mb-16 pt-6 md:pt-8 border-t border-yellow-600/20">
          <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">collection</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">Featured Assets</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl">
            Explore curated real-world assets tokenized as NFTs with transparent, on-chain auctions.
          </p>

          {/* Asset Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
            {[
              { name: "Oakwood Cabinet (1960s)", price: "390 USD1", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600" },
              { name: "Hand Crafted Storage (1954)", price: "390 USD1", img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 rounded-xl border border-yellow-600/20 overflow-hidden hover:border-yellow-500/40 transition card-hover group">
                <div className="aspect-video overflow-hidden bg-slate-800">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm line-clamp-2">{item.name}</h3>
                  <p className="text-yellow-500 text-sm font-bold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-sm mb-6">
            Each asset is verified with documentation, provenance records, and transparent on-chain ownership.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-10 md:mb-12 pt-6 md:pt-8 border-t border-yellow-600/20">
          <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Our Mission</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight">
            Tokenizing Real-World Assets
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl">
            We curate and auction real-world assets as NFTs with verified provenance, transparent auctions, and secure ownership worldwide.
          </p>

          <div className="bg-slate-900 rounded-xl border border-yellow-600/20 p-6 mb-6">
            <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Values</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Trust, transparency, provenance, and secure ownership in every auction. We prioritize fair access and authentic assets for our community.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-10 md:mb-12 pt-6 md:pt-8 border-t border-yellow-600/20">
          <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">key metrics</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">Platform at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { value: "$1B+", label: "Asset value" },
              { value: "$100M+", label: "Volume completed" },
              { value: "10,000+", label: "Active users" },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900 rounded-xl border border-yellow-600/20 p-6 card-hover">
                <p className="text-yellow-500 font-serif text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-slate-300 text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Submit */}
        <section className="pt-6 md:pt-8 border-t border-yellow-600/20">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Submit Your RWA</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl">
            List your real-world assets as NFTs in just a few simple steps.
          </p>

          <div className="relative max-w-2xl">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-yellow-600/20" />
            <div className="space-y-6">
              {[
                { icon: "💬", title: "Describe The Asset", desc: "Provide details and provenance information" },
                { icon: "📤", title: "Upload Documentation", desc: "Submit certificates, appraisals, and photos" },
                { icon: "📋", title: "Review & Submit", desc: "Confirm your submission details" },
                { icon: "🔗", title: "Verification", desc: "Our team verifies authenticity and ownership" },
                { icon: "🏛️", title: "Live Auction", desc: "Your NFT is minted and auction goes live" },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 relative">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-yellow-600/20 flex items-center justify-center flex-shrink-0 z-10 text-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base">{step.title}</h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link href="/submit" className="inline-block mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 rounded-lg font-bold text-sm transition touch-action-manipulation touch-target">
            Submit Asset
          </Link>
        </section>
      </div>
    </div>
  );
}
