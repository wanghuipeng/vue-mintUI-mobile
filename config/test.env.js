'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"',
    API_ROOT: '"http://192.168.1.128:1030/fjs/"',
    API_TOKEN: '"Bearer "'
})