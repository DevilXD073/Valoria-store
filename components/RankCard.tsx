"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import type { Rank } from "@/data/ranks";

interface RankCardProps {
  rank: Rank;
}

export default function RankCard({ rank }: RankCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_45px_rgba(124,58,237,.35)]">

      {/* Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${rank.color} opacity-0 blur-3xl transition duration-300 group-hover:opacity-20`}
      />

      {/* Badge */}
      {rank.badge && (
        <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1 text-xs font-bold text-black shadow-lg">
          {rank.badge}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center">

        {/* Icon */}
        <div
          className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${rank.color} text-4xl shadow-xl`}
        >
          {rank.icon}
        </div>

        {/* Rank */}
        <h2 className="text-3xl font-extrabold text-white">
          {rank.name}
        </h2>

        {/* Price */}
        <div className="mt-5 text-center">
          <h3 className="text-4xl font-black text-white">
            {rank.priceINR}
          </h3>

          <p className="mt-1 text-gray-400">
            {rank.priceUSD}
          </p>
        </div>

        {/* Expandable Perks */}
        <div className="mt-7 w-full">

          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
          >
            <span className="font-semibold text-white">
              View Perks ({rank.perks.length})
            </span>

            {open ? (
              <ChevronUp className="text-white" />
            ) : (
              <ChevronDown className="text-white" />
            )}
          </button>

          {open && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">

              <ul className="space-y-3">
                {rank.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Sparkles
                      size={16}
                      className="text-purple-400"
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4 text-center text-sm text-purple-200">
                🎁 Every rank purchase includes a
                <br />
                <span className="font-bold text-white">
                  Custom Discord Role
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Buy */}
        <a
          href={rank.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${rank.color} px-6 py-4 text-lg font-bold text-white transition duration-300 hover:scale-105 hover:shadow-xl`}
        >
          Buy Rank
          <ExternalLink size={18} />
        </a>

        <p className="mt-4 text-center text-xs text-gray-500">
          Opens our Discord Purchase Ticket
        </p>
      </div>
    </div>
  );
}
