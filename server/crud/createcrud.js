const { createController, createModel, createRoute, createValidation } = require('../creations/creations')

exports.createCrud = (modelName) => {
  createController(modelName)
  createModel(modelName)
  createRoute(modelName)
  createValidation(modelName)
}


