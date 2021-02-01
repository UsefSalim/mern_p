const { createController, createModel, createRoute, createValidation } = require('./creations/newCrud')

exports.createCrud = (modelName) => {
  createController(modelName)
  createModel(modelName)
  createRoute(modelName)
  createValidation(modelName)
}
exports.createNewController = (modelName) => {
  createController(modelName)
}
exports.createNewModel = (modelName) => {
  createModel(modelName)
}
exports.createNewRoute = (modelName) => {
  createRoute(modelName)
}
exports.createNewValidation = (modelName) => {
  createValidation(modelName)
}

