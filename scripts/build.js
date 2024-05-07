import { existsSync, mkdirSync, cpSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const rootDir = resolve(import.meta.dirname, '../')
!existsSync('dist') && mkdirSync('dist')
;['package.json', 'README.md', 'LICENSE', 'index.js'].forEach(name => {
  cpSync(resolve(rootDir, name), resolve(rootDir, 'dist', name))
})

writeFileSync(resolve(rootDir, 'dist/demo.js'), `console.log('npm-demo-demo')`)
