import { renderOgImage, size, contentType } from '../lib/ogImage';

export const dynamic = 'force-static';
export const alt = 'Marius — Développeur web freelance à Montpellier';
export { size, contentType };

export default function Image() {
  return renderOgImage({
    line1: 'Marius — Développeur web',
    line2: 'freelance à Montpellier',
    footer: 'Sites vitrines éco-responsables',
  });
}
