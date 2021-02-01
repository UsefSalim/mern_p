const { createController } = require('../creations/creations')

exports.createNewController = (modelName) => {
  createController(modelName)
}