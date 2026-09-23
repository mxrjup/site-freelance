import LegalLayout, { LegalTitle, LegalH2, LegalP } from '../../components/LegalLayout';

// Trame d'une page de mentions légales classique : éditeur, concepteur,
// hébergeur. Toutes les valeurs propres à l'entreprise sont laissées en
// placeholders et doivent être remplacées avant la mise en ligne — une
// page publiée avec ses placeholders ne remplit pas l'obligation de
// l'article 6-III de la LCEN.
const EDITEUR = [
  ['Propriétaire', '[[PROPRIETAIRE_NOM]]'],
  ['Statut', '[[FORME_JURIDIQUE]]'],
  ['Adresse', '[[ADRESSE_PRO]]'],
  ['Identifiant SIRET', '[[SIRET]]'],
  ['Code APE', '[[CODE_APE]]'],
  ['E-mail', '[[EMAIL_CONTACT]]'],
  ['Téléphone', '[[TELEPHONE]]'],
  ['Directeur de la publication', '[[DIRECTEUR_PUBLICATION]]'],
  ['TVA', '[[MENTION_TVA]]'],
];

export const metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site [[SITE_DOMAINE]] : identité de l’éditeur, conception et hébergement du site.',
  alternates: { canonical: '/mentions-legales/' },
};

export default function Page() {
  return (
    <LegalLayout lang="fr">
      <LegalTitle>Mentions légales</LegalTitle>

      <LegalP>
        Le site internet [[SITE_DOMAINE]] est la propriété exclusive de [[PROPRIETAIRE_NOM]].
      </LegalP>

      <LegalH2>Éditeur du site</LegalH2>
      <dl className="mt-4 flex flex-col gap-2.5">
        {EDITEUR.map(([label, value]) => (
          <div key={label} className="flex flex-wrap gap-x-2">
            <dt className="font-semibold text-forest dark:text-cream">{label} :</dt>
            <dd className="text-forest/90 dark:text-cream/80">{value}</dd>
          </div>
        ))}
      </dl>

      <LegalH2>Conception du site</LegalH2>
      <LegalP>Conception du site internet : [[CONCEPTEUR_SITE]].</LegalP>

      <LegalH2>Hébergement</LegalH2>
      <LegalP>
        Le site est hébergé par la société [[HEBERGEUR_NOM]], [[HEBERGEUR_ADRESSE]], capital de
        [[HEBERGEUR_CAPITAL]], identifiant [[HEBERGEUR_IDENTIFIANT]], téléphone
        [[HEBERGEUR_TELEPHONE]].
      </LegalP>
    </LegalLayout>
  );
}
