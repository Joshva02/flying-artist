import dynamic from "next/dynamic";
import SophisticatedNav from "@/components/sophisticated/SophisticatedNav";
import SophisticatedHero from "@/components/sophisticated/SophisticatedHero";

const SophisticatedGallery = dynamic(() => import("@/components/sophisticated/SophisticatedGallery"));
const SophisticatedAbout = dynamic(() => import("@/components/sophisticated/SophisticatedAbout"));
const SophisticatedExhibitions = dynamic(() => import("@/components/sophisticated/SophisticatedExhibitions"));
const SophisticatedContact = dynamic(() => import("@/components/sophisticated/SophisticatedContact"));
const SophisticatedFooter = dynamic(() => import("@/components/sophisticated/SophisticatedFooter"));

export default function SophisticatedPage() {
  return (
    <div style={{ backgroundColor: "#fafafa", color: "#0a0a0a" }}>
      <SophisticatedNav />
      <main>
        <SophisticatedHero />
        <SophisticatedGallery />
        <SophisticatedAbout />
        <SophisticatedExhibitions />
        <SophisticatedContact />
      </main>
      <SophisticatedFooter />
    </div>
  );
}
