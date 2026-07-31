"use client";

import {
  ShieldCheck,
  Zap,
  Globe2,
  Headphones,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Ranks are delivered quickly after your purchase is verified.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Safe and trusted payment process for every purchase.",
  },
  {
    icon: CreditCard,
    title: "All Currencies Accepted",
    description: "Pay using INR, USD, EUR, GBP and many other currencies.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Need help? Open a purchase ticket in our Discord server.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          Why Choose ValoriaSMP?
        </span>

        <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
          Premium Experience
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          We make purchasing ranks simple, secure, and fast for every
          player around the world.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(124,58,237,0.25)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
                <Icon size={26} className="text-white" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Banner */}
      <div className="mt-16 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 p-8 backdrop-blur-xl">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Ready to upgrade?
            </h3>

            <p className="mt-2 text-gray-300">
              Purchase your rank today and enjoy exclusive perks on
              ValoriaSMP.
            </p>
          </div>

          <a
            href="#ranks"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-4 font-bold text-white transition hover:scale-105"
          >
            <CheckCircle2 size={20} />
            Browse Ranks
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="https://www.valoriasmp.fun/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          <Globe2 size={18} />
          Main Website
        </a>

        <a
          href="https://discord.gg/PcC4bC69WG"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          <Headphones size={18} />
          Join Discord
        </a>
      </div>
    </section>
  );
}
