const { createServer, createConfig, createController, createModel, createRoute, createValidation } = require('./creations/creations')
// const { eslint, gitignore, vsCodeConfig, prettier } = require('./creations/eslint.prettier')

exports.ServerCreate = (modelName) => {

  createController(modelName)
  createModel(modelName)
  createRoute(modelName)
  createValidation(modelName)
  createConfig()
  createServer()

  //// prettier vs config 
  // eslint()
  // gitignore()
  // vsCodeConfig()
  // prettier()

}

