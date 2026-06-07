import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Conditions générales de vente - Promise Events",
};

export default function CgvPage() {
  return (
    <LegalPage
      eyebrow="Promise Events"
      title="Conditions générales de vente"
      intro="Les présentes conditions encadrent les prestations de décoration événementielle et la location de mobilier proposées en France et en Suisse."
      updated="Mai 2026"
    >
      <section className="legal-notice">
        <p>
          Ces conditions constituent une base de publication. Une validation par un professionnel
          du droit est recommandée avant leur utilisation contractuelle définitive.
        </p>
      </section>

      <section>
        <h2>Identité de l'entreprise</h2>
        <p>Promise Events · Micro-entreprise.</p>
        <p>TVA applicable selon la réglementation en vigueur.</p>
        <p>Contact via le formulaire du site, par téléphone ou par e-mail.</p>
      </section>

      <section>
        <h2>Objet</h2>
        <p>Promise Events propose aux particuliers et aux professionnels :</p>
        <ul>
          <li>la location de mobilier événementiel ;</li>
          <li>des prestations de décoration et de scénographie ;</li>
          <li>des packs décoratifs personnalisés ;</li>
          <li>la livraison, l'installation et la reprise du matériel selon devis.</li>
        </ul>
      </section>

      <section>
        <h2>Devis et réservation</h2>
        <p>Toute demande fait l'objet d'un devis personnalisé, valable pour la durée indiquée.</p>
        <p>
          La réservation devient ferme uniquement après acceptation du devis et versement d'un
          acompte de 30 % du montant total. Promise Events peut refuser une réservation en cas
          d'indisponibilité.
        </p>
      </section>

      <section>
        <h2>Tarifs</h2>
        <p>Les prix sont exprimés en euros et incluent la TVA applicable.</p>
        <p>
          Les frais de livraison, installation, démontage, déplacement et prestations spécifiques
          peuvent être ajoutés au devis. Les tarifs applicables sont ceux du devis validé.
        </p>
      </section>

      <section>
        <h2>Modalités de paiement</h2>
        <p>
          Un acompte de 30 % est exigé lors de la réservation. Le solde doit être réglé avant la
          date de l'événement ou selon les modalités précisées sur le devis.
        </p>
        <p>
          En cas de retard, des pénalités peuvent être appliquées et la prestation peut être
          suspendue ou annulée. Pour les clients professionnels, une indemnité forfaitaire de
          recouvrement peut être exigée conformément au Code de commerce.
        </p>
      </section>

      <section>
        <h2>Caution</h2>
        <p>Une caution est systématiquement demandée pour toute location de mobilier.</p>
        <p>
          Elle peut être conservée partiellement ou totalement en cas de casse, détérioration,
          perte, vol ou matériel rendu incomplet. Toute dégradation dépassant son montant reste à
          la charge du client.
        </p>
      </section>

      <section>
        <h2>Livraison, installation et reprise</h2>
        <p>Promise Events propose la livraison en France et en Suisse selon la zone et les disponibilités.</p>
        <p>
          Le client garantit l'accès au lieu, sa présence ou sa représentation lors de la remise,
          et vérifie l'état du matériel à réception. Tout retard ou accès impossible peut entraîner
          des frais supplémentaires.
        </p>
      </section>

      <section>
        <h2>Utilisation du matériel</h2>
        <p>
          Le matériel loué reste la propriété exclusive de Promise Events. Le client en assure la
          garde et l'utilise conformément à sa destination.
        </p>
        <p>Il est interdit de sous-louer, transformer ou utiliser le matériel dans des conditions susceptibles de l'endommager.</p>
      </section>

      <section>
        <h2>Annulation</h2>
        <h3>Annulation par le client</h3>
        <p>
          L'acompte versé ne peut être remboursé. Selon l'état d'avancement et les frais déjà
          engagés, des frais complémentaires peuvent être facturés.
        </p>
        <h3>Annulation par Promise Events</h3>
        <p>
          En cas de force majeure ou d'impossibilité exceptionnelle, les sommes versées sont
          remboursées sans indemnité supplémentaire.
        </p>
      </section>

      <section>
        <h2>Responsabilité et force majeure</h2>
        <p>
          Promise Events ne peut être tenue responsable des dommages causés par une mauvaise
          utilisation, des retards indépendants de sa volonté ou d'un cas de force majeure.
        </p>
        <p>
          Sont notamment considérés comme cas de force majeure : intempéries, catastrophe naturelle,
          accident, grève, restrictions administratives, panne majeure ou événement imprévisible
          empêchant l'exécution normale de la prestation.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Les créations décoratives, photographies, contenus du site et supports de communication
          restent la propriété exclusive de Promise Events. Toute reproduction sans autorisation
          écrite est interdite.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Les informations collectées sont utilisées uniquement dans le cadre de la relation
          commerciale. Le client peut exercer ses droits d'accès, de rectification ou de
          suppression en contactant Promise Events.
        </p>
      </section>

      <section>
        <h2>Droit applicable et litiges</h2>
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, les parties
          recherchent une solution amiable avant toute procédure. À défaut, les tribunaux
          compétents sont ceux du ressort du siège de Promise Events, sauf disposition légale
          contraire.
        </p>
      </section>
    </LegalPage>
  );
}
