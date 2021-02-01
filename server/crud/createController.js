const { createController } = require('../creations/creations')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`Controller Name Uppercase 
Ex : User => User.controller.js`, (answer) => {
  createController(answer)
  rl.close();
})
v