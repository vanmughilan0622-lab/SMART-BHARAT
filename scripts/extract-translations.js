const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..', 'src')
const exts = ['.tsx', '.ts', '.jsx', '.js']
const results = []

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      walk(full)
    } else if (exts.includes(path.extname(full))) {
      scanFile(full)
    }
  }
}

function scanFile(file) {
  const src = fs.readFileSync(file, 'utf8')
  const rel = path.relative(process.cwd(), file)
  const texts = new Set()

  // Match JSX text between tags: > some text <
  const jsxTextRe = />\s*([^<>\n]+?)\s*</g
  let m
  while ((m = jsxTextRe.exec(src))) {
    const txt = m[1].trim()
    if (txt && /[A-Za-z0-9]/.test(txt) && txt.length > 1) texts.add(txt)
  }

  // Match attributes like title="..." or aria-label='...'
  const attrRe = /(title|aria-label|alt|placeholder)\s*=\s*(['`\"])([^'"`<>]{2,}?)\2/gi
  while ((m = attrRe.exec(src))) {
    const txt = m[3].trim()
    if (txt && /[A-Za-z0-9]/.test(txt)) texts.add(txt)
  }

  // Match string literals used directly in JSX like {"Submit"}
  const jsxStringRe = /\{\s*(['"])([A-Za-z0-9][^'"<>]{1,}?)\1\s*\}/g
  while ((m = jsxStringRe.exec(src))) {
    const txt = m[2].trim()
    if (txt && /[A-Za-z0-9]/.test(txt)) texts.add(txt)
  }

  if (texts.size) {
    results.push({ file: rel, texts: Array.from(texts).slice(0, 200) })
  }
}

walk(root)

const out = { extracted: results }
fs.writeFileSync(path.resolve(__dirname, '..', 'translation-extraction.json'), JSON.stringify(out, null, 2))
console.log('Extraction complete. See translation-extraction.json')
