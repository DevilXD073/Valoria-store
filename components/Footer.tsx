import { Globe, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent">
              ⚔️ ValoriaSMP Store
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-400">
              Official ValoriaSMP Store. Purchase premium ranks securely and
              support the server.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.valoriasmp.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-blue-500 hover:bg-blue-500/10"
            >
              <Globe size={18} />
              Website
            </a>

            <a
              href="https://discord.gg/PcC4bC69WG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105"
            >
              <MessageCircle size={18} />
              Discord
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">ValoriaSMP</span>.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with
            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />
            for the ValoriaSMP Community
          </p>
        </div>
      </div>
    </footer>
  );
}
