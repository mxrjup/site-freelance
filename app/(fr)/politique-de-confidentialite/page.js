import LegalLayout, {
  LegalTitle,
  LegalH2,
  LegalH3,
  LegalP,
  LegalLink,
} from '../../components/LegalLayout';

// Structure reprise d'une politique de confidentialité classique, mais
// réécrite sur la configuration réelle de ce site : formulaire PostTo,
// mesure d'audience GoatCounter sans cookie, aucun bandeau de consentement,
// aucune newsletter. Les valeurs propres à l'entreprise sont en
// placeholders et doivent être remplacées avant la mise en ligne.

const DROITS = [
  [
    'Droit d’accès, de rectification et d’effacement',
    'vous pouvez obtenir une copie des données qui vous concernent, demander leur correction si elles sont inexactes ou incomplètes, et demander leur suppression.',
  ],
  [
    'Droit à la limitation du traitement',
    'vous pouvez demander le gel temporaire de l’utilisation de vos données, notamment le temps qu’une contestation soit examinée.',
  ],
  [
    'Droit d’opposition',
    'vous pouvez vous opposer au traitement de vos données, sauf motifs légitimes et impérieux pouvant prévaloir sur vos intérêts, droits et libertés.',
  ],
  [
    'Droit à la portabilité',
    'vous pouvez recevoir les données que vous avez fournies dans un format structuré et lisible par machine, ou demander leur transfert à un autre responsable de traitement.',
  ],
  [
    'Droit de ne pas faire l’objet d’une décision automatisée',
    'aucune décision produisant des effets juridiques à votre égard n’est prise sur ce site sur le seul fondement d’un traitement automatisé, et aucun profilage n’y est réalisé.',
  ],
  [
    'Droit de définir le sort de vos données après votre décès',
    'conformément à la loi n° 2016-1321 du 7 octobre 2016, vous pouvez définir des directives générales ou particulières sur la conservation, l’effacement et la communication de vos données après votre mort.',
  ],
];

const NAVIGATEURS = [
  ['Chrome', 'https://support.google.com/chrome/answer/95647?hl=fr'],
  [
    'Firefox',
    'https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur',
  ],
  ['Safari', 'https://support.apple.com/fr-fr/guide/safari/sfri11471/mac'],
  [
    'Edge',
    'https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
  ],
];

export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Comment le site [[SITE_DOMAINE]] traite vos données personnelles : finalités, durée de conservation, sous-traitants, vos droits et l’absence de cookies.',
  alternates: { canonical: '/politique-de-confidentialite/' },
};

export default function Page() {
  return (
    <LegalLayout lang="fr">
      <LegalTitle>Politique de confidentialité</LegalTitle>

      <LegalP>
        La présente politique de confidentialité définit et vous informe de la manière dont
        [[NOM_COMMERCIAL]] utilise et protège les informations que vous transmettez, le cas échéant,
        lorsque vous utilisez le présent site accessible à l’adresse [[SITE_URL]].
      </LegalP>
      <LegalP>
        Cette politique est susceptible d’être modifiée ou complétée à tout moment, notamment en vue
        de se conformer à toute évolution législative, réglementaire, jurisprudentielle ou
        technologique. La date de sa dernière mise à jour figure ci-dessous ; nous vous invitons à
        la consulter régulièrement.
      </LegalP>
      <LegalP>
        <strong className="font-semibold text-forest dark:text-cream">
          Dernière mise à jour : [[DATE_MAJ]]
        </strong>
      </LegalP>

      <LegalH2>1. Données personnelles</LegalH2>
      <LegalP>
        D’une manière générale, il vous est possible de visiter ce site sans communiquer aucune
        information personnelle vous concernant. Vous n’êtes en aucune manière obligé de transmettre
        ces informations ; en cas de refus, votre demande ne pourra simplement pas être traitée.
      </LegalP>
      <LegalP>
        Le formulaire de contact du site collecte votre nom, votre numéro de téléphone, votre
        adresse e-mail, votre type d’activité et la description de votre projet. Seule l’adresse
        e-mail est obligatoire : elle est nécessaire pour vous répondre.
      </LegalP>
      <LegalP>
        Conformément au Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection des données
        (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, [[NOM_COMMERCIAL]]
        vous informe des points suivants.
      </LegalP>

      <LegalH3>1.1 Identité du responsable du traitement</LegalH3>
      <LegalP>
        Le responsable du traitement est [[PROPRIETAIRE_NOM]], [[ADRESSE_PRO]], immatriculé sous le
        numéro SIRET [[SIRET]]. E-mail : [[EMAIL_CONTACT]]. Téléphone : [[TELEPHONE]]. Le site est
        hébergé par la société [[HEBERGEUR_NOM]], [[HEBERGEUR_ADRESSE]].
      </LegalP>

      <LegalH3>1.2 Finalités du traitement et bases légales</LegalH3>
      <LegalP>
        Vos informations personnelles sont traitées pour les finalités suivantes : (a) répondre aux
        demandes adressées via le formulaire de contact et établir, le cas échéant, un devis — base
        légale : l’exécution de mesures précontractuelles prises à votre demande (article 6.1.b du
        RGPD) ; (b) mesurer la fréquentation du site de façon agrégée afin d’en améliorer le contenu
        — base légale : l’intérêt légitime à connaître l’audience du site (article 6.1.f du RGPD).
      </LegalP>
      <LegalP>
        Aucune donnée n’est utilisée à des fins de prospection commerciale, de newsletter ou de
        publicité, et aucune donnée n’est vendue.
      </LegalP>

      <LegalH3>1.3 Destinataires</LegalH3>
      <LegalP>
        Seul [[NOM_COMMERCIAL]] est destinataire de vos informations personnelles. Celles-ci ne sont
        jamais transmises à un tiers, à l’exception des sous-traitants techniques mentionnés au
        point 1.8, qui agissent sur instruction et pour le seul fonctionnement du site.
      </LegalP>

      <LegalH3>1.4 Mesures de sécurité</LegalH3>
      <LegalP>
        Ce site est un site statique : il ne comporte ni base de données, ni espace de connexion, et
        aucune information personnelle n’y est stockée. Les échanges entre votre navigateur et le
        site sont chiffrés par un certificat TLS (HTTPS). Les messages envoyés via le formulaire
        sont acheminés par le prestataire mentionné au point 1.8, puis conservés dans la messagerie
        professionnelle de [[NOM_COMMERCIAL]], protégée par un mot de passe et une authentification
        à deux facteurs.
      </LegalP>

      <LegalH3>1.5 Durée de conservation</LegalH3>
      <LegalP>
        Vos informations personnelles sont conservées uniquement pour le temps correspondant à la
        finalité de la collecte, et au maximum [[DUREE_CONSERVATION_PROSPECTS]] à compter de notre
        dernier échange si votre demande n’aboutit pas. En cas de collaboration, elles sont
        conservées pendant la durée de la relation contractuelle, puis archivées le temps des
        obligations légales de conservation, notamment comptables et fiscales.
      </LegalP>

      <LegalH3>1.6 Vos droits</LegalH3>
      <LegalP>
        Conformément à la réglementation applicable au traitement des données à caractère personnel,
        vous disposez des droits suivants.
      </LegalP>
      <ul className="mt-4 flex flex-col gap-3">
        {DROITS.map(([term, text]) => (
          <li key={term} className="leading-relaxed text-forest/90 dark:text-cream/80">
            <strong className="font-semibold text-forest dark:text-cream">{term}</strong> : {text}
          </li>
        ))}
      </ul>
      <LegalP>
        Pour exercer ces droits, il vous suffit d’écrire à [[EMAIL_CONTACT]] en précisant votre
        demande. Si votre message provient de l’adresse e-mail que vous avez utilisée pour nous
        contacter, aucun justificatif d’identité ne vous sera demandé ; dans le cas contraire, et
        uniquement en cas de doute raisonnable sur votre identité, un justificatif pourra vous être
        demandé, conformément aux recommandations de la CNIL. Les demandes manifestement infondées
        ou excessives, notamment par leur caractère répétitif, peuvent faire l’objet d’un refus
        motivé.
      </LegalP>

      <LegalH3>1.7 Délais de réponse</LegalH3>
      <LegalP>
        [[NOM_COMMERCIAL]] s’engage à répondre à votre demande dans un délai d’un mois à compter de
        sa réception. Ce délai peut être prolongé de deux mois si la demande est complexe ou si
        plusieurs demandes sont en cours, auquel cas vous en serez informé.
      </LegalP>

      <LegalH3>1.8 Sous-traitants et transferts hors Union européenne</LegalH3>
      <LegalP>
        Pour faire fonctionner le site, [[NOM_COMMERCIAL]] a recours aux sous-traitants suivants :
      </LegalP>
      <ul className="mt-4 flex list-disc flex-col gap-2 pl-5">
        <li className="leading-relaxed text-forest/90 dark:text-cream/80">
          PostTo, pour l’acheminement des messages envoyés via le formulaire de contact — serveurs
          situés dans l’Union européenne ;
        </li>
        <li className="leading-relaxed text-forest/90 dark:text-cream/80">
          GoatCounter, pour la mesure d’audience sans cookie — [[GOATCOUNTER_LOCALISATION]] ;
        </li>
        <li className="leading-relaxed text-forest/90 dark:text-cream/80">
          [[HEBERGEUR_NOM]], pour l’hébergement du site — [[HEBERGEUR_PAYS]].
        </li>
      </ul>
      <LegalP>
        [[NOM_COMMERCIAL]] s’est préalablement assuré de la mise en œuvre par ces prestataires de
        garanties adéquates et du respect de conditions strictes en matière de confidentialité,
        d’usage et de protection des données. Aucune donnée n’est transférée en dehors de l’Espace
        économique européen ou d’un pays reconnu comme offrant un niveau de protection adéquat par
        la Commission européenne.
      </LegalP>

      <LegalH3>1.9 Réclamation auprès de l’autorité compétente</LegalH3>
      <LegalP>
        Si vous considérez que [[NOM_COMMERCIAL]] ne respecte pas ses obligations au regard de vos
        informations personnelles, vous pouvez adresser une réclamation à l’autorité compétente. En
        France, il s’agit de la CNIL, que vous pouvez saisir en ligne :{' '}
        <LegalLink href="https://www.cnil.fr/fr/plaintes">cnil.fr/fr/plaintes</LegalLink>.
      </LegalP>

      <LegalH2>2. Politique relative aux cookies</LegalH2>

      <LegalH3>2.1 Ce site ne dépose aucun cookie</LegalH3>
      <LegalP>
        Ce site ne dépose aucun cookie sur votre terminal : ni cookie de mesure d’audience, ni
        cookie publicitaire, ni cookie de réseau social. C’est la raison pour laquelle aucune
        bannière de consentement ne vous est présentée à votre arrivée : il n’y a rien à accepter ni
        à refuser.
      </LegalP>
      <LegalP>
        Le site utilise uniquement le stockage local de votre navigateur (localStorage) pour
        mémoriser votre préférence d’affichage entre le thème clair et le thème sombre. Cette
        information reste sur votre appareil, n’est transmise à personne et ne permet pas de vous
        identifier. Vous pouvez la supprimer à tout moment en effaçant les données de site de votre
        navigateur.
      </LegalP>

      <LegalH3>2.2 Mesure d’audience sans cookie</LegalH3>
      <LegalP>
        La fréquentation du site est mesurée avec GoatCounter, un outil de statistiques qui ne
        dépose aucun cookie, n’enregistre pas votre adresse IP en clair, n’utilise aucun identifiant
        publicitaire et ne permet pas de vous suivre d’un site à l’autre. Les statistiques produites
        (pages vues, provenance, type d’appareil) sont agrégées et ne permettent pas de vous
        identifier.
      </LegalP>
      <LegalP>
        Conformément aux recommandations de la CNIL, une mesure d’audience strictement limitée à
        l’évaluation du site, sans recoupement avec d’autres traitements ni suivi de la navigation
        entre sites, est dispensée du recueil préalable de votre consentement.
      </LegalP>

      <LegalH3>2.3 Paramétrage de votre navigateur</LegalH3>
      <LegalP>
        Bien qu’aucun cookie ne soit déposé ici, votre navigateur vous permet à tout moment de
        consulter, de bloquer ou de supprimer les cookies déposés par les sites que vous visitez :{' '}
        {NAVIGATEURS.map(([name, href], i) => (
          <span key={name}>
            {i > 0 && ', '}
            <LegalLink href={href}>{name}</LegalLink>
          </span>
        ))}
        . Pour aller plus loin, la CNIL met à disposition une page dédiée :{' '}
        <LegalLink href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser">
          cnil.fr/fr/cookies-les-outils-pour-les-maitriser
        </LegalLink>
        .
      </LegalP>
      <LegalP>
        Pour toute question relative à la présente politique, vous pouvez écrire à
        [[EMAIL_CONTACT]].
      </LegalP>
    </LegalLayout>
  );
}
