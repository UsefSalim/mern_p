const fs = require('fs');
const  {server}  = require('./files/server');
const  {validations}  = require('./files/validations')
const  {routes}  = require('./files/routes')
const  {controllers}  = require('./files/controllers')
const  {model}  = require('./files/model')
const  {env}  = require('./files/.env')
const stepBack = "../../../";


exports.ServerCreate = () => {

  fs.mkdir(`${stepBack}/controllers`, function () {
    fs.appendFile(`${stepBack}/controllers/Item.controllers.js`, controllers(), function (err) {
      if (err) throw err;
    });
  })
  fs.mkdir(`${stepBack}/models`, function () {
    fs.appendFile(`${stepBack}/models/Items.model.js`, model(), function (err) {
      if (err) throw err;
    });
  })
  fs.mkdir(`${stepBack}/config`, function () {
    fs.appendFile(`${stepBack}/config/.env`, env(), function (err) {
      if (err) throw err;
    });
  })
  fs.mkdir(`${stepBack}/routes`, function () {
    fs.appendFile(`${stepBack}/routes/Item.routes.js`, routes(), function (err) {
      if (err) throw err;
    });
  })
  fs.mkdir(`${stepBack}/validations`, function () {
    fs.appendFile(`${stepBack}/validations/Item.validations.js`, validations(), function (err) {
      if (err) throw err;
    });
  })
  fs.appendFile(`${stepBack}/server.js`, server(), function (err) {
    if (err) throw err;
  })
}
