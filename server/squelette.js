const { createServer, createConfig, createController, createModel, createRoute, createValidation, gitignore, scripts } = require('./creations/creations')
const stepBack = "../../../";
exports.ServerCreate = (modelName) => {
  createController(modelName)
  createModel(modelName)
  createRoute(modelName)
  createValidation(modelName)
  createConfig()
  createServer()
  gitignore()

}
exports.updateJsonFile = () => {
  scripts()
}

