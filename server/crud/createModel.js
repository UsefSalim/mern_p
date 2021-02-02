const { createModel } = require('../creations/newCrud')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`Model Name Uppercase 
Ex : User => User.model.js`, (answer) => {
  createModel(answer)
  rl.close();
})
