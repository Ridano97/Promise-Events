import Hero from "../components/Hero";
import PromiseIntro from "../components/PromiseIntro";
import StatsCounter from "../components/StatsCounter";
import Services from "../components/Services";
import ScrollExperience from "../components/ScrollExperience";
import Story from "../components/Story";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromiseIntro />
      <StatsCounter />
      <Services />
      <ScrollExperience />
      <Story />
      <Gallery />
      <ContactSection />
    </main>
  );
}
