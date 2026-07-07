const fs = require('fs');
const glob = require('glob'); // Note: we might not have glob, but we can just use an array of paths

const paths = [
  'src/app/dashboard/transparency/page.tsx',
  'src/app/dashboard/vault/page.tsx',
  'src/app/dashboard/tracking/page.tsx',
  'src/app/dashboard/profile/page.tsx'
];

for (const p of paths) {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n\n--- ${p} ---`);
  
  // A crude regex to find text between > and <
  const matches = content.match(/>([^<]+)</g);
  if (matches) {
    const texts = matches
      .map(m => m.slice(1, -1).trim())
      .filter(m => m.length > 2 && !m.includes('{') && !m.includes('}'));
    
    // De-duplicate
    const unique = [...new Set(texts)];
    for (const text of unique) {
      console.log(`"${text}": "",`);
    }
  }
}
