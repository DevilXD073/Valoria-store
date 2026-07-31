"use client";

import { Sparkles, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/25 blur-[120px]" />
        <div className="absolute right-20 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur-md">
          <Sparkles size={16} />
          Official ValoriaSMP Store
        </div>

        {/* Title */}
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Upgrade Your
          <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Minecraft Experience
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          Purchase premium ranks to unlock exclusive perks, cosmetic
          features, and stand out on <b>ValoriaSMP</b>.
        </p>

        {/* Features */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
            ⚡ Instant Delivery
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
            🌍 All Currencies Accepted
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
            <ShieldCheck size={18} />
            Secure Payments
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#ranks"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-purple-600/30 transition hover:scale-105"
          >
            View Ranks
          </a>

          <a
            href="https://www.valoriasmp.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Main Website
          </a>
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-sm text-gray-400">
          Need help? Join our Discord and open a purchase ticket.
        </p>
      </div>
    </section>
  );
}
