"use client";

import type { Rank } from "@/data/ranks";
import { ExternalLink } from "lucide-react";

interface RankCardProps {
  rank: Rank;
}

export default function RankCard({ rank }: RankCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(124,58,237,0.35)]">

      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${rank.color} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20`}
      />

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Rank Icon */}
        <div
          className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${rank.color} text-4xl shadow-xl`}
        >
          {rank.icon}
        </div>

        {/* Rank Name */}
        <h3 className="text-3xl font-extrabold text-white">
          {rank.name}
        </h3>

        {/* Price */}
        <div className="mt-5">
          <h4 className="text-4xl font-black text-white">
            {rank.priceINR}
          </h4>

          <p className="mt-2 text-lg text-gray-400">
            {rank.priceUSD}
          </p>
        </div>

        {/* Buy Button */}
        <a
          href={rank.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${rank.color} px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105`}
        >
          Buy Rank
          <ExternalLink size={18} />
        </a>

        <p className="mt-4 text-xs text-gray-500">
          Opens our Discord purchase ticket.
        </p>
      </div>
    </div>
  );
}
