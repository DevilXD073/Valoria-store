import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RankGrid from "@/components/RankGrid";
import Features from "@/components/Features";
import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816]">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Purple Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[150px]" />

        {/* Blue Glow */}
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[140px]" />

        {/* Cyan Glow */}
        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Navbar />

      <Hero />

      <RankGrid />

      <Features />

      <ActionButtons />

      <Footer />
    </main>
  );
}
