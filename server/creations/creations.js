const fs = require('fs');
const { server } = require('../files/server');
const { validations } = require('../files/validations')
const { routes } = require('../files/routes')
const { controllers } = require('../files/controllers')
const { model } = require('../files/model')
const { env } = require('../files/.env')
const stepBack = "../../../";


exports.createController = (modelName) => {
  fs.mkdir(`${stepBack}/controllers`, function () {
    fs.appendFile(`${stepBack}/controllers/${modelName}.controllers.js`, controllers(modelName), function (err) {
      if (err) throw err;
    });
  })
}
exports.createModel = (modelName) => {
  fs.mkdir(`${stepBack}/models`, function () {
    fs.appendFile(`${stepBack}/models/${modelName}.model.js`, model(modelName), function (err) {
      if (err) throw err;
    });
  })
}
exports.createRoute = (modelName) => {
  fs.mkdir(`${stepBack}/routes`, function () {
    fs.appendFile(`${stepBack}/routes/${modelName}.routes.js`, routes(modelName), function (err) {
      if (err) throw err;
    });
  })
}

exports.createValidation = (modelName) => {
  fs.mkdir(`${stepBack}/validations`, function () {
    fs.appendFile(`${stepBack}/validations/${modelName}.validations.js`, validations(modelName), function (err) {
      if (err) throw err;
    });
  })
}
exports.createConfig = () => {
  fs.mkdir(`${stepBack}/config`, function () {
    fs.appendFile(`${stepBack}/config/.env`, env(), function (err) {
      if (err) throw err;
    });
    fs.appendFile(`${stepBack}/config/configurations.js`,
      `const path = '@ucef/mernpack/server'
          const prettierEslint = require(path+'/prettier.eslint')
          const create = require(path+'/createcrud')

          // prettierEslint.configPrettierEslint()
          // create.createCrud("User")
          // create.createNewController("Test")
          // create.createNewModel("Test")
          // create.createNewRoute("Test")
          // create.createNewValidation("Test")`,
      function (err) {
        if (err) throw err;
      });
  })
}
exports.createServer = () => {
  fs.appendFile(`${stepBack}/server.js`, server(), function (err) {
    if (err) throw err;
  })
}

exports.gitignore = () => {
  fs.appendFile(`./.gitignore`,
    `/node_modules
    .prettier
    .eslintrc.json`
    ,
    function (err) {
      if (err) throw err;
    });
}
exports.readme = () => {
  fs.appendFile(`./README.md`,
    `/mern pack `
    ,
    function (err) {
      if (err) throw err;
    });
}