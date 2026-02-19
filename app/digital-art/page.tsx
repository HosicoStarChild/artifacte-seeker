"use client";

import Link from "next/link";

const digitalArtPieces = [
  {
    id: "da1",
    name: "Ethereal Bloom",
    artist: "Luna Vasquez",
    price: 12500,
    usd1Price: function() { return this.price; },
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    description: "Mixed media on canvas, 48×60 inches",
  },
  {
    id: "da2",
    name: "Neon Genesis",
    artist: "Kai Tanaka",
    price: 8200,
    usd1Price: function() { return this.price; },
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
    description: "Digital painting, 4K resolution, 1/1 edition",
  },
  {
    id: "da3",
    name: "Fractured Light",
    artist: "Amara Osei",
    price: 18000,
    usd1Price: function() { return this.price; },
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    description: "Generative art, custom algorithm, signed print",
  },
  {
    id: "da4",
    name: "Eternal Light Sculpture",
    artist: "Diego Morales",
    price: 32500,
    usd1Price: function() { return this.price; },
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800",
    description: "3D digital sculpture, AR-compatible NFT",
  },
  {
    id: "da5",
    name: "Chromatic Dreams",
    artist: "Yuki Sato",
    price: 5800,
    usd1Price: function() { return this.price; },
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
    description: "Abstract digital composition, 8K resolution",
  },
  {
    id: "da6",
    name: "Urban Decay Series #7",
    artist: "Marcus Webb",
    price: 14200,
    usd1Price: function() { return this.price; },
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800",
    description: "Photography + digital manipulation, limited edition",
  },
  {
    id: "da7",
    name: "Quantum Veil",
    artist: "Priya Sharma",
    price: 22000,
    usd1Price: function() { return this.price; },
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800",
    description: "AI-assisted generative art, unique token",
  },
  {
    id: "da8",
    name: "Solar Flare",
    artist: "Elena Petrova",
    price: 9500,
    usd1Price: function() { return this.price; },
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800",
    description: "Digital oil painting, exhibition-quality print",
  },
];

export default function DigitalArtPage() {
  return (
    <div className="bg-slate-950 min-h-screen pb-24 md:pb-8">
      {/* Header */}
      <div className="px-4 md:px-8 py-6 border-b border-yellow-600/20">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">
          Curated Collection
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-white mb-2">Digital Art</h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Museum-quality digital artworks tokenized as NFTs on Solana
        </p>
      </div>

      <div className="px-4 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {digitalArtPieces.map((piece) => (
            <div
              key={piece.id}
              className="bg-slate-900 rounded-xl border border-yellow-600/20 overflow-hidden hover:border-yellow-500/40 transition card-hover group"
            >
              <div className="aspect-square overflow-hidden bg-slate-800">
                <img
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">
                  Digital Art
                </span>
                <h3 className="text-white font-semibold mt-2 line-clamp-1">{piece.name}</h3>
                <p className="text-slate-400 text-xs mt-1">by {piece.artist}</p>
                <p className="text-slate-500 text-[10px] mt-2 line-clamp-2">{piece.description}</p>
                <div className="mt-4 pt-4 border-t border-yellow-600/20">
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">Price</p>
                  <p className="text-white font-bold text-lg mb-1">${piece.price.toLocaleString()}</p>
                  <p className="text-yellow-500 text-xs mb-4">{piece.usd1Price.toLocaleString()} USD1</p>
                  <Link
                    href="/auctions"
                    className="block w-full text-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 rounded-lg text-xs font-bold transition touch-action-manipulation touch-target"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
