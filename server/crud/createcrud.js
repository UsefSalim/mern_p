const { createController, createModel, createRoute, createValidation } = require('../creations/creations')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', async (answer) => {
  modelName = await answer
  rl.close();
})
exports.createCrud = (modelName) => {
  createController(modelName)
  createModel(modelName)
  createRoute(modelName)
  createValidation(modelName)
}


