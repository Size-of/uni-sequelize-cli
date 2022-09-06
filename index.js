#!/usr/bin/env node

const path = require('path')
const { program } = require('commander')

program.command('init').description('init sequelize model').option('-s, --source [source]', 'source file or folder')
  .action((opts) => {
    console.log(opts)
  })
program.parse(process.argv)