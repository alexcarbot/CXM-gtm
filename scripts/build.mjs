import { cpSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

// Clean and recreate dist
if (existsSync(DIST)) {
  rmSync(DIST, { recursive: true });
}
mkdirSync(DIST, { recursive: true });
mkdirSync(join(DIST, 'css'), { recursive: true });
mkdirSync(join(DIST, 'demo-scripts', 'assets'), { recursive: true });
mkdirSync(join(DIST, 'collateral'), { recursive: true });

// ──────────────────────────────────────────────────────────────────────────────
// Shared site nav + footer (inline styles, no external CSS dependency)
// Injected into all collateral/deck/demo-script pages at build time.
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Returns the site-wide nav HTML.
 * @param {string} activePath - the current page's URL path, used to highlight the active link
 */
function siteNav(activePath = '') {
  const link = (href, label) => {
    const isActive = href === activePath;
    const color = isActive ? '#1F2A56' : '#5F6172';
    const weight = isActive ? '600' : '500';
    return `<a href="${href}" style="color:${color};font-size:0.875rem;font-weight:${weight};text-decoration:none;">${label}</a>`;
  };
  return `
<!-- ── Site Nav ── -->
<nav style="position:sticky;top:0;z-index:200;background:#fff;border-bottom:1px solid #E8E8E8;padding:14px 0;font-family:'Montserrat',sans-serif;">
  <div style="max-width:1140px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;">
    <a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
      <img src="https://s3.us-east-2.amazonaws.com/carbot.logos/Logo+files/icon-transparent.png" alt="CarBot" style="height:32px;width:auto;">
      <span style="font-family:'Prompt',sans-serif;font-weight:700;font-size:1.0625rem;color:#1F2A56;">CarBot</span>
      <span style="font-family:'Prompt',sans-serif;font-weight:600;font-size:0.7rem;color:#48A9C5;margin-left:2px;">Cloud CXM</span>
    </a>
    <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
      ${link('/', 'Home')}
      ${link('/product', 'Product')}
      ${link('/gtm-deck', 'GTM Deck')}
      ${link('/demo-scripts', 'Demo Scripts')}
      ${link('/collateral/battle-card', 'Battle Card')}
      ${link('/collateral/one-pager-gm', 'One-Pager GM')}
      ${link('/collateral/one-pager-gsm', 'One-Pager GSM')}
      ${link('/collateral/sales-training', 'Training')}
    </div>
  </div>
</nav>`;
}

/**
 * Returns the site-wide footer HTML.
 * @param {string} activePath - highlights the active page link in the Sales column
 */
function siteFooter(activePath = '') {
  const salesLink = (href, label) => {
    const isActive = href === activePath;
    const color = isActive ? '#FFAD00' : '#8D8E9B';
    return `<a href="${href}" style="color:${color};text-decoration:none;">${label}</a>`;
  };
  return `
<!-- ── Site Footer ── -->
<footer style="background:#1F2A56;color:#BBBBC3;padding:48px 0 28px;font-family:'Montserrat',sans-serif;font-size:0.8125rem;margin-top:48px;">
  <div style="max-width:1140px;margin:0 auto;padding:0 24px;">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;">
      <div>
        <a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;margin-bottom:12px;">
          <img src="https://s3.us-east-2.amazonaws.com/carbot.logos/Logo+files/icon-transparent.png" alt="CarBot" style="height:26px;width:auto;">
          <span style="font-family:'Prompt',sans-serif;font-weight:700;font-size:1rem;color:#fff;">CarBot</span>
          <span style="font-family:'Prompt',sans-serif;font-weight:600;font-size:0.7rem;color:#48A9C5;margin-left:2px;">Cloud CXM</span>
        </a>
        <p style="color:#8D8E9B;font-size:0.8125rem;line-height:1.6;max-width:240px;">Purpose-built for automotive. Compliance-first architecture. Free for CarBot clients.</p>
      </div>
      <div>
        <h4 style="font-family:'Prompt',sans-serif;font-size:0.7rem;font-weight:600;color:#BBBBC3;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 14px;">Platform</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="/" style="color:#8D8E9B;text-decoration:none;">Home</a>
          <a href="/product" style="color:#8D8E9B;text-decoration:none;">Product</a>
          <a href="/#features" style="color:#8D8E9B;text-decoration:none;">Features</a>
          <a href="/#themes" style="color:#8D8E9B;text-decoration:none;">Themes</a>
          <a href="/#pricing" style="color:#8D8E9B;text-decoration:none;">Pricing</a>
        </div>
      </div>
      <div>
        <h4 style="font-family:'Prompt',sans-serif;font-size:0.7rem;font-weight:600;color:#BBBBC3;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 14px;">Sales</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${salesLink('/gtm-deck', 'GTM Deck')}
          ${salesLink('/demo-scripts', 'Demo Scripts')}
          ${salesLink('/demo-scripts/commercial', '60s Commercials')}
          ${salesLink('/demo-scripts/lightning', '7-Min Demo')}
          ${salesLink('/demo-scripts/full-story', '20-Min Demo')}
        </div>
      </div>
      <div>
        <h4 style="font-family:'Prompt',sans-serif;font-size:0.7rem;font-weight:600;color:#BBBBC3;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 14px;">Collateral</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${salesLink('/collateral/battle-card', 'Battle Card')}
          ${salesLink('/collateral/one-pager-gm', 'One-Pager (GM)')}
          ${salesLink('/collateral/one-pager-gsm', 'One-Pager (GSM)')}
          ${salesLink('/collateral/sales-training', 'Training Guide')}
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;">
      <p style="color:#8D8E9B;font-size:0.75rem;">© 2026 CarBot. All rights reserved.</p>
      <p style="color:#8D8E9B;font-size:0.75rem;">Free for CarBot dealer clients.</p>
    </div>
  </div>
</footer>`;
}

/** Inject site nav after <body> and site footer before </body> */
function injectNavFooter(html, activePath) {
  return html
    .replace(/(<body[^>]*>)/, `$1\n${siteNav(activePath)}`)
    .replace(/<\/body>/, `${siteFooter(activePath)}\n</body>`);
}

// ──────────────────────────────────────────────────────────────────────────────
// Link transformations applied to site/ pages
// ──────────────────────────────────────────────────────────────────────────────
function fixSiteLinks(html) {
  return html
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="product\.html"/g, 'href="/product"')
    .replace(/href="index\.html#([^"]+)"/g, 'href="/#$1"');
}

// ──────────────────────────────────────────────────────────────────────────────
// Helper: read, transform, write
// ──────────────────────────────────────────────────────────────────────────────
function copyTransformed(src, dest, transform = (x) => x) {
  const html = readFileSync(src, 'utf8');
  writeFileSync(dest, transform(html), 'utf8');
  console.log(`  wrote ${dest.replace(ROOT + '/', '')}`);
}

// ──────────────────────────────────────────────────────────────────────────────
// 1. Site pages (index + product) + CSS
// ──────────────────────────────────────────────────────────────────────────────
console.log('\nsite/');
copyTransformed(
  join(ROOT, 'site', 'index.html'),
  join(DIST, 'index.html'),
  fixSiteLinks
);
copyTransformed(
  join(ROOT, 'site', 'product.html'),
  join(DIST, 'product.html'),
  fixSiteLinks
);
cpSync(join(ROOT, 'site', 'css', 'style.css'), join(DIST, 'css', 'style.css'));
console.log('  wrote css/style.css');

// ──────────────────────────────────────────────────────────────────────────────
// 2. GTM Deck (inject nav + footer at build time)
// ──────────────────────────────────────────────────────────────────────────────
console.log('\ncollateral/');
copyTransformed(
  join(ROOT, 'collateral', 'cxm-gtm-deck.html'),
  join(DIST, 'gtm-deck.html'),
  (html) => injectNavFooter(html, '/gtm-deck')
);

// ──────────────────────────────────────────────────────────────────────────────
// 3. Demo scripts (inject nav + footer at build time)
// ──────────────────────────────────────────────────────────────────────────────
console.log('\ndemo-scripts/');

copyTransformed(
  join(ROOT, 'collateral', 'demo-scripts', 'cxm-demo-scripts-complete.html'),
  join(DIST, 'demo-scripts', 'index.html'),
  (html) => injectNavFooter(html, '/demo-scripts')
);

const scriptMap = [
  ['01-commercial-60s.html', 'commercial.html', '/demo-scripts/commercial'],
  ['02-short-presentation-7min.html', 'lightning.html', '/demo-scripts/lightning'],
  ['03-long-presentation-20min.html', 'full-story.html', '/demo-scripts/full-story'],
];
for (const [src, dest, activePath] of scriptMap) {
  copyTransformed(
    join(ROOT, 'collateral', 'demo-scripts', src),
    join(DIST, 'demo-scripts', dest),
    (html) => injectNavFooter(html, activePath)
  );
}

cpSync(
  join(ROOT, 'collateral', 'demo-scripts', 'assets'),
  join(DIST, 'demo-scripts', 'assets'),
  { recursive: true }
);
console.log('  wrote demo-scripts/assets/ (9 images)');

// ──────────────────────────────────────────────────────────────────────────────
// 4. Sales collateral (inject nav + footer at build time)
// ──────────────────────────────────────────────────────────────────────────────
console.log('\ncollateral/ (sales)');
const collateralMap = [
  ['battle-card.html', 'battle-card.html', '/collateral/battle-card'],
  ['one-pager-gm.html', 'one-pager-gm.html', '/collateral/one-pager-gm'],
  ['one-pager-gsm.html', 'one-pager-gsm.html', '/collateral/one-pager-gsm'],
  ['sales-training-guide.html', 'sales-training.html', '/collateral/sales-training'],
];
for (const [src, dest, activePath] of collateralMap) {
  copyTransformed(
    join(ROOT, 'collateral', src),
    join(DIST, 'collateral', dest),
    (html) => injectNavFooter(html, activePath)
  );
}

console.log('\nBuild complete. Output in dist/\n');
console.log('URL map:');
console.log('  /                          -> Homepage');
console.log('  /product                   -> Product page');
console.log('  /gtm-deck                  -> GTM Deck (14 slides)');
console.log('  /demo-scripts              -> Demo Scripts (all 4)');
console.log('  /demo-scripts/commercial   -> 60-second commercials');
console.log('  /demo-scripts/lightning    -> 7-minute presentation');
console.log('  /demo-scripts/full-story   -> 20-minute presentation');
console.log('  /collateral/battle-card    -> Battle Card');
console.log('  /collateral/one-pager-gm   -> One-Pager (GM)');
console.log('  /collateral/one-pager-gsm  -> One-Pager (GSM)');
console.log('  /collateral/sales-training -> Sales Training Guide');
