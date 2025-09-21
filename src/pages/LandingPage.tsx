import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { Vortex } from "@/components/ui/vortex";

export default function LandingPage() {
  const animationBaseHue = Math.floor(Math.random() * 360);
  return (
    <div className="scroll-smooth">\
    {/* Fixed background vortex */}
      <div className="fixed inset-0 -z-10">
        <Vortex
          backgroundColor="black"
          rangeY={typeof window !== "undefined" ? window.innerHeight : 800}
          particleCount={500}
          baseHue={120}
          className="w-full h-full"
        />
      </div>
        <section id="hero" className="h-screen">
          <Hero baseHue={animationBaseHue}/>
        </section>
        <section id="about" className="h-screen">
          <About baseHue={animationBaseHue}/>
        </section>
        <section id="project" className="h-screen">
          <Project baseHue={animationBaseHue} />
        </section>
        <section id="contact" className="h-screen">
          <Contact baseHue={animationBaseHue} />
        </section>
      </div>
  );
}