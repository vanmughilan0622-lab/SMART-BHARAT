const fs = require('fs');
const files = [
  'src/app/dashboard/vault/page.tsx', 
  'src/app/dashboard/transparency/page.tsx', 
  'src/app/dashboard/tracking/page.tsx'
];

files.forEach(f => { 
  let content = fs.readFileSync(f, 'utf8'); 
  if (!content.includes('"use client"')) { 
    fs.writeFileSync(f, '"use client"\n\n' + content); 
    console.log('Added use client to ' + f); 
  } 
});
