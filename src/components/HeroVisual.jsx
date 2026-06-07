"use client";

import Tilt from "react-parallax-tilt";

export default function HeroVisual() {
  return (
    <Tilt
      className="hero-visual"
      glareEnable
      glareMaxOpacity={0.16}
      glareColor="#fffdf8"
      glarePosition="all"
      perspective={1200}
      scale={1.01}
      tiltMaxAngleX={4}
      tiltMaxAngleY={5}
      transitionSpeed={1400}
    >
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-luxe-glow" aria-hidden="true" />
      <img
        src="/images/mariage2.png"
        alt="Demande en mariage romantique au bord du lac"
        data-parallax="0.18"
      />
      <div className="hero-caption">
        <span>Promise Event</span>
        <p>Décors floraux, demandes en mariage et événements sur mesure.</p>
      </div>
    </Tilt>
  );
}
