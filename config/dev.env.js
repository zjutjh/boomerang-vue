'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const config = require('./index')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEV_PORT: `${config.dev.port}`,
  DEV_HOST: `"${config.dev.host}"`,
})
