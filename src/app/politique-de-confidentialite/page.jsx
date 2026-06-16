import LegalPage from "../../components/LegalPage";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles du site Promise Events.",
  path: "/politique-de-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      intro="Cette politique explique quelles informations peuvent être collectées, leur utilisation et les droits dont vous disposez."
    >
      <section>
        <h2>Responsable du traitement</h2>
        <p>Promise Events, France.</p>
        <p>E-mail : <a href="mailto:contact.promiseevents@gmail.com">contact.promiseevents@gmail.com</a></p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>Lorsque vous utilisez le site ou contactez Promise Events, les données suivantes peuvent être collectées :</p>
        <ul>
          <li>nom et prénom ;</li>
          <li>adresse e-mail et numéro de téléphone ;</li>
          <li>informations relatives à votre événement et transmises via le formulaire ;</li>
          <li>données techniques nécessaires au fonctionnement et à la sécurité du site.</li>
        </ul>
      </section>

      <section>
        <h2>Utilisation des données</h2>
        <p>Les informations collectées permettent de :</p>
        <ul>
          <li>répondre à vos demandes de contact et préparer une proposition ;</li>
          <li>échanger concernant les prestations événementielles et florales ;</li>
          <li>assurer la sécurité, le fonctionnement et l'amélioration du site.</li>
        </ul>
        <p>Promise Events ne vend ni ne loue vos données personnelles à des tiers.</p>
      </section>

      <section>
        <h2>Formulaire et services externes</h2>
        <p>
          Le formulaire prépare un message que vous choisissez ensuite d'envoyer par WhatsApp ou
          par e-mail. Ces services appliquent leurs propres politiques de confidentialité.
        </p>
        <p>
          Les vidéos sont diffusées via Cloudflare Stream. Les liens vers les réseaux sociaux vous
          dirigent vers les plateformes concernées.
        </p>
      </section>

      <section>
        <h2>Absence de paiement en ligne</h2>
        <p>
          Le site Promise Events ne propose aucun paiement en ligne. Aucune donnée bancaire ou
          information de paiement n'est collectée via le site.
        </p>
      </section>

      <section>
        <h2>Hébergement et transferts</h2>
        <p>
          Le site est hébergé par Vercel. Cet hébergeur peut traiter certaines données techniques
          nécessaires à la fourniture, à la sécurité et à la performance du site.
        </p>
        <p>
          Certains prestataires peuvent traiter des données hors de l'Union européenne selon leurs
          propres garanties contractuelles et politiques de confidentialité.
        </p>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p>
          Les données personnelles sont conservées uniquement pendant la durée nécessaire au
          traitement de votre demande, à la relation commerciale ou au respect des obligations
          légales applicables.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez notamment des droits d'accès, de rectification,
          d'effacement, d'opposition et de limitation du traitement.
        </p>
        <p>
          Pour exercer vos droits, contactez
          <a href="mailto:contact.promiseevents@gmail.com"> contact.promiseevents@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>Modification de la politique</h2>
        <p>
          Cette politique peut être mise à jour afin de refléter les évolutions du site, des
          services utilisés ou des obligations légales.
        </p>
      </section>
    </LegalPage>
  );
}
