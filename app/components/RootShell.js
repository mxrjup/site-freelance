import { Figtree, Caprasimo } from 'next/font/google';
import Header from './Header';
import '../globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
});

const caprasimo = Caprasimo({
  variable: '--font-caprasimo',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootShell({ lang, children }) {
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${figtree.variable} ${caprasimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <Header />
        {children}
      </body>
    </html>
  );
}
