const { createController, createModel, createRoute, createValidation } = require('../creations/newCrud')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`Nom du model `, (answer) => {
  createController(answer)
  createModel(answer)
  createRoute(answer)
  createValidation(answer)
  rl.close();
})




