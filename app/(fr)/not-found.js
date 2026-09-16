import NotFoundPage from '../components/NotFoundPage';
import { dict } from '../lib/i18n';

export const metadata = {
  title: dict.fr.notFound.pageTitle,
};

export default function NotFound() {
  return <NotFoundPage lang="fr" />;
}
