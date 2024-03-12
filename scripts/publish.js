import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { execSync } from 'child_process'

const version = +new Date()
execSync(`git tag v${version}`)
execSync(`git push origin v${version}`)
