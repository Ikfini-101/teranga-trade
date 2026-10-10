import fs from 'node:fs/promises'
import { globby } from 'globby'
import { minify } from 'html-minifier-terser'

import { existsSync } from 'node:fs'

// Get all HTML files from the output directory (Cloudflare Pages dist or Vercel static)
const path = existsSync('./dist') ? './dist' : (existsSync('./.vercel/output/static') ? './.vercel/output/static' : null)
const files = path ? await globby(`${path}/**/*.html`) : []

await Promise.all(
    files.map(async (file) => {
   	 console.log('Processing file:', file)
   	 let html = await fs.readFile(file, 'utf-8')

   	 // Minify the HTML
   	 html = await minify(html, {
   		 removeComments: true,
   		 preserveLineBreaks: true,
   		 collapseWhitespace: true,
		 minifyJS: true
   	 })
   	 await fs.writeFile(file, html)
    })
)