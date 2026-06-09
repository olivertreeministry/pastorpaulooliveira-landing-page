import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Identity from "@/components/sections/Identity";
import About from "@/components/sections/About";
import Offers from "@/components/sections/Offers";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Identity />
        <About />
        <Offers />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
