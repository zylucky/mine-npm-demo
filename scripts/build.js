import { existsSync, mkdirSync, cpSync } from 'fs'
import { resolve } from 'path'

const rootDir = resolve(import.meta.dirname, '../')
!existsSync('dist') && mkdirSync('dist')
;['package.json', 'package-lock.json', 'README.md', 'LICENSE', 'index.js'].forEach(name => {
  cpSync(resolve(rootDir, name), resolve(rootDir, 'dist', name))
})
