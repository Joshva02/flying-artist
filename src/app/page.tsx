import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/hero";

const Preloader = dynamic(() => import("@/components/Preloader"));
const Gallery = dynamic(() => import("@/components/gallery"));
const About = dynamic(() => import("@/components/About"));
const Exhibitions = dynamic(() => import("@/components/Exhibitions"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const MobileBottomNav = dynamic(() => import("@/components/MobileBottomNav"));

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Exhibitions />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
