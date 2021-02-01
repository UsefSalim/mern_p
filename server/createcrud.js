const { createController, createModel, createRoute, createValidation } = require('./creations/creations')


exports.createController = (modelName) => {
  createController(modelName)
  createModel(modelName)
  createRoute(modelName)
  createValidation(modelName)
}
