import Hero from "../components/Hero";
import PromiseIntro from "../components/PromiseIntro";
import StatsCounter from "../components/StatsCounter";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromiseIntro />
      <StatsCounter />
      <Services />
    </main>
  );
}
