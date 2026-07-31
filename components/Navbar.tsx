"use client";

import Link from "next/link";
import { Store, Globe, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 text-xl shadow-lg shadow-purple-600/30">
            ⚔️
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              ValoriaSMP Store
            </h1>
            <p className="text-xs text-gray-400">
              Premium Ranks
            </p>
          </div>
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.valoriasmp.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-purple-500 hover:bg-purple-500/10 md:flex"
          >
            <Globe size={18} />
            Website
          </a>

          <a
            href="https://discord.gg/PcC4bC69WG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-purple-600/30"
          >
            <MessageCircle size={18} />
            Discord
          </a>

          <div className="hidden rounded-xl border border-white/10 bg-white/5 p-2 md:flex">
            <Store size={18} className="text-white" />
          </div>
        </div>
      </nav>
    </header>
  );
}
