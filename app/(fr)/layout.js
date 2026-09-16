import RootShell from '../components/RootShell';
import { baseMetadata } from '../lib/metadata';

export const metadata = baseMetadata;

export default function FrRootLayout({ children }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
