export interface Rank {
  id: number;
  name: string;
  priceINR: string;
  priceUSD: string;
  icon: string;
  color: string;
  buyLink: string;
}

export const ranks: Rank[] = [
  {
    id: 1,
    name: "VIP",
    priceINR: "₹45",
    priceUSD: "$0.52",
    icon: "👑",
    color: "from-emerald-500 to-green-400",
    buyLink: "https://discord.gg/PcC4bC69WG",
  },
  {
    id: 2,
    name: "VIP+",
    priceINR: "₹75",
    priceUSD: "$0.86",
    icon: "💠",
    color: "from-sky-500 to-cyan-400",
    buyLink: "https://discord.gg/PcC4bC69WG",
  },
  {
    id: 3,
    name: "MVP",
    priceINR: "₹105",
    priceUSD: "$1.21",
    icon: "⭐",
    color: "from-purple-500 to-fuchsia-500",
    buyLink: "https://discord.gg/PcC4bC69WG",
  },
  {
    id: 4,
    name: "MVP+",
    priceINR: "₹155",
    priceUSD: "$1.78",
    icon: "🌟",
    color: "from-orange-500 to-amber-400",
    buyLink: "https://discord.gg/PcC4bC69WG",
  },
  {
    id: 5,
    name: "Valoria+",
    priceINR: "₹200",
    priceUSD: "$2.30",
    icon: "💎",
    color: "from-indigo-500 to-violet-500",
    buyLink: "https://discord.gg/PcC4bC69WG",
  },
  {
    id: 6,
    name: "Daku+",
    priceINR: "₹200",
    priceUSD: "$2.30",
    icon: "🔥",
    color: "from-red-500 to-orange-500",
    buyLink: "https://discord.gg/PcC4bC69WG",
  },
];
