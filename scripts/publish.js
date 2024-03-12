import { execSync } from 'child_process'

const list = ['package.json', 'package-lock.json', 'README.md', 'LICENSE', 'index.js']
list.forEach(name => {
  execSync(`cp -r ${name} dist`)
})
