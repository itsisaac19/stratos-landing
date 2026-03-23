/** Inline IIFE string: set `data-theme` on <html> before paint (see RootLayout). */
export const THEME_STORAGE_KEY = "stratos-theme";

export const themeInitScript = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY
)};var s=localStorage.getItem(k);var t='dark';if(s==='light'||s==='dark')t=s;else if(window.matchMedia('(prefers-color-scheme: light)').matches)t='light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;
