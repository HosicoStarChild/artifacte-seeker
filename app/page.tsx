import { assets, auctions, listings, formatFullPrice } from "@/lib/data";
import AssetCard from "@/components/AssetCard";
import AuctionCard from "@/components/AuctionCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="px-4 pt-6 pb-6 border-b border-yellow-600/20">
        <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">Artifacte</h1>
        <p className="text-slate-400 text-sm md:text-base">Real World Asset Tokenization</p>
      </section>

      {/* Live Auctions */}
      <section className="px-4 md:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white">Live Auctions</h2>
          <Link href="/auctions" className="text-yellow-500 text-sm hover:text-yellow-400 transition font-medium">
            View All →
          </Link>
        </div>
        <div className="flex gap-3 md:gap-5 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x">
          {auctions.slice(0, 4).map((a) => (
            <AuctionCard key={a.id} auction={a} />
          ))}
        </div>
      </section>

      {/* Featured Assets */}
      <section className="px-4 md:px-8 py-6 md:py-8 border-t border-yellow-600/20">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white">Featured RWAs</h2>
          <Link href="/digital-art" className="text-yellow-500 text-sm hover:text-yellow-400 transition font-medium">
            Explore →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assets.slice(0, 3).map((asset) => (
            <div key={asset.id} className="bg-slate-900 rounded-xl border border-yellow-600/20 overflow-hidden hover:border-yellow-500/40 transition">
              <div className="aspect-square overflow-hidden bg-slate-800">
                <img src={asset.image} alt={asset.name} className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm md:text-base mb-1 line-clamp-2">{asset.name}</h3>
                <p className="text-slate-400 text-xs md:text-sm mb-3">{asset.category.replace(/_/g, " ")}</p>
                <p className="text-yellow-500 font-bold text-base md:text-lg">${asset.appraised_value.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Listings */}
      <section className="px-4 md:px-8 py-6 md:py-8 border-t border-yellow-600/20">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white">Recent Listings</h2>
          <Link href="/submit" className="text-yellow-500 text-sm hover:text-yellow-400 transition font-medium">
            Add Asset →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {listings.slice(0, 4).map((l) => (
            <div key={l.id} className="bg-slate-900 rounded-xl border border-yellow-600/20 p-4 flex gap-4 hover:border-yellow-500/40 transition">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img src={l.image} alt={l.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2">{l.name}</h3>
                  <p className="text-slate-400 text-xs line-clamp-1">{l.subtitle}</p>
                </div>
                <p className="text-yellow-500 font-bold text-base">{formatFullPrice(l.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 py-8 md:py-12 border-t border-yellow-600/20">
        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 rounded-2xl border border-yellow-500/30 p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">Ready to Tokenize?</h3>
          <p className="text-slate-300 text-sm md:text-base mb-6">Submit your real world assets for tokenization on Solana</p>
          <Link href="/submit" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold py-3 md:py-4 px-8 rounded-lg transition w-full md:w-auto touch-action-manipulation">
            Submit Asset
          </Link>
        </div>
      </section>
    </div>
  );
}
