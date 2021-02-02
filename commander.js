#!/usr/bin/env node
const program = require('commander');
const createApp = require('./server/squelette')


program
  .version('1.0.0')
  .description('test')

program
  .command('starproject <modelName>')
  .alias('sp')
  .description('starter project created succesfuly')
  .action((modelName) => {
    createApp.ServerCreate(modelName);
  })


program.parse(process.args)