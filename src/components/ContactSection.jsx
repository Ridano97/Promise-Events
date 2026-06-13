"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Gem,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Sparkles,
  Upload,
} from "lucide-react";
import { TransitionLink } from "./RouteTransition";

const services = [
  "Demande en mariage",
  "Bouquet de demande en mariage",
  "Décoration événementielle",
  "Mariage religieux",
  "Mariage",
  "Bouquet de mariée",
  "Anniversaire",
  "Baptême",
  "Prestation photobooth",
  "Location de matériel",
];

const styles = ["Romantique", "Chic & élégant", "Bohème", "Moderne", "Minimaliste", "Luxe"];

function buildMessage(form) {
  const data = new FormData(form);
  const selectedServices = data.getAll("services").join(", ") || "Non précisé";
  const selectedStyles = data.getAll("styles").join(", ") || "Non précisé";

  return [
    "Bonjour Promise Events,",
    "",
    "Je souhaite échanger au sujet d'un projet :",
    `Nom : ${data.get("name") || "Non précisé"}`,
    `Téléphone : ${data.get("phone") || "Non précisé"}`,
    `E-mail : ${data.get("email") || "Non précisé"}`,
    `Type d'événement : ${data.get("eventType") || "Non précisé"}`,
    `Date : ${data.get("eventDate") || "Non précisée"}`,
    `Lieu : ${data.get("location") || "Non précisé"}`,
    `Nombre d'invités : ${data.get("guests") || "Non précisé"}`,
    `Horaire d'installation : ${data.get("setupTime") || "Non précisé"}`,
    `Prestations : ${selectedServices}`,
    `Style : ${selectedStyles}`,
    `Couleurs : ${data.get("colors") || "Non précisées"}`,
    `Budget : ${data.get("budget") || "Non précisé"}`,
    "",
    `Message : ${data.get("message") || "Aucun message complémentaire"}`,
  ].join("\n");
}

export default function ContactSection() {
  const openWhatsApp = (event) => {
    event.preventDefault();
    const message = buildMessage(event.currentTarget);
    window.open(`https://wa.me/33773433824?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const openEmail = (event) => {
    const form = event.currentTarget.closest("form");
    if (!form.reportValidity()) return;
    const message = buildMessage(form);
    window.location.href = `mailto:contact.promiseevents@gmail.com?subject=${encodeURIComponent(
      "Nouvelle demande via le site Promise Events",
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-info" data-reveal>
        <p className="contact-info__kicker">Parlons de votre événement</p>
        <h2 className="display-title">Nous contacter</h2>
        <p className="text-body">
          Remplissez les informations qui vous semblent utiles. Votre demande sera préparée pour
          être envoyée directement à Promise Events.
        </p>
        <dl>
          <div>
            <dt>Téléphone WhatsApp</dt>
            <dd><a href="https://wa.me/33773433824">07 73 43 38 24</a></dd>
          </div>
          <div>
            <dt>E-mail</dt>
            <dd><a href="mailto:contact.promiseevents@gmail.com">contact.promiseevents@gmail.com</a></dd>
          </div>
          <div>
            <dt>Secteur d'intervention</dt>
            <dd>Annemasse · Genève · Lausanne · Annecy</dd>
          </div>
        </dl>

        <div className="contact-identity" data-reveal="image">
          <div>
            <img src="/images/hanna.jpg" alt="Hanna, créatrice de Promise Events" />
            <span>Hanna · Créatrice de Promise Events</span>
          </div>
        </div>
      </div>

      <motion.form
        className="contact-form"
        data-reveal
        id="project-form"
        onSubmit={openWhatsApp}
        style={{ "--reveal-delay": "120ms" }}
        initial={false}
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="form-intro form-wide">
          <span><Sparkles size={18} /></span>
          <div>
            <p className="eyebrow">Conciergerie événementielle</p>
            <h3>Quelques détails suffisent pour commencer.</h3>
          </div>
        </div>
        <label>
          Nom et prénom
          <input type="text" name="name" placeholder="Votre nom complet" required />
        </label>
        <label>
          Téléphone
          <input type="tel" name="phone" placeholder="Votre numéro WhatsApp" required />
        </label>
        <label className="form-wide">
          E-mail
          <input type="email" name="email" placeholder="adresse@email.com" required />
        </label>
        <label>
          Type d'événement
          <input type="text" name="eventType" placeholder="Mariage, demande, anniversaire..." />
        </label>
        <label>
          <span className="label-icon"><Calendar size={16} /> Date de l'événement</span>
          <input type="text" name="eventDate" placeholder="JJ/MM/AAAA" />
        </label>
        <label className="form-wide">
          <span className="label-icon"><MapPin size={16} /> Lieu de réception</span>
          <input type="text" name="location" placeholder="Ville, domaine, adresse..." />
        </label>
        <label>
          Nombre d'invités
          <input type="text" name="guests" placeholder="Ex : 80" />
        </label>
        <label>
          Horaire d'installation souhaité
          <input type="text" name="setupTime" placeholder="Ex : 14 h 00" />
        </label>
        <fieldset className="form-wide choice-field">
          <legend><Heart size={16} /> Prestations souhaitées</legend>
          <div>
            {services.map((service) => (
              <label key={service}>
                <input type="checkbox" name="services" value={service} />
                {service}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="form-wide choice-field">
          <legend><Gem size={16} /> Style et ambiance souhaités</legend>
          <div>
            {styles.map((style) => (
              <label key={style}>
                <input type="checkbox" name="styles" value={style} />
                {style}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="form-wide">
          <span className="label-icon"><Palette size={16} /> Couleurs souhaitées</span>
          <input type="text" name="colors" placeholder="Blanc, rouge, doré, nude..." />
        </label>
        <label className="form-wide file-drop">
          <Upload size={20} />
          <span>Inspirations & photos</span>
          <input type="file" name="inspirations" multiple />
          <small>Vous pourrez joindre vos images directement dans la conversation ouverte.</small>
        </label>
        <label className="form-wide">
          Budget prévu
          <input type="text" name="budget" placeholder="Votre enveloppe idéale" />
        </label>
        <label className="form-wide">
          Informations complémentaires
          <textarea name="message" rows="5" placeholder="Décrivez votre projet, vos envies ou les détails importants à prévoir" />
        </label>
        <label className="form-wide form-consent">
          <input type="checkbox" required />
          <span>
            J'accepte que mes informations soient utilisées pour répondre à ma demande, conformément
            à la <TransitionLink href="/politique-de-confidentialite"> politique de confidentialité</TransitionLink>.
          </span>
        </label>
        <div className="form-actions form-wide">
          <button className="button-primary form-submit" type="submit">
            Envoyer sur WhatsApp <MessageCircle size={17} />
          </button>
          <button className="button-ghost form-submit" onClick={openEmail} type="button">
            Envoyer par e-mail <Mail size={17} />
          </button>
        </div>
      </motion.form>
    </section>
  );
}
