const fs = require('fs');
const { validations } = require('../files/validations')
const { routes } = require('../files/routes')
const { controllers } = require('../files/controllers')
const { model } = require('../files/model')

const stepBack = "../../../../../";


exports.createController = (modelName) => {

  fs.appendFile(`${stepBack}/controllers/${modelName}.controllers.js`, controllers(modelName), function (err) {
    if (err) throw err;
  });

}
exports.createModel = (modelName) => {
  fs.appendFile(`${stepBack}/models/${modelName}.model.js`, model(modelName), function (err) {
    if (err) throw err;
  });

}
exports.createRoute = (modelName) => {
  fs.appendFile(`${stepBack}/routes/${modelName}.routes.js`, routes(modelName), function (err) {
    if (err) throw err;
  });
}

exports.createValidation = (modelName) => {
  fs.appendFile(`${stepBack}/validations/${modelName}.validations.js`, validations(modelName), function (err) {
    if (err) throw err;
  });
}
