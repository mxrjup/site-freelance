import HomePage from '../components/HomePage';
import { buildHomeMetadata } from '../lib/metadata';

export const metadata = buildHomeMetadata('fr');

export default function Page() {
  return <HomePage lang="fr" />;
}
