

const {createServer,createConfig,createController,createModel,createRoute,createValidation} = require('./creations')

exports.ServerCreate = (modelName) => {

  createController(modelName)

  createModel(modelName)

  createRoute(modelName)

  createValidation(modelName)

createConfig()
createServer()
 
}

