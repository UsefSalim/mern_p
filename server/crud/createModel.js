const { createModel } = require('../creations/creations')

exports.createNewModel = (modelName) => {
  createModel(modelName)
}