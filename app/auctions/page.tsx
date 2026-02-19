"use client";

import { useState } from "react";
import { auctions, listings, formatFullPrice } from "@/lib/data";
import AuctionCard from "@/components/AuctionCard";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { createTransferInstruction, getAssociatedTokenAddress } from "@solana/spl-token";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((m) => m.WalletMultiButton),
  { ssr: false }
);

const TREASURY = new PublicKey("DDSpvAK8DbuAdEaaBHkfLieLPSJVCWWgquFAA3pvxXoX");
const TOKENS: Record<string, { mint: PublicKey; decimals: number; label: string }> = {
  USD1: { mint: new PublicKey("USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB"), decimals: 6, label: "USD1" },
  USDC: { mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"), decimals: 6, label: "USDC" },
};

export default function AuctionsPage() {
  const [tab, setTab] = useState<"fixed" | "live">("fixed");
  const { publicKey, sendTransaction, connected } = useWallet();
  const { connection } = useConnection();
  const [buyingId, setBuyingId] = useState<string | null>(null);
  const [currency, setCurrency] = useState<"USD1" | "USDC">("USD1");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const handleBuyNow = async (listingId: string, priceUsd: number) => {
    if (!connected || !publicKey) {
      showToast("Please connect your wallet first", "error");
      return;
    }

    setBuyingId(listingId);
    try {
      const token = TOKENS[currency];
      const tokenAmount = BigInt(Math.round(priceUsd * 10 ** token.decimals));

      const senderAta = await getAssociatedTokenAddress(token.mint, publicKey);
      const treasuryAta = await getAssociatedTokenAddress(token.mint, TREASURY);

      const tx = new Transaction().add(
        createTransferInstruction(
          senderAta,
          treasuryAta,
          publicKey,
          tokenAmount,
        )
      );

      const sig = await sendTransaction(tx, connection);
      await connection.confirmTransaction(sig, "confirmed");

      showToast(`✓ Purchase successful! TX: ${sig.slice(0, 12)}...`, "success");
    } catch (err: any) {
      showToast(`Error: ${err.message?.slice(0, 80) || "Transaction failed"}`, "error");
    } finally {
      setBuyingId(null);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen pb-24 md:pb-8">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 left-4 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 z-50 px-4 md:px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${
          toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}>
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="px-4 md:px-8 py-6 border-b border-yellow-600/20">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Marketplace</p>
        <h1 className="font-serif text-3xl md:text-4xl text-white mb-2">Auctions</h1>
        <p className="text-slate-400 text-sm">Buy or bid on real-world assets tokenized on Solana</p>
      </div>

      <div className="px-4 md:px-8 py-6 md:py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-900 rounded-lg p-1 w-fit touch-action-manipulation">
          <button
            onClick={() => setTab("fixed")}
            className={`px-4 md:px-5 py-2.5 rounded-md text-sm font-medium transition touch-target ${
              tab === "fixed"
                ? "bg-yellow-500 text-slate-900"
                : "text-slate-400 hover:text-slate-300"
            }`}
          >
            Fixed Price
          </button>
          <button
            onClick={() => setTab("live")}
            className={`px-4 md:px-5 py-2.5 rounded-md text-sm font-medium transition touch-target ${
              tab === "live"
                ? "bg-yellow-500 text-slate-900"
                : "text-slate-400 hover:text-slate-300"
            }`}
          >
            Live Auctions
          </button>
        </div>

        {/* Currency Selector */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6 touch-action-manipulation">
          <span className="text-slate-500 text-xs uppercase tracking-wider">Pay with:</span>
          <div className="flex gap-1 bg-slate-900 rounded-lg p-1 w-fit">
            {(["USD1", "USDC"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-4 py-2 rounded-md text-xs font-medium transition touch-target ${
                  currency === c ? "bg-yellow-500 text-slate-900" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Fixed Price Tab */}
        {tab === "fixed" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {listings.map((l) => {
              const usd1Amount = l.price.toLocaleString();
              return (
                <div key={l.id} className="bg-slate-900 rounded-xl border border-yellow-600/20 overflow-hidden hover:border-yellow-500/40 transition card-hover group">
                  <div className="aspect-video md:aspect-[4/3] overflow-hidden bg-slate-800">
                    <img
                      src={l.image}
                      alt={l.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold tracking-widest text-yellow-500 uppercase">Fixed Price</span>
                    <h3 className="text-white font-semibold mt-2 line-clamp-2">{l.name}</h3>
                    <p className="text-slate-400 text-xs mt-1 line-clamp-1">{l.subtitle}</p>
                    <div className="mt-4 pt-4 border-t border-yellow-600/20">
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-1">Price</p>
                      <p className="text-white font-bold text-lg mb-1">{formatFullPrice(l.price)}</p>
                      <p className="text-yellow-500 text-xs mb-4">{usd1Amount} {currency}</p>
                      {connected ? (
                        <button
                          onClick={() => handleBuyNow(l.id, l.price)}
                          disabled={buyingId === l.id}
                          className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-slate-900 rounded-lg text-sm font-bold transition touch-action-manipulation touch-target"
                        >
                          {buyingId === l.id ? "Processing..." : "Buy Now"}
                        </button>
                      ) : (
                        <WalletMultiButton className="!bg-yellow-500 hover:!bg-yellow-600 !rounded-lg !h-10 !text-sm !font-medium !w-full" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Live Auctions Tab */}
        {tab === "live" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {auctions.map((a) => (
              <AuctionCard key={a.id} auction={a} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
