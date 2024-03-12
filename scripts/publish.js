import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { execSync } from 'child_process'

!existsSync('dist') && mkdirSync('dist')
;['package.json', 'package-lock.json', 'README.md', 'LICENSE', 'index.js'].forEach(name => {
  execSync(`cp -r ${name} dist`)
})
