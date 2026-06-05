"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function LuxuryParticles() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 45,
      particles: {
        number: { value: 42, density: { enable: true, area: 1100 } },
        color: { value: ["#c6a56a", "#fffdf8", "#8f0d17"] },
        opacity: { value: { min: 0.08, max: 0.28 } },
        size: { value: { min: 1, max: 3.2 } },
        move: {
          enable: true,
          speed: { min: 0.12, max: 0.42 },
          direction: "top",
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: 118,
          color: "#c6a56a",
          opacity: 0.08,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 84, duration: 0.45 },
        },
      },
    }),
    [],
  );

  return (
    <ParticlesProvider init={async (engine) => loadSlim(engine)}>
      <Particles id="promise-particles" className="luxury-particles" options={options} />
    </ParticlesProvider>
  );
}
