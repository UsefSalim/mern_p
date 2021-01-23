const fs = require('fs');
const { server, env, controller, model, routes } = require('./server');
const stepBack = "../../../";


exports.ServerCreate = () => {

  fs.mkdir(`${stepBack}/controllers`, function () {
    fs.appendFile(`${stepBack}/controllers/Item.controller.js`, controller, function (err) {
      if (err) throw err;
    });
  })
  fs.mkdir(`${stepBack}/models`, function () {
    fs.appendFile(`${stepBack}/models/Items.model.js`, model, function (err) {
      if (err) throw err;
    });
  })
  fs.mkdir(`${stepBack}/config`, function () {
    fs.appendFile(`${stepBack}/config/.env`, env, function (err) {
      if (err) throw err;
    });
  })
  fs.mkdir(`${stepBack}/routes`, function () {
    fs.appendFile(`${stepBack}/routes/Item.route.js`, routes, function (err) {
      if (err) throw err;
    });
  })
  fs.appendFile(`${stepBack}/server.js`, server, function (err) {
    if (err) throw err;
  })
}
// fs.mkdir(`${stepBack}/client`, function () {
//   if (err) throw err;
//   console.log("client side created ")
// })