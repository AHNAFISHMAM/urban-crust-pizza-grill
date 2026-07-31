import fs from 'fs'
import https from 'https'
import path from 'path'

/** Verified Unsplash sources — re-run with `npm run fetch-images` if any 404. */
const images = {
  'urban-crust-spread.jpg':
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80',
  'urban-special-pizza.jpg':
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&q=80',
  'smash-burger.jpg':
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80',
  'meat-lover-pizza.jpg':
    'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=900&q=80',
  'veggie-pizza.jpg':
    'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=900&q=80',
  'fried-chicken.jpg':
    'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900&q=80',
  'sweet-chili-wings.jpg':
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80',
  'naga-wings.jpg':
    'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900&q=80',
  'seasoned-fries.jpg':
    'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=80',
  'berry-chantilly.jpg':
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&q=80',
  'tiramisu.jpg':
    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=900&q=80',
  'chocolate-tub-cake.jpg':
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80',
  'turkish-caramel-milk-cake.jpg':
    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=900&q=80',
  'tres-leches.jpg':
    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=900&q=80',
  'red-velvet.jpg':
    'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=900&q=80',
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          res.destroy()
          download(res.headers.location, dest).then(resolve).catch(reject)
          return
        }

        if (!res.statusCode || res.statusCode >= 400) {
          file.close()
          fs.unlink(dest, () => {})
          reject(new Error(`${url} returned ${res.statusCode}`))
          return
        }

        res.pipe(file)
        file.on('finish', () => {
          file.close(() => {
            const size = fs.statSync(dest).size
            if (size < 1024) {
              fs.unlinkSync(dest)
              reject(new Error(`${url} downloaded only ${size} bytes`))
              return
            }
            resolve(undefined)
          })
        })
      })
      .on('error', reject)
  })
}

async function main() {
  fs.mkdirSync('public', { recursive: true })

  for (const [name, url] of Object.entries(images)) {
    const dest = path.join('public', name)
    process.stdout.write(`fetch ${name} ... `)
    try {
      await download(url, dest)
      const size = fs.statSync(dest).size
      console.log(`ok (${Math.round(size / 1024)}kb)`)
    } catch (error) {
      console.log('failed')
      console.error(`  ${error.message}`)
      process.exitCode = 1
    }
  }

  if (!process.exitCode) console.log('done')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
