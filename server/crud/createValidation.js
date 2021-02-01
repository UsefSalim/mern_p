const { createValidation } = require('../creations/creations')

exports.createNewValidation = (modelName) => {
  createValidation(modelName)
}