import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Method from "@/sections/Method";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Method />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}