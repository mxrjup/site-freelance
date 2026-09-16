// Kept separate from app/lib/i18n.js so the client-side Header component
// (persistent across navigation, see useLang) only ever ships these few
// strings to the browser instead of the whole site's copy in both languages.
export const headerText = {
  fr: {
    nav: ['Pourquoi moi', 'Engagement', 'Réalisations', 'Offres', 'Questions'],
    cta: 'Me contacter',
    openMenu: 'Ouvrir le menu de navigation',
    closeMenu: 'Fermer le menu de navigation',
    langGroupLabel: 'Choix de la langue',
    themeToggleLabel: 'Basculer le mode sombre',
  },
  en: {
    nav: ['Why me', 'Commitment', 'Projects', 'Pricing', 'FAQ'],
    cta: 'Get in touch',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    langGroupLabel: 'Language selection',
    themeToggleLabel: 'Toggle dark mode',
  },
};

export const LANG_OPTIONS = [
  { code: 'fr', href: '/', short: 'FR', name: 'Français' },
  { code: 'en', href: '/en/', short: 'EN', name: 'English' },
];
