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
// Link transformations applied to site/ pages
// ──────────────────────────────────────────────────────────────────────────────
function fixSiteLinks(html) {
  return html
    // Nav: href="index.html" -> href="/"
    .replace(/href="index\.html"/g, 'href="/"')
    // Nav: href="product.html" -> href="/product"
    .replace(/href="product\.html"/g, 'href="/product"')
    // Anchor links back to index: href="index.html#..." -> href="/#..."
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
// 2. GTM Deck
// ──────────────────────────────────────────────────────────────────────────────
console.log('\ncollateral/');
cpSync(
  join(ROOT, 'collateral', 'cxm-gtm-deck.html'),
  join(DIST, 'gtm-deck.html')
);
console.log('  wrote gtm-deck.html');

// ──────────────────────────────────────────────────────────────────────────────
// 3. Demo scripts
//    Combined script references assets/ relatively -- keep directory structure
// ──────────────────────────────────────────────────────────────────────────────
console.log('\ndemo-scripts/');

// Combined (served at /demo-scripts -> dist/demo-scripts/index.html)
cpSync(
  join(ROOT, 'collateral', 'demo-scripts', 'cxm-demo-scripts-complete.html'),
  join(DIST, 'demo-scripts', 'index.html')
);
console.log('  wrote demo-scripts/index.html');

// Individual scripts with clean names
const scriptMap = [
  ['01-commercial-60s.html', 'commercial.html'],
  ['02-short-presentation-7min.html', 'lightning.html'],
  ['03-long-presentation-20min.html', 'full-story.html'],
];
for (const [src, dest] of scriptMap) {
  cpSync(
    join(ROOT, 'collateral', 'demo-scripts', src),
    join(DIST, 'demo-scripts', dest)
  );
  console.log(`  wrote demo-scripts/${dest}`);
}

// Image assets (preserve relative paths for combined script)
cpSync(
  join(ROOT, 'collateral', 'demo-scripts', 'assets'),
  join(DIST, 'demo-scripts', 'assets'),
  { recursive: true }
);
console.log('  wrote demo-scripts/assets/ (9 images)');

// ──────────────────────────────────────────────────────────────────────────────
// 4. Sales collateral (optional -- self-contained, no image deps)
// ──────────────────────────────────────────────────────────────────────────────
console.log('\ncollateral/ (sales)');
const collateralMap = [
  ['battle-card.html', 'battle-card.html'],
  ['one-pager-gm.html', 'one-pager-gm.html'],
  ['one-pager-gsm.html', 'one-pager-gsm.html'],
  ['sales-training-guide.html', 'sales-training.html'],
];
for (const [src, dest] of collateralMap) {
  cpSync(
    join(ROOT, 'collateral', src),
    join(DIST, 'collateral', dest)
  );
  console.log(`  wrote collateral/${dest}`);
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
