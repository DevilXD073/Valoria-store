"use client";

import { ranks } from "@/data/ranks";
import RankCard from "./RankCard";

export default function RankGrid() {
  return (
    <section
      id="ranks"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
          Premium Ranks
        </span>

        <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
          Choose Your Rank
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Unlock exclusive perks and support the server by purchasing one
          of our premium ranks.
        </p>
      </div>

      {/* Rank Cards */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {ranks.map((rank) => (
          <RankCard key={rank.id} rank={rank} />
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <h3 className="text-2xl font-bold text-white">
          💳 All Currencies Accepted
        </h3>

        <p className="mt-3 text-gray-400">
          Pay securely using your preferred payment method from anywhere
          in the world.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            "INR",
            "USD",
            "EUR",
            "GBP",
            "CAD",
            "AUD",
            "AED",
            "SGD",
            "JPY",
            "More...",
          ].map((currency) => (
            <span
              key={currency}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              {currency}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
