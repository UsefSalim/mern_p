const fs = require('fs');

const {createController,createModel,createRoute,createValidation} = require('./creations')
const stepBack = "../../../";

exports.ServerCreate = (modelName) => {

  createController(modelName)

  createModel(modelName)

  createRoute(modelName)

  createValidation(modelName)

  fs.mkdir(`${stepBack}/config`, function () {
    fs.appendFile(`${stepBack}/config/.env`, env(), function (err) {
      if (err) throw err;
    });
  })
  fs.appendFile(`${stepBack}/server.js`, server(), function (err) {
    if (err) throw err;
  })
}

