const { readFileSync, writeFileSync, unlinkSync } = require('fs')

const pkg = JSON.parse(readFileSync('./package.json'))

pkg.devDependencies = undefined
pkg.scripts = undefined
pkg.imports = undefined
pkg.description = undefined
pkg.main = undefined
pkg.keywords = undefined
for (const exportPath of Object.keys(pkg.exports)) {
  pkg.exports[exportPath].import = undefined
  pkg.exports[exportPath].require = undefined
  pkg.exports[exportPath].node = pkg.exports[exportPath].browser
}

pkg.files.push('!dist/**/package.json')
pkg.files.push('!dist/node/**/*')
pkg.files.push('dist/**/*.bundle.js')
pkg.files.push('dist/**/*.umd.js')
pkg.files.push('dist/**/*.min.js')
pkg.name = '@foxstack/wx-jose-browser-runtime'
pkg.type = 'module'

writeFileSync('./package.json', `${JSON.stringify(pkg, null, 2)}\n`)
unlinkSync('./CHANGELOG.md')
unlinkSync('./README.md')
