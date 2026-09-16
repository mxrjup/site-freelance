import { headerText } from './headerText';

export const languages = ['fr', 'en'];

export const dict = {
  fr: {
    header: headerText.fr,
    hero: {
      badge: 'Développeur web à Montpellier',
      h1: 'Un site clair, rapide et respectueux de la planète.',
      paragraph:
        "Je crée le site de votre activité de A à Z : simple pour vos clients, visible sur Google, hébergé sur des serveurs alimentés en énergie renouvelable. Vous n'avez rien de technique à gérer.",
      ctaPrimary: 'Parlons de votre projet',
      ctaSecondary: 'Voir les offres et les prix',
      checklist: ['Réponse sous 24 h', 'Hébergement vert', 'Premier échange gratuit'],
      studentLine1: 'Étudiant ingénieur',
      studentLine2: 'Polytech Montpellier',
      portraitAlt: 'Portrait de Marius, développeur web freelance à Montpellier',
    },
    whyMe: {
      eyebrow: 'Pourquoi Moi',
      h2: 'Pourquoi me confier votre site',
      paragraph:
        "La rigueur d'une formation d'ingénieur, la disponibilité d'un indépendant et un interlocuteur unique du début à la fin.",
      items: [
        {
          title: 'Un site fait pour vous',
          body: "Pas de template recyclé. Votre site est construit à partir de votre métier, de vos clients et de ce que vous voulez qu'ils fassent en arrivant.",
        },
        {
          title: 'Impeccable sur téléphone',
          body: "Votre site est responsive : il s'adapte à chaque écran. Aujourd'hui plus de la moitié du trafic web provient du mobile, il est donc important d'avoir un site adapté.",
        },
        {
          title: 'Trouvable sur Google',
          body: 'Le référencement local, le SEO, est intégré dès le premier jour : quand on cherche votre activité à Montpellier, vous apparaissez.',
        },
      ],
    },
    engagement: {
      eyebrow: 'Engagement',
      h2: 'Un web plus sobre, concrètement',
      paragraph:
        "L'écologie n'est pas une mention en bas de page. C'est une façon de construire : ce qui est inutile n'est pas là, et ce qui reste tourne sur une énergie propre.",
      items: [
        {
          title: 'Hébergement vert',
          body: 'Vos pages sont hébergées chez Infomaniak, en Europe, dans des datacenters alimentés par des énergies renouvelables.',
        },
        {
          title: 'Des pages légères',
          body: "Rien d'inutile : pas de scripts superflus, pas d'images trop lourdes. Un site sobre consomme moins et se charge plus vite. Vos visiteurs le sentent aussi !",
        },
        {
          title: "L'expérience du terrain",
          body: 'Quatre mois de stage comme développeur chez Infomaniak, au cœur de leur infrastructure écologique. Je connais leurs outils de l’intérieur.',
        },
      ],
    },
    projects: {
      eyebrow: 'Réalisations',
      h2: 'Trois sites, trois besoins',
      paragraph: "Trois sites en ligne, chacun parti d'un besoin précis. Rien de recyclé.",
      items: [
        {
          tag: 'Conseil indépendant',
          title: 'Via Orientation',
          body: "Site d'une conseillère d'orientation indépendante : son accompagnement présenté clairement, et une prise de contact qui va droit au but.",
        },
        {
          tag: 'Restaurant',
          title: 'Hakko',
          body: "Site d'un restaurant végétarien à Montpellier : la carte, les horaires et l'adresse trouvés en deux secondes depuis un téléphone.",
        },
        {
          tag: 'Laboratoire',
          title: 'Mxrjup',
          body: "Mon site personnel, volontairement expérimental : le terrain où je teste des idées avant d'en garder les meilleures pour mes clients.",
          imageAlt: 'Aperçu du site personnel Mxrjup',
          linkLabel: 'mxrjup.fun',
        },
      ],
    },
    pricing: {
      eyebrow: 'Offres',
      h2: 'Deux formules, pas de surprise',
      paragraph:
        "La création du site seule, ou la même création avec l'hébergement et la maintenance en plus.",
      planA: {
        title: 'Création de site',
        body: 'Votre site conçu et codé sur mesure, livré prêt à recevoir vos premiers visiteurs. Vous restez libre de gérer la suite comme vous voulez.',
        price: 'à partir de 500 €',
        priceNote: 'une seule fois',
        features: [
          'Design épuré et professionnel',
          'Responsive : adapté à tous les écrans',
          'Référencement local (SEO) intégré',
          'Pages légères et rapides à charger',
        ],
        cta: 'Demander un devis',
      },
      planB: {
        badge: 'Recommandé',
        title: 'Pack Sérénité',
        body: "La même création de site, plus tout ce qui le fait tourner ensuite. Vous n'avez plus rien à surveiller.",
        price: 'à partir de 500 € puis 100 €/an',
        priceNote: 'la création, puis le forfait annuel tout compris',
        features: [
          'Tout le contenu de la formule Création de site',
          'Nom de domaine inclus',
          'Hébergement vert Infomaniak',
          'Site sécurisé (certificat SSL)',
          'Mises à jour et petites modifications',
          'Sauvegardes régulières',
        ],
        cta: 'Parler du Pack Sérénité',
      },
    },
    faq: {
      eyebrow: 'Questions',
      h2: "Les questions qu'on me pose",
      paragraph:
        "Sans jargon. Si la vôtre n'y est pas, elle a sa place dans le formulaire plus bas.",
      items: [
        {
          q: 'Je peux modifier mon site moi-même ?',
          a: "Oui, si vous le souhaitez. Je peux mettre en place un espace simple pour changer vos textes, vos photos ou vos horaires, sans toucher à quoi que ce soit de technique. Et si vous préférez ne pas y penser, je m'en occupe pour vous jusqu'à 3 fois après la mise en ligne.",
        },
        {
          q: 'Combien de temps faut-il pour avoir mon site ?',
          a: "Comptez deux à quatre semaines pour un site vitrine, à partir du moment où j'ai vos textes et vos photos. On fixe la date ensemble dès le premier échange, et je vous présente le site une fois qu'il est prêt à être relu.",
        },
        {
          q: "Pouvez-vous reprendre un site que j'ai déjà ?",
          a: "Oui. On regarde ensemble ce qui existe : parfois quelques corrections suffisent, parfois il vaut mieux repartir d'une base propre.",
        },
        {
          q: 'Que se passe-t-il après la mise en ligne ?',
          a: "Je reste joignable. Le Pack Sérénité couvre le nom de domaine, l'hébergement vert, le certificat de sécurité, les sauvegardes et les mises à jour : il n'y a rien à surveiller de votre côté.",
        },
      ],
      noQuestion: "Votre question n'est pas dans la liste ?",
      ctaLabel: 'Posez-la ici',
    },
    contact: {
      eyebrow: 'Contact',
      h2: 'Parlons de votre projet',
      paragraph:
        "Décrivez votre activité en quelques lignes. Je vous réponds sous 24 h avec une première idée de ce qu'on pourrait faire, sans engagement.",
      facts: [
        'Réponse sous 24 h',
        'Montpellier et alentours',
        'Premier échange gratuit, sans engagement',
      ],
      form: {
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom',
        phoneLabel: 'Téléphone',
        phonePlaceholder: '06 00 00 00 00',
        emailLabel: 'Email',
        emailPlaceholder: 'vous@exemple.com',
        activityLabel: "Type d'activité",
        activityOptions: [
          'Commerce ou boutique',
          'Restaurant, café, bar',
          'Artisan',
          'Profession libérale',
          'Association',
          'Autre',
        ],
        projectLabel: 'Votre projet en quelques lignes',
        projectPlaceholder:
          'Ce que vous faites, ce que le site devrait apporter, et si vous avez une date en tête.',
        submit: 'Envoyer ma demande',
        privacyNote: "Vos informations ne servent qu'à vous répondre.",
      },
    },
    footer: {
      tagline: 'Création de sites web éco-responsables à Montpellier et alentours.',
      siteColumnTitle: 'Le site',
      siteLinks: ['Pourquoi moi', 'Réalisations', 'Offres'],
      contactColumnTitle: 'Contact',
      contactLinks: ['Formulaire', 'Questions fréquentes'],
      location: 'Montpellier, France',
      brand: 'Marius Dev',
      bottomRight: 'Hébergé sur des serveurs alimentés en énergie renouvelable.',
    },
    notFound: {
      pageTitle: 'Page introuvable',
      h1: 'Page introuvable',
      description: "La page que vous recherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil",
    },
    meta: {
      title: 'Marius Dev — Développeur web freelance à Montpellier',
      description:
        'Étudiant ingénieur à Polytech Montpellier, je crée des sites vitrines éco-responsables et performants, hébergés sur des serveurs verts. Devis offert.',
      ogDescription:
        'Sites vitrines sur-mesure, éco-responsables et hébergés sur des serveurs verts. Étudiant ingénieur à Polytech Montpellier.',
      twitterDescription:
        'Sites vitrines sur-mesure, éco-responsables et hébergés sur des serveurs verts.',
      locale: 'fr_FR',
    },
  },
  en: {
    header: headerText.en,
    hero: {
      badge: 'Web developer in Montpellier',
      h1: 'A clear, fast website that respects the planet.',
      paragraph:
        "I build your business website from A to Z: simple for your customers, visible on Google, and hosted on servers powered by renewable energy. You don't have to manage anything technical.",
      ctaPrimary: "Let's talk about your project",
      ctaSecondary: 'See pricing and packages',
      checklist: ['Reply within 24h', 'Green hosting', 'Free first chat'],
      studentLine1: 'Engineering student',
      studentLine2: 'Polytech Montpellier',
      portraitAlt: 'Portrait of Marius, freelance web developer in Montpellier',
    },
    whyMe: {
      eyebrow: 'Why Me',
      h2: 'Why trust me with your website',
      paragraph:
        'The rigour of an engineering education, the availability of a freelancer, and a single point of contact from start to finish.',
      items: [
        {
          title: 'A website built for you',
          body: 'No recycled templates. Your website is built around your business, your customers, and what you want them to do when they land on it.',
        },
        {
          title: 'Flawless on mobile',
          body: "Your site is responsive: it adapts to every screen. Over half of today's web traffic comes from mobile, so having a site that adapts really matters.",
        },
        {
          title: 'Findable on Google',
          body: 'Local SEO is built in from day one: when someone searches for your business in Montpellier, you show up.',
        },
      ],
    },
    engagement: {
      eyebrow: 'Commitment',
      h2: 'A leaner web, in practice',
      paragraph:
        "Sustainability isn't a footnote. It's how I build: nothing unnecessary makes the cut, and what remains runs on clean energy.",
      items: [
        {
          title: 'Green hosting',
          body: 'Your pages are hosted with Infomaniak, in Europe, in data centres powered by renewable energy.',
        },
        {
          title: 'Lightweight pages',
          body: 'Nothing superfluous: no needless scripts, no oversized images. A lean site uses less energy and loads faster — your visitors notice too!',
        },
        {
          title: 'Hands-on experience',
          body: 'Four months as a developer intern at Infomaniak, right inside their green infrastructure. I know their tools from the inside.',
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      h2: 'Three sites, three different needs',
      paragraph: 'Three live sites, each built around a specific need. Nothing recycled.',
      items: [
        {
          tag: 'Independent consulting',
          title: 'Via Orientation',
          body: 'Website for an independent career counsellor: her services presented clearly, with a contact process that gets straight to the point.',
        },
        {
          tag: 'Restaurant',
          title: 'Hakko',
          body: 'Website for a vegetarian restaurant in Montpellier: menu, hours and address found in two seconds from a phone.',
        },
        {
          tag: 'Playground',
          title: 'Mxrjup',
          body: 'My personal site, deliberately experimental: where I try out ideas before keeping the best ones for my clients.',
          imageAlt: 'Preview of the Mxrjup personal website',
          linkLabel: 'mxrjup.fun',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      h2: 'Two packages, no surprises',
      paragraph:
        'Website creation on its own, or the same build with hosting and maintenance included.',
      planA: {
        title: 'Website Creation',
        body: 'Your site designed and coded from scratch, delivered ready for its first visitors. You stay free to manage what comes next however you like.',
        price: 'from €500',
        priceNote: 'one-time',
        features: [
          'Clean, professional design',
          'Responsive: fits every screen',
          'Local SEO built in',
          'Lightweight, fast-loading pages',
        ],
        cta: 'Request a quote',
      },
      planB: {
        badge: 'Recommended',
        title: 'Peace-of-Mind Pack',
        body: 'The same website build, plus everything that keeps it running afterwards. Nothing left for you to keep an eye on.',
        price: 'from €500, then €100/year',
        priceNote: 'the build, then an all-inclusive annual plan',
        features: [
          'Everything in the Website Creation package',
          'Domain name included',
          'Green hosting with Infomaniak',
          'Secure site (SSL certificate)',
          'Updates and small changes',
          'Regular backups',
        ],
        cta: 'Ask about the Peace-of-Mind Pack',
      },
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions I get asked',
      paragraph: "No jargon. If yours isn't here, it has a place in the form below.",
      items: [
        {
          q: 'Can I edit my site myself?',
          a: "Yes, if you'd like to. I can set up a simple space for you to change your text, photos or opening hours without touching anything technical. And if you'd rather not think about it, I'll handle it for you, up to 3 times after launch.",
        },
        {
          q: 'How long does it take to get my site?',
          a: "Plan for two to four weeks for a showcase site, starting once I have your text and photos. We set a date together during our first chat, and I'll walk you through the site once it's ready for review.",
        },
        {
          q: 'Can you take over a site I already have?',
          a: "Yes. We look at what's already there together: sometimes a few fixes are enough, sometimes it's better to start fresh.",
        },
        {
          q: 'What happens after launch?',
          a: "I stay reachable. The Peace-of-Mind Pack covers the domain name, green hosting, security certificate, backups and updates — there's nothing for you to keep track of.",
        },
      ],
      noQuestion: "Don't see your question?",
      ctaLabel: 'Ask it here',
    },
    contact: {
      eyebrow: 'Contact',
      h2: "Let's talk about your project",
      paragraph:
        "Describe your business in a few lines. I'll reply within 24 hours with an initial idea of what we could do, no strings attached.",
      facts: [
        'Reply within 24h',
        'Montpellier and surrounding area',
        'Free first chat, no commitment',
      ],
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        phoneLabel: 'Phone',
        phonePlaceholder: '+33 6 00 00 00 00',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        activityLabel: 'Type of business',
        activityOptions: [
          'Shop or retail',
          'Restaurant, café, bar',
          'Tradesperson',
          'Self-employed professional',
          'Non-profit',
          'Other',
        ],
        projectLabel: 'Your project in a few lines',
        projectPlaceholder:
          'What you do, what the site should achieve, and any timeline you have in mind.',
        submit: 'Send my request',
        privacyNote: 'Your information is only ever used to reply to you.',
      },
    },
    footer: {
      tagline: 'Eco-friendly website design in Montpellier and the surrounding area.',
      siteColumnTitle: 'Site',
      siteLinks: ['Why me', 'Projects', 'Pricing'],
      contactColumnTitle: 'Contact',
      contactLinks: ['Contact form', 'FAQ'],
      location: 'Montpellier, France',
      brand: 'Marius Dev',
      bottomRight: 'Hosted on servers powered by renewable energy.',
    },
    notFound: {
      pageTitle: 'Page not found',
      h1: 'Page not found',
      description: "The page you're looking for doesn't exist or has been moved.",
      cta: 'Back to homepage',
    },
    meta: {
      title: 'Marius Dev — Freelance Web Developer in Montpellier',
      description:
        "Engineering student at Polytech Montpellier, I build eco-friendly, high-performance showcase websites hosted on Infomaniak's green servers. Reply within 24h.",
      ogDescription:
        'Custom-built, eco-friendly showcase websites hosted on green servers. Engineering student at Polytech Montpellier.',
      twitterDescription: 'Custom-built, eco-friendly showcase websites hosted on green servers.',
      locale: 'en_GB',
    },
  },
};
