import NotFoundPage from './components/NotFoundPage';
import './globals.css';
import { dict } from './lib/i18n';

// This is the site's single global 404 (static export only ever serves one
// physical 404.html regardless of which locale a broken link was under), so
// unlike every other page it renders with no root layout of its own — Next
// supplies a bare implicit one for this exact case.

export const metadata = {
  title: dict.fr.notFound.pageTitle,
};

export default function NotFound() {
  return <NotFoundPage lang="fr" />;
}
