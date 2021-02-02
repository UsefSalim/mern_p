#!/usr/bin/env node
const program = require('commander');
const { createController, createModel, createRoute, createValidation } = require('./server/creations/newCrud')


program
  .version('1.0.0')
  .description('test')
program
  .command('createController <modelName>')
  .alias('crud')
  .description('Crud created succesfuly')
  .action((modelName) => {
    fs.appendFile(`./${modelName}.controllers.js`, controllers(modelName), function (err) {
      if (err) throw err;
      else console.log(`${modelName}controller created`)
    });
  })
// program
//   .command('createController <modelName>')
//   .alias('cc')
//   .description('Crud created succesfuly')
//   .action((modelName) => {
//     console.log(`created ${modelName}`)
//   })


program.parse(process.args)