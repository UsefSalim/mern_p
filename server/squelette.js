const { createServer, createConfig, createController, createModel, createRoute, createValidation, gitignore } = require('./creations/creations')
const stepBack = "../../../";
exports.ServerCreate = (modelName) => {
  createController(modelName)
  createModel(modelName)
  createRoute(modelName)
  createValidation(modelName)
  createConfig()
  createServer()
  gitignore()
  // readme()
  fs.readFile(`${stepBack}/package.json`, "utf-8", (err, data) => {
    const package = JSON.parse(data);
    package.scripts.new = `"createController": "cd node_modules/@ucef/mernpack/server/crud && node createController",
     "createCrud": "cd node_modules/@ucef/mernpack/server/crud && node createCrud",
     "createModel": "cd node_modules/@ucef/mernpack/server/crud && node createModel",
     "createRoute": "cd node_modules/@ucef/mernpack/server/crud && node createRoute",
     "createValidation": "cd node_modules/@ucef/mernpack/server/crud && node createValidation",
     "createPrettierConfig" : "cd node_modules/@ucef/mernpack/server/crud && node createPrettierConfig,
     "mernPrettier" : "npm i prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-config-airbnb-base"`;
    fs.writeFile(`${stepBack}/package.json`, JSON.stringify(package), (err) => {
      if (err) console.log("err", err);
    })
  });
}

