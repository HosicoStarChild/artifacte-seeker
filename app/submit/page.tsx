"use client";

import { useState } from "react";

const steps = [
  { icon: "💬", title: "Describe The Asset", desc: "Provide details about your real-world asset including type, condition, and estimated value." },
  { icon: "📤", title: "Upload Proof & Documentation", desc: "Submit certificates, appraisals, photos, and any legal documentation for verification." },
  { icon: "📋", title: "Review And Submit", desc: "Review your submission details and confirm everything is accurate before submitting." },
  { icon: "🔗", title: "Asset Verification", desc: "Our team verifies authenticity, ownership, and documentation of your asset." },
  { icon: "🏛️", title: "Auction Goes Live", desc: "Once verified, your asset NFT is minted on Solana and the auction goes live." },
];

export default function SubmitPage() {
  const [form, setForm] = useState({
    name: "", category: "DIGITAL_ART", description: "", value: "", condition: "", contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 min-h-screen pb-24 md:pb-8">
      {/* Header */}
      <div className="px-4 md:px-8 py-6 border-b border-yellow-600/20">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Submit Asset</p>
        <h1 className="font-serif text-3xl md:text-4xl text-white mb-2">
          Submit Your RWA
        </h1>
        <p className="text-slate-400 text-sm">
          List your real-world assets as NFTs on Solana
        </p>
      </div>

      <div className="px-4 md:px-8 py-6 md:py-8">
        {/* Steps */}
        <div className="mb-10 md:mb-12">
          <div className="relative">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-yellow-600/20" />
            <div className="space-y-6 md:space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-5 relative">
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
        </div>

        {/* Submission Form */}
        {!submitted ? (
          <div className="max-w-2xl">
            <div className="bg-slate-900 rounded-xl border border-yellow-600/20 p-6 md:p-8">
              <h2 className="font-serif text-2xl text-white mb-6">Submit Your Asset</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Asset Name</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-800 border border-yellow-600/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition touch-target"
                    placeholder="e.g. Miami Oceanfront Penthouse"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Category</label>
                  <select
                    value={form.category}
                    onChange={e => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-slate-800 border border-yellow-600/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition touch-target"
                  >
                    <option value="DIGITAL_ART">Digital Art</option>
                    <option value="SPIRITS">Spirits</option>
                    <option value="TCG_CARDS">TCG Cards</option>
                    <option value="SPORTS_CARDS">Sports Cards</option>
                    <option value="WATCHES">Watches</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Description</label>
                  <textarea
                    required rows={4}
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                    className="w-full bg-slate-800 border border-yellow-600/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition resize-none"
                    placeholder="Describe your asset, its history, and any relevant details..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Estimated Value (USD)</label>
                    <input
                      type="text" required
                      value={form.value}
                      onChange={e => setForm({ ...form, value: e.target.value })}
                      className="w-full bg-slate-800 border border-yellow-600/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition touch-target"
                      placeholder="$100,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Condition Grade</label>
                    <input
                      type="text" required
                      value={form.condition}
                      onChange={e => setForm({ ...form, condition: e.target.value })}
                      className="w-full bg-slate-800 border border-yellow-600/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition touch-target"
                      placeholder="e.g. Mint, A+, Museum Grade"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Contact Email</label>
                  <input
                    type="email" required
                    value={form.contact}
                    onChange={e => setForm({ ...form, contact: e.target.value })}
                    className="w-full bg-slate-800 border border-yellow-600/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition touch-target"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Upload Documentation</label>
                  <div className="w-full bg-slate-800 border border-dashed border-yellow-600/30 rounded-lg px-4 py-8 text-center cursor-pointer hover:border-yellow-500/50 transition touch-action-manipulation">
                    <p className="text-slate-400 text-sm">📤 Click to upload or drag and drop</p>
                    <p className="text-slate-500 text-xs mt-1">PDF, PNG, JPG up to 50MB</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 rounded-lg font-bold text-sm transition mt-2 touch-action-manipulation touch-target"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl">
            <div className="bg-slate-900 rounded-xl border border-yellow-600/20 p-8 md:p-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="font-serif text-2xl text-white mb-2">Submission Received</h2>
              <p className="text-slate-400 text-sm mb-6">
                Your asset submission is under review. Our verification team will contact you within 48 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", category: "DIGITAL_ART", description: "", value: "", condition: "", contact: "" }); }}
                className="px-6 py-2.5 bg-slate-800 border border-yellow-600/20 rounded-lg text-white text-sm hover:bg-slate-700 transition touch-action-manipulation touch-target"
              >
                Submit Another Asset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
