const { eslint, gitignore, vsCodeConfig, prettier } = require('./creations/eslint.prettier')




exports.configPrettierEslint(){
  eslint()
  gitignore()
  vsCodeConfig()
  prettier()
}