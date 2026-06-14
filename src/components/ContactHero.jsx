"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <motion.div
        className="contact-hero__copy"
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1>Racontez-nous<br />votre projet.</h1>
      </motion.div>

      <motion.div
        className="contact-hero__film"
        initial={{ opacity: 0, clipPath: "inset(8% 0 8% 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
        transition={{ duration: 1.25, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <iframe
          src="https://customer-8z1yg93quaaa9ooh.cloudflarestream.com/ba550a7066482fc9f62089ab18bc1ee9/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=true"
          title="L'univers Promise Events"
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="contact-hero__veil" />
        <p>Votre histoire commence ici</p>
      </motion.div>
    </section>
  );
}
