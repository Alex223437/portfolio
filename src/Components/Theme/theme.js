const THEME_KEY = 'theme'; 

export function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const meta = document.querySelector('meta[name="theme-color"]') || (() => {
    const m = document.createElement('meta');
    m.name = 'theme-color';
    document.head.appendChild(m);
    return m;
  })();
  const isDark = theme === 'dark' || (theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  meta.content = isDark ? '#191919' : '#ffffff';
}

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'auto';
  applyTheme(saved);

  if (saved === 'auto') {
    const mq = matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme('auto');
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
  }
}