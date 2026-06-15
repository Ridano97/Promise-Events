"use client";

import { motion } from "framer-motion";
import CloudflareStream from "./CloudflareStream";

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
        <CloudflareStream
          videoId="ba550a7066482fc9f62089ab18bc1ee9"
          title="L'univers Promise Events"
        />
        <div className="contact-hero__veil" />
        <p>Votre histoire commence ici</p>
      </motion.div>
    </section>
  );
}
