import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GrantAI from "@/components/GrantAI";
import BentoGrid from "@/components/BentoGrid";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <BentoGrid />
      <GrantAI />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
}
