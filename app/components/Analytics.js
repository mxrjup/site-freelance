// Rendered by every root document (RootShell, and global-not-found.js which
// can't go through RootShell since it renders its own standalone <html>).
//
// GoatCounter is cookieless and collects no personal data, so it needs no
// consent banner. count.js ignores localhost and private-range hosts on its
// own, so there is nothing to gate on NODE_ENV. Loaded async from the
// vendor's CDN: one extra request, no JS added to our own bundle.
export default function Analytics() {
  return (
    <script
      data-goatcounter="https://mariusdev.goatcounter.com/count"
      async
      src="https://gc.zgo.at/count.js"
    />
  );
}
