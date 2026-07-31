"use client";

import { Globe, MessageCircle, ArrowRight } from "lucide-react";

export default function ActionButtons() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Website Card */}
        <a
          href="https://www.valoriasmp.fun/"
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
        >
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500">
            <Globe size={30} className="text-white" />
          </div>

          <h3 className="text-3xl font-bold text-white">
            Main SMP Website
          </h3>

          <p className="mt-3 text-gray-400">
            Explore the official ValoriaSMP website for server information,
            updates, features, and more.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition group-hover:gap-3">
            Visit Website
            <ArrowRight size={18} />
          </div>
        </a>

        {/* Discord Card */}
        <a
          href="https://discord.gg/PcC4bC69WG"
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]"
        >
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
            <MessageCircle size={30} className="text-white" />
          </div>

          <h3 className="text-3xl font-bold text-white">
            Join Our Discord
          </h3>

          <p className="mt-3 text-gray-400">
            Need help with a purchase? Join our Discord server and open a
            purchase ticket. Our staff will assist you.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition group-hover:gap-3">
            Join Discord
            <ArrowRight size={18} />
          </div>
        </a>
      </div>
    </section>
  );
}
