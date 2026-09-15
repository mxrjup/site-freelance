import { renderOgImage, size, contentType } from '../lib/ogImage';

export const dynamic = 'force-static';
export const alt = 'Marius — Freelance Web Developer in Montpellier';
export { size, contentType };

export default function Image() {
  return renderOgImage({
    line1: 'Marius — Freelance Web',
    line2: 'Developer in Montpellier',
    footer: 'Eco-friendly showcase websites',
  });
}
