import RootShell from '../components/RootShell';
import { baseMetadata } from '../lib/metadata';

export const metadata = baseMetadata;

export default function EnRootLayout({ children }) {
  return <RootShell lang="en">{children}</RootShell>;
}
