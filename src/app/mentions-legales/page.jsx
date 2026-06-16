import LegalPage from "../../components/LegalPage";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Promise Events.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Les informations essentielles relatives à l'édition, l'hébergement et l'utilisation du site Promise Events."
    >
      <section className="legal-notice">
        <p>
          Avant la publication définitive, Promise Events devra compléter l'adresse du siège et
          son numéro SIRET afin que les mentions légales soient entièrement conformes.
        </p>
      </section>

      <section>
        <h2>Éditeur du site</h2>
        <p><strong>Promise Events</strong> · Micro-entreprise · Décoratrice événementielle.</p>
        <p>Responsable de la publication : Promise Events.</p>
        <p>Instagram : <a href="https://www.instagram.com/promiseevents_/">@promiseevents_</a></p>
        <p>E-mail : <a href="mailto:contact.promiseevents@gmail.com">contact.promiseevents@gmail.com</a></p>
        <p>Téléphone : <a href="tel:+33773433824">07 73 43 38 24</a></p>
        <p>Nom de domaine enregistré auprès de IONOS SE.</p>
        <p>Conception et réalisation du site : Rio Digital Lab.</p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>Le site est hébergé par Vercel Inc.</p>
        <p>440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.</p>
        <p>Site web : <a href="https://vercel.com" rel="noreferrer" target="_blank">vercel.com</a></p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu présent sur le site, notamment les textes, images, logos,
          photographies, vidéos, éléments graphiques et créations, est la propriété exclusive de
          Promise Events, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation, diffusion ou exploitation, totale ou partielle,
          sans autorisation préalable écrite est strictement interdite.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Les informations collectées via le formulaire ou les échanges réalisés depuis le site
          sont utilisées uniquement dans le cadre des prestations proposées par Promise Events.
          Aucune donnée personnelle n'est vendue.
        </p>
        <p>
          Vous pouvez demander l'accès, la modification ou la suppression de vos données en
          écrivant à <a href="mailto:contact.promiseevents@gmail.com">contact.promiseevents@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Le site peut utiliser des technologies strictement nécessaires à son fonctionnement et,
          si elles sont activées ultérieurement, des mesures d'audience. Vous pouvez configurer
          votre navigateur afin de limiter ou refuser les cookies.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          Promise Events s'efforce d'assurer l'exactitude et l'actualité des informations publiées.
          Toutefois, aucune garantie ne peut être apportée concernant leur exhaustivité ou leur
          disponibilité permanente.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Pour toute demande d'information : Promise Events ·
          <a href="mailto:contact.promiseevents@gmail.com"> contact.promiseevents@gmail.com</a> ·
          <a href="tel:+33773433824"> 07 73 43 38 24</a>.
        </p>
      </section>
    </LegalPage>
  );
}
