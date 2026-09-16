// Shared by every root document (RootShell, and global-not-found.js which
// can't go through RootShell since it renders its own standalone <html>).
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;
