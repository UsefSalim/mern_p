const { createValidation } = require('../creations/newCrud')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`Validations Name Uppercase 
Ex : User => User.validation.js`, (answer) => {
  createValidation(answer)
  rl.close();
})
