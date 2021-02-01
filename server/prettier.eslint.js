const { eslint, vsCodeConfig, prettier } = require('./creations/eslint.prettier')

exports.configPrettierEslint = () => {
  eslint()
  vsCodeConfig()
  prettier()
}