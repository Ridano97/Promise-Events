"use client";

import { motion } from "framer-motion";
import { Calendar, Gem, Heart, MapPin, Palette, Send, Sparkles, Upload } from "lucide-react";

export default function ContactSection() {
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

  return (
    <section className="contact-section" id="contact">
      <div className="contact-info" data-reveal>
        <h2 className="display-title">Nous contacter</h2>
        <p className="text-body">
          Merci de remplir ce formulaire afin que nous puissions vous proposer une prestation
          personnalisée selon vos envies et votre budget.
        </p>
        <dl>
          <div>
            <dt>Telephone WhatsApp</dt>
            <dd>07 73 43 38 24</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>contact.promiseevents@gmail.com</dd>
          </div>
          <div>
            <dt>Secteur d'intervention</dt>
            <dd>Annemasse - Genève - Lausanne - Annecy</dd>
          </div>
        </dl>
        <div className="contact-image" data-reveal="image">
          <img src="/images/proposal-red-heart-lake.png" alt="Décoration romantique au bord du lac" />
        </div>
      </div>

      <motion.form
        className="contact-form"
        data-reveal
        style={{ "--reveal-delay": "120ms" }}
        initial={false}
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="form-intro form-wide">
          <span>
            <Sparkles size={18} />
          </span>
          <div>
            <p className="eyebrow">Conciergerie événementielle</p>
            <h3>Racontez-nous l'ambiance, nous imaginons la mise en scène.</h3>
          </div>
        </div>
        <label>
          Nom et prénom
          <input type="text" name="name" placeholder="Votre nom complet" />
        </label>
        <label>
          Téléphone
          <input type="tel" name="phone" placeholder="Votre numéro WhatsApp" />
        </label>
        <label className="form-wide">
          E-mail
          <input type="email" name="email" placeholder="adresse@email.com" />
        </label>
        <label>
          Type d'événement
          <input type="text" name="eventType" placeholder="Mariage, demande, anniversaire..." />
        </label>
        <label>
          <span className="label-icon">
            <Calendar size={16} /> Date de l'événement
          </span>
          <input type="text" name="eventDate" placeholder="JJ/MM/AAAA" />
        </label>
        <label className="form-wide">
          <span className="label-icon">
            <MapPin size={16} /> Lieu de réception
          </span>
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
          <legend>
            <Heart size={16} /> Prestations souhaitées
          </legend>
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
          <legend>
            <Gem size={16} /> Style et ambiance souhaités
          </legend>
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
          <span className="label-icon">
            <Palette size={16} /> Couleurs souhaitées
          </span>
          <input type="text" name="colors" placeholder="Blanc, rouge, doré, nude..." />
        </label>
        <label className="form-wide file-drop">
          <Upload size={20} />
          <span>Inspirations & photos</span>
          <input type="file" name="inspirations" multiple />
          <small>Ajoutez captures Pinterest, exemples de décoration ou images d'ambiance.</small>
        </label>
        <label className="form-wide">
          Budget prévu
          <input type="text" name="budget" placeholder="Votre enveloppe idéale" />
        </label>
        <label className="form-wide">
          Informations complémentaires
          <textarea name="message" rows="5" placeholder="Décrivez votre projet, vos envies ou les détails importants à prévoir" />
        </label>
        <button className="button-primary form-submit" type="button">
          Envoyer <Send size={17} />
        </button>
      </motion.form>
    </section>
  );
}
