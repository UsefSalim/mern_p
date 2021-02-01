const stepBack = "../../../";
const fs = require('fs');
exports.vsCodeConfig = () => {
  fs.mkdir(`${stepBack}/.vscode`, function () {
    fs.appendFile(`${stepBack}/.vscode/settings.json`,
      `{
        "editor.formatOnSave": true,
        "editor.tabSize": 2,
        "[javascript]": {
          "editor.formatOnSave": false
        },
        "editor.codeActionsOnSave": {
          "source.fixAll": true
        }
      }`,
      function (err) {
        if (err) throw err;
      });
  })
}

exports.prettier = () => {
  fs.appendFile(`${stepBack}/.prettierrc`,
    `{
      "printWidth": 80,
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false
    }`
    ,
    function (err) {
      if (err) throw err;
    });
}
exports.eslint = () => {
  fs.appendFile(`${stepBack}/.eslintrc.json`,
    ` {
      "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
      },
      "extends": ["airbnb-base", "prettier"],
      "plugins": ["prettier"],
      "parserOptions": {
        "ecmaVersion": 12
      },
      "rules": {
        "prettier/prettier": [
          "error",
          {
            "endOfLine": "auto"
          }
        ],
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "no-confusing-arrow": "off",
        "linebreak-style": "off",
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "no-shadow": "off",
        "arrow-parens": ["off"],
        "comma-dangle": [
          "error",
          {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
          }
        ],
        "no-plusplus": "off",
        "complexity": ["error", 4],
        "default-case": "error"
      }
    }`
    ,
    function (err) {
      if (err) throw err;
    });
}
exports.gitignore = () => {
  fs.appendFile(`${stepBack}/.gitignore`,
    `/node_modules
    .prettier
    .eslintrc.json`
    ,
    function (err) {
      if (err) throw err;
    });
}
