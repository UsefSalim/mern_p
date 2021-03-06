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
    // fs.appendFile(`${stepBack}/config/configurations.js`,
    //   `const path = '@ucef/mernpack/server'
    //       const prettierEslint = require(path+'/prettier.eslint')
    //       const create = require(path+'/createcrud')

    //       // prettierEslint.configPrettierEslint()
    //       // create.createCrud("User")
    //       // create.createNewController("Test")
    //       // create.createNewModel("Test")
    //       // create.createNewRoute("Test")
    //       // create.createNewValidation("Test")`,
    //   function (err) {
    //     if (err) throw err;
    //   });
  })
}
exports.createServer = () => {
  fs.appendFile(`${stepBack}/server.js`, server(), function (err) {
    if (err) throw err;
  })
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
// exports.readme = () => {
//   fs.appendFile(`${stepBack}/mernp.README.md`,
//     `/mern pack 
//     scripts creation :
//      "createController": "cd node_modules/@ucef/mernpack/server/crud && node createController",
//      "createCrud": "cd node_modules/@ucef/mernpack/server/crud && node createCrud",
//      "createModel": "cd node_modules/@ucef/mernpack/server/crud && node createModel",
//      "createRoute": "cd node_modules/@ucef/mernpack/server/crud && node createRoute",
//      "createValidation": "cd node_modules/@ucef/mernpack/server/crud && node createValidation",
//      "createPrettierConfig" : "cd node_modules/@ucef/mernpack/server/crud && node createPrettierConfig
//      "mernPrettier" : "npm i prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-config-airbnb-base"
//      `
//     ,
//     function (err) {
//       if (err) throw err;
//     });
// }

// exports.scripts = () => {
//   fs.readFile(`${stepBack}/package.json`, "utf-8", (err, data) => {
//     let package = JSON.parse(data);
//     if (!err) {
//       package.scripts.createController = "cd node_modules/@ucef/mernpack/server/crud && node createController";
//       package.scripts.createCrud = "cd node_modules/@ucef/mernpack/server/crud && node createCrud";
//       package.scripts.createModel = "cd node_modules/@ucef/mernpack/server/crud && node createModel";
//       package.scripts.createRoute = "cd node_modules/@ucef/mernpack/server/crud && node createRoute";
//       package.scripts.createValidation = "cd node_modules/@ucef/mernpack/server/crud && node createValidation";
//       package.scripts.createPrettierConfig = "cd node_modules/@ucef/mernpack/server/crud && node createValidation";
//       package.scripts.mernPrettier = "npm i prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-config-airbnb-base";
//       package.scripts.dev = "nodemon server.js";
//     }
//     fs.writeFile(`./package.json`, JSON.stringify(package), (err) => {
//       err
//         ? console.log("err", err)
//         : console.log('package.json updated !')
//     })
//   });
// }
