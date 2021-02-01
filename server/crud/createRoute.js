const { createRoute } = require('../creations/creations')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`Route Name Uppercase 
Ex : User => User.routes.js`, (answer) => {
  createRoute(answer)
  rl.close();
})
