import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import BentoGrid from "@/components/BentoGrid";
import GrantAI from "@/components/GrantAI";
import GuidesBanner from "@/components/GuidesBanner";
import Testimonials from "@/components/Testimonials";
import LocalPartners from "@/components/LocalPartners";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <section id="process">
        <Process />
      </section>
      <BentoGrid />
      <GrantAI />
      <GuidesBanner />
      <Testimonials />
      <LocalPartners />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
}
