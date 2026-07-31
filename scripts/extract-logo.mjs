import fs from 'fs'

const content = fs.readFileSync('UX.md', 'utf8')
const match = content.match(/src="(data:image\/png;base64,[^"]+)"/)
if (!match) {
  console.error('Logo not found')
  process.exit(1)
}
fs.writeFileSync(
  'src/lib/logo.ts',
  `export const LOGO_SRC = ${JSON.stringify(match[1])};\n`,
)
console.log('Logo extracted')
